"use client"

import { useEffect, useState, useMemo, useCallback } from "react"
import Link from "next/link"
import {
  Users,
  Search,
  ChevronDown,
  X,
  Copy,
  Phone,
  Mail,
  Building2,
  Tag,
  Clock,
  Calendar,
  TrendingUp,
  UserPlus,
  ExternalLink,
  CheckCircle2,
  Inbox,
} from "lucide-react"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Lead {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  company: string
  tags: string
  source: string
  created_at: string
}

type SortOption = "newest" | "oldest" | "name_asc"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatDate(raw: string): string {
  if (!raw) return "--"
  const d = new Date(raw)
  if (isNaN(d.getTime())) return raw
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
}

function formatRelativeDate(raw: string): string {
  if (!raw) return ""
  const d = new Date(raw)
  if (isNaN(d.getTime())) return ""
  const now = new Date()
  const diffMs = now.getTime() - d.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMins / 60)
  const diffDays = Math.floor(diffHours / 24)

  if (diffMins < 1) return "Just now"
  if (diffMins < 60) return `${diffMins}m ago`
  if (diffHours < 24) return `${diffHours}h ago`
  if (diffDays < 7) return `${diffDays}d ago`
  return formatDate(raw)
}

function parseTags(raw: string): string[] {
  if (!raw) return []
  return raw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
}

function tagColor(tag: string): string {
  const lower = tag.toLowerCase()
  if (lower.includes("hot") || lower.includes("urgent"))
    return "bg-red-500/15 text-red-400 border-red-500/20"
  if (lower.includes("commercial") || lower.includes("business"))
    return "bg-purple-500/15 text-purple-400 border-purple-500/20"
  if (lower.includes("residential") || lower.includes("home"))
    return "bg-blue-500/15 text-blue-400 border-blue-500/20"
  if (lower.includes("guide") || lower.includes("download"))
    return "bg-amber-500/15 text-amber-400 border-amber-500/20"
  return "bg-green-500/15 text-green-400 border-green-500/20"
}

function sourceLabel(source: string): { label: string; cls: string } {
  const s = (source || "").toLowerCase()
  if (s.includes("contact_form") || s.includes("contact"))
    return { label: "Contact Form", cls: "bg-green-500/15 text-green-400 border-green-500/20" }
  if (s.includes("guide") || s.includes("download"))
    return { label: "Guide Download", cls: "bg-blue-500/15 text-blue-400 border-blue-500/20" }
  if (s.includes("referral"))
    return { label: "Referral", cls: "bg-purple-500/15 text-purple-400 border-purple-500/20" }
  if (s.includes("google") || s.includes("ads"))
    return { label: "Google Ads", cls: "bg-amber-500/15 text-amber-400 border-amber-500/20" }
  if (s.includes("phone") || s.includes("call"))
    return { label: "Phone Call", cls: "bg-cyan-500/15 text-cyan-400 border-cyan-500/20" }
  if (s)
    return { label: source, cls: "bg-zinc-700/50 text-zinc-400 border-zinc-600/30" }
  return { label: "Unknown", cls: "bg-zinc-700/50 text-zinc-500 border-zinc-600/30" }
}

function isWithinDays(dateStr: string, days: number): boolean {
  if (!dateStr) return false
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return false
  const cutoff = new Date()
  cutoff.setDate(cutoff.getDate() - days)
  return d >= cutoff
}

function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard) return navigator.clipboard.writeText(text)
  return Promise.resolve()
}

// ---------------------------------------------------------------------------
// Skeleton Rows
// ---------------------------------------------------------------------------

function SkeletonRow() {
  return (
    <tr className="border-b border-zinc-800/50">
      {[...Array(6)].map((_, i) => (
        <td key={i} className="px-5 py-4">
          <div className="h-4 bg-zinc-800 rounded animate-pulse" style={{ width: `${50 + Math.random() * 40}%` }} />
        </td>
      ))}
    </tr>
  )
}

// ---------------------------------------------------------------------------
// Stats Card
// ---------------------------------------------------------------------------

