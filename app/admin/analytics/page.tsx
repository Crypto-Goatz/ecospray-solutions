"use client"

import { useState, useEffect, useCallback } from "react"
import {
  BarChart3,
  Eye,
  Send,
  Users,
  ArrowDown,
  MousePointerClick,
  AlertTriangle,
  MousePointer,
  LogOut,
  Clock,
  ExternalLink,
  Activity,
  RefreshCw,
} from "lucide-react"

// ============================================================
// Types
// ============================================================

interface EventRow {
  id: string
  timestamp: string
  layer: string
  event_type: string
  payload: string // JSON string
  agent_id: string
}

interface ParsedPayload {
  visitorId?: string
  sessionId?: string
  url?: string
  pageTitle?: string
  consentStatus?: string
  data?: Record<string, any>
  context?: Record<string, any>
}

interface PageStats {
  path: string
  views: number
  avgScroll: number
  engagementEvents: number
}

// ============================================================
// Helper: safe JSON parse
// ============================================================

function safeParse(raw: string): ParsedPayload {
  try {
    return JSON.parse(raw || "{}")
  } catch {
    return {}
  }
}

function extractPath(url: string | undefined): string {
  if (!url) return "/"
  try {
    const u = new URL(url)
    return u.pathname || "/"
  } catch {
    return url.replace(/https?:\/\/[^/]+/, "") || "/"
  }
}

function formatTimestamp(ts: string): string {
  try {
    const d = new Date(ts)
    if (isNaN(d.getTime())) return ts
    return d.toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
  } catch {
    return ts
  }
}

function relativeTime(ts: string): string {
  try {
    const now = Date.now()
    const then = new Date(ts).getTime()
    if (isNaN(then)) return ts
    const diff = now - then
    const mins = Math.floor(diff / 60000)
    if (mins < 1) return "just now"
    if (mins < 60) return `${mins}m ago`
    const hours = Math.floor(mins / 60)
    if (hours < 24) return `${hours}h ago`
    const days = Math.floor(hours / 24)
    return `${days}d ago`
  } catch {
    return ts
  }
}

// Event type color mapping for the timeline dots
const EVENT_COLORS: Record<string, string> = {
  page_view: "bg-green-500",
  scroll_depth: "bg-blue-500",
  click: "bg-cyan-500",
  rage_click: "bg-red-500",
  dead_click: "bg-yellow-500",
  exit_intent: "bg-orange-500",
  form_view: "bg-purple-500",
  form_start: "bg-purple-400",
  form_complete: "bg-emerald-500",
  form_abandon: "bg-red-400",
  contact_form_submission: "bg-emerald-400",
  form_submit: "bg-emerald-400",
  engagement_summary: "bg-teal-500",
  web_vital: "bg-indigo-500",
  copy: "bg-pink-500",
  paste: "bg-pink-400",
  tab_visibility: "bg-zinc-500",
  idle_start: "bg-zinc-600",
  idle_end: "bg-zinc-400",
  attribution: "bg-amber-500",
  js_error: "bg-red-600",
  performance: "bg-indigo-400",
}

const ENGAGEMENT_TYPES = new Set([
  "click",
  "rage_click",
  "dead_click",
  "copy",
  "paste",
  "form_start",
  "form_complete",
  "form_view",
  "form_abandon",
  "field_interaction",
  "field_hesitation",
])

const FORM_TYPES = new Set([
  "form_view",
  "form_start",
  "form_complete",
  "form_abandon",
  "form_submit",
  "contact_form_submission",
  "field_interaction",
  "field_hesitation",
])

// ============================================================
// Skeleton Loader
// ============================================================

