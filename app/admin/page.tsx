"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Users,
  Eye,
  Globe,
  FileText,
  ArrowRight,
  BarChart3,
  Settings,
  AlertTriangle,
  Inbox,
} from "lucide-react"

interface LeadRecord {
  first_name?: string
  last_name?: string
  email?: string
  phone?: string
  source?: string
  created_at?: string
}

interface TopPage {
  path: string
  count: number
}

interface DashboardData {
  leads: {
    total: number
    thisWeek: number
    thisMonth: number
    recent: LeadRecord[]
  }
  events: {
    total: number
    pageViews: number
    formSubmissions: number
    uniqueVisitors: number
  }
  topPages: TopPage[]
  recentActivity: unknown[]
  configured: boolean
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "—"
  const date = new Date(dateStr)
  if (isNaN(date.getTime())) return "—"
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function StatCardSkeleton() {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 animate-pulse">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-zinc-800" />
        <div className="space-y-2">
          <div className="h-8 w-20 bg-zinc-800 rounded" />
          <div className="h-4 w-28 bg-zinc-800 rounded" />
        </div>
      </div>
    </div>
  )
}

function TableSkeleton() {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 animate-pulse">
      <div className="h-6 w-32 bg-zinc-800 rounded mb-6" />
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-4">
            <div className="h-4 w-24 bg-zinc-800 rounded" />
            <div className="h-4 w-36 bg-zinc-800 rounded" />
            <div className="h-4 w-24 bg-zinc-800 rounded" />
            <div className="h-4 w-16 bg-zinc-800 rounded" />
            <div className="h-4 w-20 bg-zinc-800 rounded" />
          </div>
        ))}
      </div>
    </div>
  )
}

function SidebarSkeleton() {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 animate-pulse">
      <div className="h-6 w-24 bg-zinc-800 rounded mb-6" />
      <div className="space-y-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="h-4 w-28 bg-zinc-800 rounded" />
            <div className="h-5 w-10 bg-zinc-800 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function AdminDashboardPage() {
  const [data, setData] = useState<DashboardData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/admin/stats")
        if (!res.ok) {
          throw new Error(`Failed to load stats (${res.status})`)
        }
        const json = await res.json()
        if (json.error) {
          throw new Error(json.error)
        }
        setData(json)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load dashboard data")
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  const statCards = data
    ? [
        {
          label: "Total Leads",
          value: data.leads.total,
          icon: Users,
        },
        {
          label: "Page Views",
          value: data.events.pageViews,
          icon: Eye,
        },
        {
          label: "Unique Visitors",
          value: data.events.uniqueVisitors,
          icon: Globe,
        },
        {
          label: "Form Submissions",
          value: data.events.formSubmissions,
          icon: FileText,
        },
      ]
    : []

  const quickActions = [
    {
      label: "View All Leads",
      href: "/admin/leads",
      icon: Users,
    },
    {
      label: "Analytics Dashboard",
      href: "/admin/analytics",
      icon: BarChart3,
    },
    {
      label: "Manage Content",
      href: "/admin/content",
      icon: FileText,
    },
    {
      label: "Site Settings",
      href: "/admin/setup",
      icon: Settings,
    },
  ]

  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-zinc-400 mt-1">Spray Foam Solutions Admin</p>
      </div>

      {/* Configuration Banner */}
      {!loading && data && !data.configured && (
        <div className="flex items-center gap-3 bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-5 py-4">
          <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
          <p className="text-sm text-yellow-200">
            Google Sheets not connected yet.{" "}
            <Link
              href="/admin/setup"
              className="text-yellow-400 underline underline-offset-2 hover:text-yellow-300 transition-colors"
            >
              Connect in Setup
            </Link>
          </p>
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/20 rounded-xl px-5 py-4">
          <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0" />
          <p className="text-sm text-red-200">{error}</p>
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading
          ? [...Array(4)].map((_, i) => <StatCardSkeleton key={i} />)
          : statCards.map((card) => (
              <div
                key={card.label}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-white">
                      {card.value.toLocaleString()}
                    </p>
                    <p className="text-sm text-zinc-400">{card.label}</p>
                  </div>
                </div>
              </div>
            ))}
      </div>

      {/* Two-Column Layout: Recent Leads + Top Pages */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Leads Table (2/3) */}
        {loading ? (
          <div className="lg:col-span-2">
            <TableSkeleton />
          </div>
        ) : (
          <div className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-xl">
            <div className="px-6 py-4 border-b border-zinc-800">
              <h2 className="text-lg font-semibold text-white">Recent Leads</h2>
            </div>
            {data && data.leads.recent.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        Phone
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        Source
                      </th>
                      <th className="text-left px-6 py-3 text-xs font-medium text-zinc-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800/50">
                    {data.leads.recent.map((lead, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-zinc-800/30 transition-colors"
                      >
                        <td className="px-6 py-3 text-white whitespace-nowrap">
                          {[lead.first_name, lead.last_name]
                            .filter(Boolean)
                            .join(" ") || "—"}
                        </td>
                        <td className="px-6 py-3 text-zinc-400 whitespace-nowrap">
                          {lead.email || "—"}
                        </td>
                        <td className="px-6 py-3 text-zinc-400 whitespace-nowrap">
                          {lead.phone || "—"}
                        </td>
                        <td className="px-6 py-3 whitespace-nowrap">
                          {lead.source ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400">
                              {lead.source}
                            </span>
                          ) : (
                            <span className="text-zinc-500">—</span>
                          )}
                        </td>
                        <td className="px-6 py-3 text-zinc-400 whitespace-nowrap">
                          {formatDate(lead.created_at)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-zinc-500">
                <Inbox className="w-10 h-10 mb-3 text-zinc-600" />
                <p className="text-sm">No leads yet</p>
              </div>
            )}
          </div>
        )}

        {/* Top Pages (1/3) */}
        {loading ? (
          <SidebarSkeleton />
        ) : (
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl">
            <div className="px-6 py-4 border-b border-zinc-800">
              <h2 className="text-lg font-semibold text-white">Top Pages</h2>
            </div>
            {data && data.topPages.length > 0 ? (
              <div className="divide-y divide-zinc-800/50">
                {data.topPages.map((page, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-6 py-3 hover:bg-zinc-800/30 transition-colors"
                  >
                    <span className="text-sm text-zinc-300 truncate mr-3">
                      {page.path}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-500/10 text-green-400 flex-shrink-0">
                      {page.count.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-zinc-500">
                <Eye className="w-10 h-10 mb-3 text-zinc-600" />
                <p className="text-sm">No page data yet</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-5 hover:border-green-500/30 hover:bg-zinc-900/80 transition-all"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <action.icon className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-sm font-medium text-white">
                    {action.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-green-400 transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