function StatCard({
  label,
  value,
  icon: Icon,
  accent,
}: {
  label: string
  value: number
  icon: React.ComponentType<{ className?: string }>
  accent: string
}) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 flex items-center gap-4 transition-colors hover:border-zinc-700">
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center ${accent}`}>
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-xs text-zinc-500">{label}</p>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Lead Detail Panel (Slide-over)
// ---------------------------------------------------------------------------

function LeadDetailPanel({
  lead,
  onClose,
}: {
  lead: Lead
  onClose: () => void
}) {
  const [copied, setCopied] = useState(false)
  const tags = parseTags(lead.tags)
  const src = sourceLabel(lead.source)

  const handleCopyEmail = useCallback(() => {
    copyToClipboard(lead.email).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [lead.email])

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-zinc-950 border-l border-zinc-800 z-50 shadow-2xl overflow-y-auto animate-slide-in">
        {/* Header */}
        <div className="sticky top-0 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800 px-6 py-4 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center">
              <span className="text-green-400 font-semibold text-sm">
                {(lead.first_name?.[0] || "").toUpperCase()}
                {(lead.last_name?.[0] || "").toUpperCase()}
              </span>
            </div>
            <div>
              <h2 className="text-white font-semibold text-lg leading-tight">
                {lead.first_name} {lead.last_name}
              </h2>
              <p className="text-zinc-500 text-xs">{lead.email}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-6">
          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium hover:bg-green-500/20 transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Email
                </>
              )}
            </button>
            {lead.phone && (
              <a
                href={`tel:${lead.phone.replace(/[^\d+]/g, "")}`}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call
              </a>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-1">
            <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
              Contact Information
            </h3>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl divide-y divide-zinc-800/50">
              <DetailRow
                icon={Mail}
                label="Email"
                value={lead.email}
                href={`mailto:${lead.email}`}
              />
              {lead.phone && (
                <DetailRow
                  icon={Phone}
                  label="Phone"
                  value={lead.phone}
                  href={`tel:${lead.phone.replace(/[^\d+]/g, "")}`}
                />
              )}
              {lead.company && (
                <DetailRow icon={Building2} label="Company" value={lead.company} />
              )}
              <DetailRow
                icon={ExternalLink}
                label="Source"
                value={src.label}
                badge={src.cls}
              />
              <DetailRow
                icon={Calendar}
                label="Submitted"
                value={formatDate(lead.created_at)}
              />
            </div>
          </div>

          {/* Tags */}
          {tags.length > 0 && (
            <div>
              <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${tagColor(tag)}`}
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Timeline */}
          <div>
            <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">
              Activity Timeline
            </h3>
            <div className="space-y-3">
              <TimelineEntry
                icon={UserPlus}
                title="Lead created"
                description={`Via ${src.label.toLowerCase()}`}
                time={formatRelativeDate(lead.created_at)}
                color="text-green-400 bg-green-500/15"
              />
              {lead.source?.includes("guide") && (
                <TimelineEntry
                  icon={ExternalLink}
                  title="Downloaded guide"
                  description="Energy Savings Guide PDF"
                  time={formatRelativeDate(lead.created_at)}
                  color="text-blue-400 bg-blue-500/15"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Slide-in animation */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.25s ease-out;
        }
      `}</style>
    </>
  )
}

function DetailRow({
  icon: Icon,
  label,
  value,
  href,
  badge,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
  href?: string
  badge?: string
}) {
  const content = badge ? (
    <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium border ${badge}`}>
      {value}
    </span>
  ) : href ? (
    <a
      href={href}
      className="text-sm text-white hover:text-green-400 transition-colors truncate"
    >
      {value}
    </a>
  ) : (
    <span className="text-sm text-white truncate">{value}</span>
  )

  return (
    <div className="flex items-center gap-3 px-4 py-3">
      <Icon className="w-4 h-4 text-zinc-500 flex-shrink-0" />
      <span className="text-xs text-zinc-500 w-20 flex-shrink-0">{label}</span>
      {content}
    </div>
  )
}