function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-zinc-800/60 ${className}`}
    />
  )
}

function StatCardSkeleton() {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
      <Skeleton className="h-4 w-24 mb-3" />
      <Skeleton className="h-8 w-16 mb-2" />
      <Skeleton className="h-3 w-32" />
    </div>
  )
}

// ============================================================
// Component: StatCard
// ============================================================

function StatCard({
  label,
  value,
  subtitle,
  icon: Icon,
  accent = "text-green-400",
}: {
  label: string
  value: string | number
  subtitle?: string
  icon: React.ElementType
  accent?: string
}) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-zinc-400">{label}</span>
        <div className={`w-8 h-8 rounded-lg bg-zinc-800/80 flex items-center justify-center ${accent}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
      {subtitle && (
        <p className="text-xs text-zinc-500 mt-1">{subtitle}</p>
      )}
    </div>
  )
}

// ============================================================
// Main Page Component
// ============================================================

export default function AnalyticsPage() {
  const [events, setEvents] = useState<EventRow[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastRefresh, setLastRefresh] = useState<Date | null>(null)

  const fetchEvents = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const res = await fetch("/api/cms/content?sheet=0n_events")
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || `HTTP ${res.status}`)
      }

      const json = await res.json()
      const rows: EventRow[] = Array.isArray(json.data) ? json.data : []
      setEvents(rows)
      setLastRefresh(new Date())
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load events")
      setEvents([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchEvents()
  }, [fetchEvents])

  // ========== Derived data ==========

  const parsedEvents = events.map((e) => ({
    ...e,
    parsed: safeParse(e.payload),
  }))

  // Stats
  const totalEvents = parsedEvents.length

  const pageViews = parsedEvents.filter(
    (e) => e.event_type === "page_view"
  ).length

  const formSubmissions = parsedEvents.filter((e) =>
    FORM_TYPES.has(e.event_type)
  ).length

  const visitorIds = new Set<string>()
  for (const e of parsedEvents) {
    if (e.parsed.visitorId) visitorIds.add(e.parsed.visitorId)
  }
  const uniqueVisitors = visitorIds.size

  const scrollEvents = parsedEvents.filter(
    (e) => e.event_type === "scroll_depth"
  )
  const avgScrollDepth =
    scrollEvents.length > 0
      ? Math.round(
          scrollEvents.reduce((sum, e) => {
            const depth =
              e.parsed.data?.depth ??
              e.parsed.data?.maxDepth ??
              0
            return sum + Number(depth)
          }, 0) / scrollEvents.length
        )
      : 0

  const engagementEvents = parsedEvents.filter((e) =>
    ENGAGEMENT_TYPES.has(e.event_type)
  ).length

  // Event type breakdown
  const typeCounts: Record<string, number> = {}
  for (const e of parsedEvents) {
    typeCounts[e.event_type] = (typeCounts[e.event_type] || 0) + 1
  }
  const sortedTypes = Object.entries(typeCounts).sort(
    (a, b) => b[1] - a[1]
  )
  const maxTypeCount = sortedTypes.length > 0 ? sortedTypes[0][1] : 1

  // Top pages
  const pageMap = new Map<
    string,
    { views: number; scrollSum: number; scrollCount: number; engagements: number }
  >()
  for (const e of parsedEvents) {
    const path = extractPath(e.parsed.url)
    if (!pageMap.has(path)) {
      pageMap.set(path, { views: 0, scrollSum: 0, scrollCount: 0, engagements: 0 })
    }
    const entry = pageMap.get(path)!
    if (e.event_type === "page_view") entry.views++
    if (e.event_type === "scroll_depth") {
      const d = Number(e.parsed.data?.depth ?? e.parsed.data?.maxDepth ?? 0)
      entry.scrollSum += d
      entry.scrollCount++
    }
    if (ENGAGEMENT_TYPES.has(e.event_type)) entry.engagements++
  }
  const topPages: PageStats[] = Array.from(pageMap.entries())
    .map(([path, d]) => ({
      path,
      views: d.views,
      avgScroll: d.scrollCount > 0 ? Math.round(d.scrollSum / d.scrollCount) : 0,
      engagementEvents: d.engagements,
    }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10)

  // Behavioral insights
  const rageClicks = parsedEvents.filter(
    (e) => e.event_type === "rage_click"
  ).length
  const deadClicks = parsedEvents.filter(
    (e) => e.event_type === "dead_click"
  ).length
  const exitIntents = parsedEvents.filter(
    (e) => e.event_type === "exit_intent"
  ).length

  const engagementSummaries = parsedEvents.filter(
    (e) => e.event_type === "engagement_summary"
  )
  const avgSessionDuration =
    engagementSummaries.length > 0
      ? Math.round(
          engagementSummaries.reduce((sum, e) => {
            const dur =
              e.parsed.data?.duration ??
              e.parsed.data?.timeOnPage ??
              e.parsed.data?.sessionDuration ??
              0
            return sum + Number(dur)
          }, 0) / engagementSummaries.length
        )
      : null

  // Recent events (last 50)
  const recentEvents = [...parsedEvents]
    .sort(
      (a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
    )
    .slice(0, 50)

  // Date range
  const timestamps = parsedEvents
    .map((e) => new Date(e.timestamp).getTime())
    .filter((t) => !isNaN(t))
  const earliest =
    timestamps.length > 0
      ? new Date(Math.min(...timestamps)).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : null
  const latest =
    timestamps.length > 0
      ? new Date(Math.max(...timestamps)).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        })
      : null

  const gaMeasurementId = typeof window !== "undefined"
    ? (document.querySelector('script[src*="googletagmanager"]')?.getAttribute("src")?.match(/id=(G-[A-Z0-9]+)/)?.[1] ?? null)
    : null

  // ========== Loading state ==========

  if (loading) {
    return (
      <div className="p-6 lg:p-8 space-y-8">
        {/* Header skeleton */}
        <div>
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-72" />
        </div>

        {/* Stats skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <StatCardSkeleton key={i} />
          ))}
        </div>

        {/* Charts skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <Skeleton className="h-5 w-40 mb-4" />
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3 mb-3">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-5 flex-1" />
                <Skeleton className="h-4 w-8" />
              </div>
            ))}
          </div>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <Skeleton className="h-5 w-32 mb-4" />
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-8 w-full mb-2" />
            ))}
          </div>
        </div>
      </div>
    )
  }

  // ========== Empty state ==========

  if (!loading && events.length === 0 && !error) {
    return (
      <div className="p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Analytics</h1>
          <p className="text-sm text-zinc-400 mt-1">
            CRO9 Behavioral Analytics
          </p>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-12 text-center">
          <div className="w-16 h-16 rounded-2xl bg-zinc-800/80 flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-zinc-500" />
          </div>
          <h2 className="text-lg font-semibold text-white mb-2">
            No tracking data yet
          </h2>
          <p className="text-sm text-zinc-400 max-w-md mx-auto">
            Make sure CRO9 is configured in Site Settings. Once the tracker is
            active, behavioral events will appear here automatically.
          </p>
          <button
            onClick={fetchEvents}
            className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 text-sm text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Refresh
          </button>
        </div>
      </div>
    )
  }

  // ========== Main render ==========

  return (
    <div className="p-6 lg:p-8 space-y-8">
      {/* ===== 1. Header ===== */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Analytics</h1>
          <p className="text-sm text-zinc-400 mt-1">
            CRO9 Behavioral Analytics
          </p>
          {earliest && latest && (
            <p className="text-xs text-zinc-500 mt-1">
              {earliest === latest
                ? `Data from ${earliest}`
                : `${earliest} - ${latest}`}
              {" "}
              &middot; {totalEvents.toLocaleString()} events
            </p>
          )}
        </div>
        <div className="flex items-center gap-3">
          {lastRefresh && (
            <span className="text-xs text-zinc-600">
              Updated {relativeTime(lastRefresh.toISOString())}
            </span>
          )}
          <button
            onClick={fetchEvents}
            disabled={loading}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-sm text-zinc-300 hover:text-white hover:bg-zinc-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </button>
        </div>
      </div>

      {/* Error banner */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-medium text-red-400">
              Failed to load analytics
            </p>
            <p className="text-xs text-red-400/70 mt-1">{error}</p>
          </div>
        </div>
      )}

      {/* ===== 2. Stats Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <StatCard
          label="Total Events"
          value={totalEvents.toLocaleString()}
          subtitle="All tracked interactions"
          icon={Activity}
          accent="text-green-400"
        />
        <StatCard
          label="Page Views"
          value={pageViews.toLocaleString()}
          subtitle={`${uniqueVisitors > 0 ? (pageViews / uniqueVisitors).toFixed(1) : "0"} per visitor`}
          icon={Eye}
          accent="text-green-400"
        />
        <StatCard
          label="Form Submissions"
          value={formSubmissions.toLocaleString()}
          subtitle="Form and contact events"
          icon={Send}
          accent="text-emerald-400"
        />
        <StatCard
          label="Unique Visitors"
          value={uniqueVisitors.toLocaleString()}
          subtitle="Distinct visitor IDs"
          icon={Users}
          accent="text-cyan-400"
        />
        <StatCard
          label="Avg Scroll Depth"
          value={`${avgScrollDepth}%`}
          subtitle={`Based on ${scrollEvents.length} scroll events`}
          icon={ArrowDown}
          accent="text-blue-400"
        />
        <StatCard
          label="Engagement Events"
          value={engagementEvents.toLocaleString()}
          subtitle="Clicks, forms, copies, etc."
          icon={MousePointerClick}
          accent="text-green-400"
        />
      </div>

      {/* ===== 3. Event Type Breakdown + 4. Top Pages ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Event Type Breakdown */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-base font-semibold text-white mb-4">
            Event Type Breakdown
          </h2>
          {sortedTypes.length === 0 ? (
            <p className="text-sm text-zinc-500">No events to display.</p>
          ) : (
            <div className="space-y-3">
              {sortedTypes.map(([type, count]) => {
                const pct = Math.round((count / maxTypeCount) * 100)
                const totalPct =
                  totalEvents > 0
                    ? ((count / totalEvents) * 100).toFixed(1)
                    : "0"
                return (
                  <div key={type}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-zinc-400 font-mono">
                        {type}
                      </span>
                      <span className="text-xs text-zinc-500">
                        {count.toLocaleString()}{" "}
                        <span className="text-zinc-600">({totalPct}%)</span>
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-green-600 to-green-400 transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Top Pages */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
          <h2 className="text-base font-semibold text-white mb-4">
            Top Pages
          </h2>
          {topPages.length === 0 ? (
            <p className="text-sm text-zinc-500">No page data available.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-800">
                    <th className="text-left py-2 pr-4 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                      Page Path
                    </th>
                    <th className="text-right py-2 px-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="text-right py-2 px-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                      Avg Scroll
                    </th>
                    <th className="text-right py-2 pl-2 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                      Engage
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {topPages.map((page) => (
                    <tr
                      key={page.path}
                      className="border-b border-zinc-800/50 hover:bg-zinc-800/30 transition-colors"
                    >
                      <td className="py-2.5 pr-4 text-zinc-300 font-mono text-xs truncate max-w-[200px]">
                        {page.path}
                      </td>
                      <td className="py-2.5 px-2 text-right text-white font-medium">
                        {page.views}
                      </td>
                      <td className="py-2.5 px-2 text-right text-zinc-400">
                        {page.avgScroll > 0 ? `${page.avgScroll}%` : "-"}
                      </td>
                      <td className="py-2.5 pl-2 text-right text-zinc-400">
                        {page.engagementEvents || "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* ===== 5. Behavioral Insights ===== */}
      <div>
        <h2 className="text-base font-semibold text-white mb-4">
          Behavioral Insights
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Rage Clicks */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-zinc-400">Rage Clicks</span>
              <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                <AlertTriangle className="w-4 h-4 text-red-400" />
              </div>
            </div>
            <div className={`text-2xl font-bold ${rageClicks > 0 ? "text-red-400" : "text-white"}`}>
              {rageClicks}
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              {rageClicks > 0
                ? "Users are frustrated with unresponsive elements"
                : "No rage clicks detected"}
            </p>
          </div>

          {/* Dead Clicks */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-zinc-400">Dead Clicks</span>
              <div className="w-8 h-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                <MousePointer className="w-4 h-4 text-yellow-400" />
              </div>
            </div>
            <div className={`text-2xl font-bold ${deadClicks > 0 ? "text-yellow-400" : "text-white"}`}>
              {deadClicks}
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              {deadClicks > 0
                ? "Clicks on non-interactive elements"
                : "No dead clicks detected"}
            </p>
          </div>

          {/* Exit Intents */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-zinc-400">Exit Intents</span>
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <LogOut className="w-4 h-4 text-orange-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white">{exitIntents}</div>
            <p className="text-xs text-zinc-500 mt-1">
              {exitIntents > 0
                ? "Visitors showed intent to leave"
                : "No exit intents captured"}
            </p>
          </div>

          {/* Avg Session Duration */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-zinc-400">Avg Session</span>
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                <Clock className="w-4 h-4 text-teal-400" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white">
              {avgSessionDuration !== null
                ? avgSessionDuration >= 60
                  ? `${Math.floor(avgSessionDuration / 60)}m ${avgSessionDuration % 60}s`
                  : `${avgSessionDuration}s`
                : "--"}
            </div>
            <p className="text-xs text-zinc-500 mt-1">
              {avgSessionDuration !== null
                ? `Based on ${engagementSummaries.length} sessions`
                : "No session data available yet"}
            </p>
          </div>
        </div>
      </div>

      {/* ===== 6. Recent Events Timeline ===== */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-white">
            Recent Events
          </h2>
          <span className="text-xs text-zinc-500">
            Last {Math.min(recentEvents.length, 50)} events
          </span>
        </div>
        {recentEvents.length === 0 ? (
          <p className="text-sm text-zinc-500">No events recorded yet.</p>
        ) : (
          <div className="max-h-[480px] overflow-y-auto pr-1 space-y-1 scrollbar-thin">
            {recentEvents.map((event, idx) => {
              const dotColor =
                EVENT_COLORS[event.event_type] || "bg-zinc-600"
              const path = extractPath(event.parsed.url)
              return (
                <div
                  key={`${event.id}-${idx}`}
                  className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-zinc-800/40 transition-colors group"
                >
                  {/* Color dot */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full shrink-0 ${dotColor}`}
                  />

                  {/* Event type badge */}
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-800 text-zinc-300 border border-zinc-700 shrink-0">
                    {event.event_type}
                  </span>

                  {/* Page URL */}
                  <span className="text-xs text-zinc-500 truncate flex-1 min-w-0">
                    {path}
                  </span>

                  {/* Timestamp */}
                  <span className="text-[10px] text-zinc-600 shrink-0 tabular-nums">
                    {formatTimestamp(event.timestamp)}
                  </span>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {/* ===== 7. Google Analytics Link ===== */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">
              Google Analytics
            </h3>
            <p className="text-xs text-zinc-500 mt-1">
              {gaMeasurementId
                ? `Connected: ${gaMeasurementId}`
                : "View your full GA4 dashboard for deeper analysis"}
            </p>
          </div>
          <a
            href={
              gaMeasurementId
                ? `https://analytics.google.com/analytics/web/#/p${gaMeasurementId}/reports/intelligenthome`
                : "https://analytics.google.com"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/10 border border-green-500/20 text-sm font-medium text-green-400 hover:bg-green-500/20 transition-colors"
          >
            View full Google Analytics dashboard
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