function TimelineEntry({
  icon: Icon,
  title,
  description,
  time,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  time: string
  color: string
}) {
  return (
    <div className="flex gap-3">
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${color}`}>
        <Icon className="w-3.5 h-3.5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white font-medium">{title}</p>
        <p className="text-xs text-zinc-500">{description}</p>
      </div>
      <span className="text-xs text-zinc-600 flex-shrink-0 pt-0.5">{time}</span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Empty State
// ---------------------------------------------------------------------------

function EmptyState() {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl py-20 flex flex-col items-center justify-center">
      <div className="w-16 h-16 rounded-2xl bg-zinc-800/50 flex items-center justify-center mb-5">
        <Inbox className="w-8 h-8 text-zinc-600" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">No leads yet</h3>
      <p className="text-sm text-zinc-500 mb-6 text-center max-w-sm">
        Share your website to start receiving inquiries. Leads from your contact form and guide downloads will appear here.
      </p>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-green-500 text-white text-sm font-medium hover:bg-green-600 transition-colors"
      >
        View Contact Page
        <ExternalLink className="w-3.5 h-3.5" />
      </Link>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Main Page
// ---------------------------------------------------------------------------

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState("")
  const [sourceFilter, setSourceFilter] = useState("all")
  const [sort, setSort] = useState<SortOption>("newest")
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)

  // Fetch leads
  useEffect(() => {
    async function fetchLeads() {
      try {
        const res = await fetch("/api/cms/content?sheet=contacts")
        if (!res.ok) throw new Error(`Failed to fetch leads (${res.status})`)
        const json = await res.json()
        setLeads(json.data || [])
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load leads")
      } finally {
        setLoading(false)
      }
    }
    fetchLeads()
  }, [])

  // Unique sources for dropdown
  const uniqueSources = useMemo(() => {
    const sources = new Set<string>()
    leads.forEach((l) => {
      if (l.source) sources.add(l.source)
    })
    return Array.from(sources).sort()
  }, [leads])

  // Filtered + sorted leads
  const filtered = useMemo(() => {
    let result = [...leads]

    // Search
    if (search.trim()) {
      const q = search.toLowerCase()
      result = result.filter((l) => {
        const fullName = `${l.first_name} ${l.last_name}`.toLowerCase()
        return (
          fullName.includes(q) ||
          (l.email || "").toLowerCase().includes(q) ||
          (l.phone || "").toLowerCase().includes(q) ||
          (l.company || "").toLowerCase().includes(q)
        )
      })
    }

    // Source filter
    if (sourceFilter !== "all") {
      result = result.filter((l) => l.source === sourceFilter)
    }

    // Sort
    switch (sort) {
      case "newest":
        result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        break
      case "oldest":
        result.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
        break
      case "name_asc":
        result.sort((a, b) => {
          const nameA = `${a.first_name} ${a.last_name}`.toLowerCase()
          const nameB = `${b.first_name} ${b.last_name}`.toLowerCase()
          return nameA.localeCompare(nameB)
        })
        break
    }

    return result
  }, [leads, search, sourceFilter, sort])

  // Stats
  const totalLeads = leads.length
  const thisWeek = leads.filter((l) => isWithinDays(l.created_at, 7)).length
  const thisMonth = leads.filter((l) => isWithinDays(l.created_at, 30)).length

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-white">Leads</h1>
            {!loading && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/15 text-green-400 border border-green-500/20">
                {totalLeads}
              </span>
            )}
          </div>
          <p className="text-sm text-zinc-500">
            Contact form submissions &amp; inquiries
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          label="Total Leads"
          value={loading ? 0 : totalLeads}
          icon={Users}
          accent="bg-green-500/15 text-green-400"
        />
        <StatCard
          label="This Week"
          value={loading ? 0 : thisWeek}
          icon={TrendingUp}
          accent="bg-blue-500/15 text-blue-400"
        />
        <StatCard
          label="This Month"
          value={loading ? 0 : thisMonth}
          icon={Calendar}
          accent="bg-purple-500/15 text-purple-400"
        />
      </div>

      {/* Filter Bar */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 flex flex-col sm:flex-row gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder-zinc-500 outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Source Filter */}
        <div className="relative">
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value)}
            className="appearance-none pl-4 pr-9 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all cursor-pointer min-w-[160px]"
          >
            <option value="all">All Sources</option>
            {uniqueSources.map((s) => (
              <option key={s} value={s}>
                {sourceLabel(s).label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
        </div>

        {/* Sort */}
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="appearance-none pl-4 pr-9 py-2.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all cursor-pointer min-w-[140px]"
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="name_asc">Name A-Z</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-4 text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Table */}
      {loading ? (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-zinc-800">
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Name</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Email</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider hidden md:table-cell">Phone</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider hidden lg:table-cell">Tags</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider hidden sm:table-cell">Source</th>
                <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, i) => (
                <SkeletonRow key={i} />
              ))}
            </tbody>
          </table>
        </div>
      ) : filtered.length === 0 && leads.length === 0 ? (
        <EmptyState />
      ) : filtered.length === 0 ? (
        /* No matches for current filters */
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl py-16 flex flex-col items-center justify-center">
          <Search className="w-8 h-8 text-zinc-600 mb-4" />
          <h3 className="text-base font-medium text-white mb-1">No matching leads</h3>
          <p className="text-sm text-zinc-500">
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider hidden md:table-cell">
                    Phone
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider hidden lg:table-cell">
                    Tags
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider hidden sm:table-cell">
                    Source
                  </th>
                  <th className="text-left px-5 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => {
                  const tags = parseTags(lead.tags)
                  const src = sourceLabel(lead.source)
                  return (
                    <tr
                      key={lead.id || lead.email + lead.created_at}
                      onClick={() => setSelectedLead(lead)}
                      className="border-b border-zinc-800/50 last:border-b-0 hover:bg-zinc-800/30 cursor-pointer transition-colors group"
                    >
                      {/* Name */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0 group-hover:border-green-500/30 transition-colors">
                            <span className="text-xs font-medium text-zinc-400 group-hover:text-green-400 transition-colors">
                              {(lead.first_name?.[0] || "").toUpperCase()}
                              {(lead.last_name?.[0] || "").toUpperCase()}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-medium text-white truncate">
                              {lead.first_name} {lead.last_name}
                            </p>
                            {lead.company && (
                              <p className="text-xs text-zinc-500 truncate">
                                {lead.company}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* Email */}
                      <td className="px-5 py-4">
                        <span className="text-sm text-zinc-300 truncate block max-w-[200px]">
                          {lead.email || "--"}
                        </span>
                      </td>

                      {/* Phone */}
                      <td className="px-5 py-4 hidden md:table-cell">
                        <span className="text-sm text-zinc-400">
                          {lead.phone || "--"}
                        </span>
                      </td>

                      {/* Tags */}
                      <td className="px-5 py-4 hidden lg:table-cell">
                        <div className="flex flex-wrap gap-1.5 max-w-[200px]">
                          {tags.length > 0 ? (
                            tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium border ${tagColor(tag)}`}
                              >
                                {tag}
                              </span>
                            ))
                          ) : (
                            <span className="text-xs text-zinc-600">--</span>
                          )}
                          {tags.length > 3 && (
                            <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-medium bg-zinc-800 text-zinc-500 border border-zinc-700">
                              +{tags.length - 3}
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Source */}
                      <td className="px-5 py-4 hidden sm:table-cell">
                        <span
                          className={`inline-flex px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${src.cls}`}
                        >
                          {src.label}
                        </span>
                      </td>

                      {/* Date */}
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-1.5 text-zinc-500">
                          <Clock className="w-3.5 h-3.5 flex-shrink-0" />
                          <span className="text-xs whitespace-nowrap">
                            {formatDate(lead.created_at)}
                          </span>
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Footer count */}
          <div className="px-5 py-3 border-t border-zinc-800 flex items-center justify-between">
            <p className="text-xs text-zinc-500">
              Showing {filtered.length} of {totalLeads} lead{totalLeads !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      )}

      {/* Lead Detail Panel */}
      {selectedLead && (
        <LeadDetailPanel
          lead={selectedLead}
          onClose={() => setSelectedLead(null)}
        />
      )}
    </div>
  )
}
