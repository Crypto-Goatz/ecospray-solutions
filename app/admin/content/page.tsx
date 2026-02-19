"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import {
  Plus,
  Pencil,
  Trash2,
  Save,
  X,
  Star,
  Loader2,
  FileText,
  MessageSquareQuote,
  Settings2,
  AlertTriangle,
} from "lucide-react"

/* ─────────────────── Types ─────────────────── */

interface ServiceRow {
  title: string
  description: string
  icon: string
  features: string
  image: string
  color: string
  order: string
  [key: string]: string
}

interface TestimonialRow {
  name: string
  location: string
  rating: string
  text: string
  project: string
  image: string
  avatar: string
  order: string
  [key: string]: string
}

interface ConfigEntry {
  key: string
  value: string
}

type Tab = "Services" | "Testimonials" | "Site Config"

interface Toast {
  id: number
  message: string
  type: "success" | "error"
}

/* ─────────────────── Helpers ─────────────────── */

const EMPTY_SERVICE: ServiceRow = {
  title: "",
  description: "",
  icon: "",
  features: "",
  image: "",
  color: "",
  order: "",
}

const EMPTY_TESTIMONIAL: TestimonialRow = {
  name: "",
  location: "",
  rating: "5",
  text: "",
  project: "",
  image: "",
  avatar: "",
  order: "",
}

/* ─────────────────── Main Component ─────────────────── */

export default function ContentPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Services")
  const [services, setServices] = useState<ServiceRow[]>([])
  const [testimonials, setTestimonials] = useState<TestimonialRow[]>([])
  const [config, setConfig] = useState<ConfigEntry[]>([])
  const [loading, setLoading] = useState(true)
  const [toasts, setToasts] = useState<Toast[]>([])
  const toastIdRef = useRef(0)

  // Edit/Add state
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [addingNew, setAddingNew] = useState(false)
  const [formData, setFormData] = useState<Record<string, string>>({})
  const [mutating, setMutating] = useState(false)

  // Config inline edit state
  const [editingConfigKey, setEditingConfigKey] = useState<string | null>(null)
  const [editingConfigValue, setEditingConfigValue] = useState("")
  const [addingConfig, setAddingConfig] = useState(false)
  const [newConfigKey, setNewConfigKey] = useState("")
  const [newConfigValue, setNewConfigValue] = useState("")

  // Delete confirmation
  const [deleteConfirm, setDeleteConfirm] = useState<{ tab: Tab; index: number } | null>(null)

  /* ──── Toast System ──── */

  const showToast = useCallback((message: string, type: "success" | "error") => {
    const id = ++toastIdRef.current
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3000)
  }, [])

  /* ──── Data Fetching ──── */

  const fetchTab = useCallback(
    async (tab: Tab) => {
      try {
        if (tab === "Site Config") {
          const res = await fetch("/api/cms/config")
          const json = await res.json()
          if (!res.ok) throw new Error(json.error || "Failed to fetch config")
          const entries: ConfigEntry[] = Object.entries(json.config || {}).map(
            ([key, value]) => ({ key, value: String(value) })
          )
          setConfig(entries)
        } else {
          const sheet = tab
          const res = await fetch(`/api/cms/content?sheet=${encodeURIComponent(sheet)}`)
          const json = await res.json()
          if (!res.ok) throw new Error(json.error || "Failed to fetch content")
          if (tab === "Services") setServices(json.data || [])
          if (tab === "Testimonials") setTestimonials(json.data || [])
        }
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : "Fetch failed"
        showToast(message, "error")
      }
    },
    [showToast]
  )

  const fetchAll = useCallback(async () => {
    setLoading(true)
    await Promise.all([fetchTab("Services"), fetchTab("Testimonials"), fetchTab("Site Config")])
    setLoading(false)
  }, [fetchTab])

  useEffect(() => {
    fetchAll()
  }, [fetchAll])

  /* ──── CRUD Operations ──── */

  async function handleAdd(tab: Tab, data: Record<string, string>) {
    setMutating(true)
    try {
      const sheet = tab === "Services" ? "Services" : "Testimonials"
      const res = await fetch("/api/cms/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sheet, data }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || "Failed to add")
      showToast(`${tab === "Services" ? "Service" : "Testimonial"} added`, "success")
      setAddingNew(false)
      setFormData({})
      await fetchTab(tab)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Add failed"
      showToast(message, "error")
    } finally {
      setMutating(false)
    }
  }

  async function handleUpdate(tab: Tab, rowIndex: number, data: Record<string, string>) {
    setMutating(true)
    try {
      const sheet = tab === "Services" ? "Services" : "Testimonials"
      const res = await fetch("/api/cms/content", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sheet, rowIndex, data }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || "Failed to update")
      showToast(`${tab === "Services" ? "Service" : "Testimonial"} updated`, "success")
      setEditingIndex(null)
      setFormData({})
      await fetchTab(tab)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Update failed"
      showToast(message, "error")
    } finally {
      setMutating(false)
    }
  }

  async function handleDelete(tab: Tab, rowIndex: number) {
    setMutating(true)
    try {
      const sheet = tab === "Services" ? "Services" : "Testimonials"
      const res = await fetch(
        `/api/cms/content?sheet=${encodeURIComponent(sheet)}&rowIndex=${rowIndex}`,
        { method: "DELETE" }
      )
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || "Failed to delete")
      showToast(`${tab === "Services" ? "Service" : "Testimonial"} deleted`, "success")
      setDeleteConfirm(null)
      await fetchTab(tab)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Delete failed"
      showToast(message, "error")
    } finally {
      setMutating(false)
    }
  }

  async function handleConfigUpdate(key: string, value: string) {
    setMutating(true)
    try {
      const res = await fetch("/api/cms/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || "Failed to update config")
      showToast(`Config "${key}" updated`, "success")
      setEditingConfigKey(null)
      setEditingConfigValue("")
      await fetchTab("Site Config")
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Update failed"
      showToast(message, "error")
    } finally {
      setMutating(false)
    }
  }

  async function handleConfigAdd(key: string, value: string) {
    setMutating(true)
    try {
      const res = await fetch("/api/cms/config", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key, value }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || "Failed to add config")
      showToast(`Config "${key}" added`, "success")
      setAddingConfig(false)
      setNewConfigKey("")
      setNewConfigValue("")
      await fetchTab("Site Config")
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Add failed"
      showToast(message, "error")
    } finally {
      setMutating(false)
    }
  }

  /* ──── Form Helpers ──── */

  function startEdit(index: number, data: Record<string, string>) {
    setEditingIndex(index)
    setAddingNew(false)
    setFormData({ ...data })
  }

  function startAdd(tab: Tab) {
    setAddingNew(true)
    setEditingIndex(null)
    if (tab === "Services") setFormData({ ...EMPTY_SERVICE })
    if (tab === "Testimonials") setFormData({ ...EMPTY_TESTIMONIAL })
  }

  function cancelForm() {
    setAddingNew(false)
    setEditingIndex(null)
    setFormData({})
  }

  function updateField(key: string, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }))
  }

  /* ──── Tab Config ──── */

  const tabs: { name: Tab; icon: typeof FileText }[] = [
    { name: "Services", icon: FileText },
    { name: "Testimonials", icon: MessageSquareQuote },
    { name: "Site Config", icon: Settings2 },
  ]

  /* ─────────────────── Render ─────────────────── */

  return (
    <div className="p-6 lg:p-8 max-w-7xl">
      {/* Toast Container */}
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center gap-2 pt-4 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto px-6 py-3 rounded-lg text-sm font-medium shadow-lg transition-all animate-in slide-in-from-top duration-300 ${
              toast.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            {toast.message}
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Confirm Delete</h3>
                <p className="text-zinc-400 text-sm">This action cannot be undone.</p>
              </div>
            </div>
            <p className="text-zinc-300 text-sm mb-6">
              Are you sure you want to delete this{" "}
              {deleteConfirm.tab === "Services" ? "service" : "testimonial"}? It will be
              permanently removed from your content.
            </p>
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setDeleteConfirm(null)}
                className="px-4 py-2 rounded-lg bg-zinc-700 text-white text-sm font-medium hover:bg-zinc-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteConfirm.tab, deleteConfirm.index)}
                disabled={mutating}
                className="px-4 py-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/30 text-sm font-medium hover:bg-red-500/30 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {mutating && <Loader2 className="w-3 h-3 animate-spin" />}
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Content</h1>
        <p className="text-zinc-400 text-sm mt-1">Manage your website content</p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-zinc-800 mb-8">
        <nav className="flex gap-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.name
            const Icon = tab.icon
            return (
              <button
                key={tab.name}
                onClick={() => {
                  setActiveTab(tab.name)
                  cancelForm()
                }}
                className={`flex items-center gap-2 pb-3 px-1 text-sm font-medium transition-colors border-b-2 -mb-px ${
                  isActive
                    ? "border-green-500 text-white"
                    : "border-transparent text-zinc-400 hover:text-white"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.name}
              </button>
            )
          })}
        </nav>
      </div>

      {/* Tab Content */}
      {loading ? (
        <LoadingSkeleton tab={activeTab} />
      ) : (
        <>
          {/* ═══════ Services Tab ═══════ */}
          {activeTab === "Services" && (
            <div>
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-zinc-400 text-sm">
                  {services.length} service{services.length !== 1 ? "s" : ""}
                </p>
                {!addingNew && editingIndex === null && (
                  <button
                    onClick={() => startAdd("Services")}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    Add Service
                  </button>
                )}
              </div>

              {/* Add form */}
              {addingNew && (
                <ServiceForm
                  data={formData}
                  onChange={updateField}
                  onSave={() => handleAdd("Services", formData)}
                  onCancel={cancelForm}
                  saving={mutating}
                  title="Add New Service"
                />
              )}

              {/* Service cards */}
              {services.length === 0 && !addingNew ? (
                <EmptyState
                  icon={FileText}
                  title="No services yet"
                  description="Add your first service to populate the website services section."
                  actionLabel="Add Service"
                  onAction={() => startAdd("Services")}
                />
              ) : (
                <div className="grid gap-4">
                  {services.map((service, i) =>
                    editingIndex === i ? (
                      <ServiceForm
                        key={i}
                        data={formData}
                        onChange={updateField}
                        onSave={() => handleUpdate("Services", i, formData)}
                        onCancel={cancelForm}
                        saving={mutating}
                        title={`Edit: ${service.title}`}
                      />
                    ) : (
                      <ServiceCard
                        key={i}
                        service={service}
                        onEdit={() => startEdit(i, service)}
                        onDelete={() => setDeleteConfirm({ tab: "Services", index: i })}
                        disabled={addingNew || editingIndex !== null}
                      />
                    )
                  )}
                </div>
              )}
            </div>
          )}

          {/* ═══════ Testimonials Tab ═══════ */}
          {activeTab === "Testimonials" && (
            <div>
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-zinc-400 text-sm">
                  {testimonials.length} testimonial{testimonials.length !== 1 ? "s" : ""}
                </p>
                {!addingNew && editingIndex === null && (
                  <button
                    onClick={() => startAdd("Testimonials")}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    Add Testimonial
                  </button>
                )}
              </div>

              {/* Add form */}
              {addingNew && (
                <TestimonialForm
                  data={formData}
                  onChange={updateField}
                  onSave={() => handleAdd("Testimonials", formData)}
                  onCancel={cancelForm}
                  saving={mutating}
                  title="Add New Testimonial"
                />
              )}

              {/* Testimonial cards */}
              {testimonials.length === 0 && !addingNew ? (
                <EmptyState
                  icon={MessageSquareQuote}
                  title="No testimonials yet"
                  description="Add customer reviews to build trust and social proof on your site."
                  actionLabel="Add Testimonial"
                  onAction={() => startAdd("Testimonials")}
                />
              ) : (
                <div className="grid gap-4">
                  {testimonials.map((testimonial, i) =>
                    editingIndex === i ? (
                      <TestimonialForm
                        key={i}
                        data={formData}
                        onChange={updateField}
                        onSave={() => handleUpdate("Testimonials", i, formData)}
                        onCancel={cancelForm}
                        saving={mutating}
                        title={`Edit: ${testimonial.name}`}
                      />
                    ) : (
                      <TestimonialCard
                        key={i}
                        testimonial={testimonial}
                        onEdit={() => startEdit(i, testimonial)}
                        onDelete={() => setDeleteConfirm({ tab: "Testimonials", index: i })}
                        disabled={addingNew || editingIndex !== null}
                      />
                    )
                  )}
                </div>
              )}
            </div>
          )}

          {/* ═══════ Site Config Tab ═══════ */}
          {activeTab === "Site Config" && (
            <div>
              {/* Top bar */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-zinc-400 text-sm">
                  {config.length} configuration entr{config.length !== 1 ? "ies" : "y"}
                </p>
                {!addingConfig && (
                  <button
                    onClick={() => setAddingConfig(true)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    Add Config
                  </button>
                )}
              </div>

              {config.length === 0 && !addingConfig ? (
                <EmptyState
                  icon={Settings2}
                  title="No configuration entries"
                  description="Add configuration values like business name, phone, email, and site settings."
                  actionLabel="Add Config"
                  onAction={() => setAddingConfig(true)}
                />
              ) : (
                <div className="rounded-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-zinc-800">
                        <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider w-1/3">
                          Key
                        </th>
                        <th className="text-left px-5 py-3 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                          Value
                        </th>
                        <th className="px-5 py-3 text-right text-xs font-semibold text-zinc-400 uppercase tracking-wider w-28">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Add new config row */}
                      {addingConfig && (
                        <tr className="border-b border-zinc-800 bg-zinc-800/30">
                          <td className="px-5 py-3">
                            <input
                              type="text"
                              value={newConfigKey}
                              onChange={(e) => setNewConfigKey(e.target.value)}
                              placeholder="config_key"
                              className="w-full px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                              autoFocus
                            />
                          </td>
                          <td className="px-5 py-3">
                            <input
                              type="text"
                              value={newConfigValue}
                              onChange={(e) => setNewConfigValue(e.target.value)}
                              placeholder="value"
                              onKeyDown={(e) => {
                                if (e.key === "Enter" && newConfigKey.trim()) {
                                  handleConfigAdd(newConfigKey.trim(), newConfigValue)
                                }
                                if (e.key === "Escape") {
                                  setAddingConfig(false)
                                  setNewConfigKey("")
                                  setNewConfigValue("")
                                }
                              }}
                              className="w-full px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                            />
                          </td>
                          <td className="px-5 py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => {
                                  if (newConfigKey.trim()) {
                                    handleConfigAdd(newConfigKey.trim(), newConfigValue)
                                  }
                                }}
                                disabled={!newConfigKey.trim() || mutating}
                                className="p-1.5 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors disabled:opacity-50"
                              >
                                {mutating ? (
                                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                ) : (
                                  <Save className="w-3.5 h-3.5" />
                                )}
                              </button>
                              <button
                                onClick={() => {
                                  setAddingConfig(false)
                                  setNewConfigKey("")
                                  setNewConfigValue("")
                                }}
                                className="p-1.5 rounded-lg bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      )}

                      {/* Config entries */}
                      {config.map((entry) => (
                        <tr
                          key={entry.key}
                          className="border-b border-zinc-800 last:border-b-0 hover:bg-zinc-800/20 transition-colors"
                        >
                          <td className="px-5 py-3">
                            <code className="text-sm text-zinc-300 font-mono bg-zinc-800 px-2 py-0.5 rounded">
                              {entry.key}
                            </code>
                          </td>
                          <td className="px-5 py-3">
                            {editingConfigKey === entry.key ? (
                              <input
                                type="text"
                                value={editingConfigValue}
                                onChange={(e) => setEditingConfigValue(e.target.value)}
                                onKeyDown={(e) => {
                                  if (e.key === "Enter") {
                                    handleConfigUpdate(entry.key, editingConfigValue)
                                  }
                                  if (e.key === "Escape") {
                                    setEditingConfigKey(null)
                                    setEditingConfigValue("")
                                  }
                                }}
                                className="w-full px-3 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                                autoFocus
                              />
                            ) : (
                              <span
                                className="text-sm text-zinc-400 cursor-pointer hover:text-white transition-colors"
                                onClick={() => {
                                  setEditingConfigKey(entry.key)
                                  setEditingConfigValue(entry.value)
                                }}
                                title="Click to edit"
                              >
                                {entry.value || <span className="italic text-zinc-600">empty</span>}
                              </span>
                            )}
                          </td>
                          <td className="px-5 py-3 text-right">
                            {editingConfigKey === entry.key ? (
                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() =>
                                    handleConfigUpdate(entry.key, editingConfigValue)
                                  }
                                  disabled={mutating}
                                  className="p-1.5 rounded-lg bg-green-500/20 text-green-400 hover:bg-green-500/30 transition-colors disabled:opacity-50"
                                >
                                  {mutating ? (
                                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                  ) : (
                                    <Save className="w-3.5 h-3.5" />
                                  )}
                                </button>
                                <button
                                  onClick={() => {
                                    setEditingConfigKey(null)
                                    setEditingConfigValue("")
                                  }}
                                  className="p-1.5 rounded-lg bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors"
                                >
                                  <X className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={() => {
                                  setEditingConfigKey(entry.key)
                                  setEditingConfigValue(entry.value)
                                }}
                                className="p-1.5 rounded-lg bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors"
                              >
                                <Pencil className="w-3.5 h-3.5" />
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

/* ─────────────────── Sub-Components ─────────────────── */

/* ──── Service Card (View Mode) ──── */

function ServiceCard({
  service,
  onEdit,
  onDelete,
  disabled,
}: {
  service: ServiceRow
  onEdit: () => void
  onDelete: () => void
  disabled: boolean
}) {
  const features = service.features
    ? service.features.split(",").map((f) => f.trim()).filter(Boolean)
    : []

  return (
    <div className="rounded-xl bg-zinc-900/50 border border-zinc-800 p-5 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            {service.icon && (
              <span className="text-xs font-mono text-zinc-500 bg-zinc-800 px-2 py-0.5 rounded">
                {service.icon}
              </span>
            )}
            {service.order && (
              <span className="text-xs text-zinc-500">#{service.order}</span>
            )}
            {service.color && (
              <span
                className="w-3 h-3 rounded-full border border-zinc-700"
                style={{ backgroundColor: service.color }}
              />
            )}
          </div>
          <h3 className="text-white font-semibold text-lg mb-1 truncate">{service.title}</h3>
          <p className="text-zinc-400 text-sm line-clamp-2 mb-3">{service.description}</p>
          {features.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {features.map((f, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20"
                >
                  {f}
                </span>
              ))}
            </div>
          )}
          {service.image && (
            <p className="text-xs text-zinc-600 mt-2 truncate">Image: {service.image}</p>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onEdit}
            disabled={disabled}
            className="p-2 rounded-lg bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            title="Edit"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            onClick={onDelete}
            disabled={disabled}
            className="p-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/20 hover:bg-red-500/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ──── Service Form (Add / Edit Mode) ──── */

function ServiceForm({
  data,
  onChange,
  onSave,
  onCancel,
  saving,
  title,
}: {
  data: Record<string, string>
  onChange: (key: string, value: string) => void
  onSave: () => void
  onCancel: () => void
  saving: boolean
  title: string
}) {
  return (
    <div className="rounded-xl bg-zinc-900/50 border border-green-500/30 p-5 mb-4">
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Title</label>
          <input
            type="text"
            value={data.title || ""}
            onChange={(e) => onChange("title", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="Service title"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Icon</label>
          <input
            type="text"
            value={data.icon || ""}
            onChange={(e) => onChange("icon", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="e.g. Home, Building2, Warehouse"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-zinc-400 mb-1">Description</label>
          <textarea
            value={data.description || ""}
            onChange={(e) => onChange("description", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
            placeholder="Service description"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-zinc-400 mb-1">
            Features (comma-separated)
          </label>
          <input
            type="text"
            value={data.features || ""}
            onChange={(e) => onChange("features", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="Feature 1, Feature 2, Feature 3"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Image URL</label>
          <input
            type="text"
            value={data.image || ""}
            onChange={(e) => onChange("image", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="https://..."
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block text-xs font-medium text-zinc-400 mb-1">Color</label>
            <input
              type="text"
              value={data.color || ""}
              onChange={(e) => onChange("color", e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              placeholder="from-green-500 to-emerald-600"
            />
          </div>
          <div className="w-24">
            <label className="block text-xs font-medium text-zinc-400 mb-1">Order</label>
            <input
              type="number"
              value={data.order || ""}
              onChange={(e) => onChange("order", e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
              placeholder="0"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onSave}
          disabled={saving || !data.title?.trim()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save
        </button>
        <button
          onClick={onCancel}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-700 text-white text-sm font-medium hover:bg-zinc-600 transition-colors disabled:opacity-50"
        >
          <X className="w-4 h-4" />
          Cancel
        </button>
      </div>
    </div>
  )
}

/* ──── Testimonial Card (View Mode) ──── */

function TestimonialCard({
  testimonial,
  onEdit,
  onDelete,
  disabled,
}: {
  testimonial: TestimonialRow
  onEdit: () => void
  onDelete: () => void
  disabled: boolean
}) {
  const rating = parseInt(testimonial.rating) || 0

  return (
    <div className="rounded-xl bg-zinc-900/50 border border-zinc-800 p-5 hover:border-zinc-700 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            {testimonial.avatar && (
              <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = "none"
                  }}
                />
              </div>
            )}
            <div>
              <h3 className="text-white font-semibold">{testimonial.name}</h3>
              {testimonial.location && (
                <p className="text-xs text-zinc-500">{testimonial.location}</p>
              )}
            </div>
          </div>

          {/* Stars */}
          <div className="flex items-center gap-0.5 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < rating ? "text-yellow-400 fill-yellow-400" : "text-zinc-700"
                }`}
              />
            ))}
          </div>

          <p className="text-zinc-400 text-sm line-clamp-3 mb-2">
            &ldquo;{testimonial.text}&rdquo;
          </p>

          <div className="flex items-center gap-3 flex-wrap">
            {testimonial.project && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {testimonial.project}
              </span>
            )}
            {testimonial.order && (
              <span className="text-xs text-zinc-500">#{testimonial.order}</span>
            )}
          </div>

          {testimonial.image && (
            <p className="text-xs text-zinc-600 mt-2 truncate">Image: {testimonial.image}</p>
          )}
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onEdit}
            disabled={disabled}
            className="p-2 rounded-lg bg-zinc-700 text-zinc-300 hover:bg-zinc-600 hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            title="Edit"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            onClick={onDelete}
            disabled={disabled}
            className="p-2 rounded-lg bg-red-500/20 text-red-400 border border-red-500/20 hover:bg-red-500/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            title="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

/* ──── Testimonial Form (Add / Edit Mode) ──── */

function TestimonialForm({
  data,
  onChange,
  onSave,
  onCancel,
  saving,
  title,
}: {
  data: Record<string, string>
  onChange: (key: string, value: string) => void
  onSave: () => void
  onCancel: () => void
  saving: boolean
  title: string
}) {
  return (
    <div className="rounded-xl bg-zinc-900/50 border border-green-500/30 p-5 mb-4">
      <h4 className="text-white font-semibold mb-4">{title}</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Name</label>
          <input
            type="text"
            value={data.name || ""}
            onChange={(e) => onChange("name", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="Customer name"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Location</label>
          <input
            type="text"
            value={data.location || ""}
            onChange={(e) => onChange("location", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="Pittsburgh, PA"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Rating (1-5)</label>
          <input
            type="number"
            min={1}
            max={5}
            value={data.rating || "5"}
            onChange={(e) => onChange("rating", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Project</label>
          <input
            type="text"
            value={data.project || ""}
            onChange={(e) => onChange("project", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="Attic Insulation"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-xs font-medium text-zinc-400 mb-1">Testimonial Text</label>
          <textarea
            value={data.text || ""}
            onChange={(e) => onChange("text", e.target.value)}
            rows={3}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 resize-none"
            placeholder="What the customer said..."
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Image URL</label>
          <input
            type="text"
            value={data.image || ""}
            onChange={(e) => onChange("image", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="https://..."
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1">Avatar URL</label>
          <input
            type="text"
            value={data.avatar || ""}
            onChange={(e) => onChange("avatar", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="https://..."
          />
        </div>
        <div className="w-24">
          <label className="block text-xs font-medium text-zinc-400 mb-1">Order</label>
          <input
            type="number"
            value={data.order || ""}
            onChange={(e) => onChange("order", e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="0"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={onSave}
          disabled={saving || !data.name?.trim()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
          Save
        </button>
        <button
          onClick={onCancel}
          disabled={saving}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-700 text-white text-sm font-medium hover:bg-zinc-600 transition-colors disabled:opacity-50"
        >
          <X className="w-4 h-4" />
          Cancel
        </button>
      </div>
    </div>
  )
}

/* ──── Empty State ──── */

function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: {
  icon: typeof FileText
  title: string
  description: string
  actionLabel: string
  onAction: () => void
}) {
  return (
    <div className="rounded-xl bg-zinc-900/50 border border-zinc-800 border-dashed p-12 text-center">
      <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mx-auto mb-4">
        <Icon className="w-6 h-6 text-zinc-500" />
      </div>
      <h3 className="text-white font-semibold mb-1">{title}</h3>
      <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">{description}</p>
      <button
        onClick={onAction}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-medium hover:from-green-600 hover:to-emerald-700 transition-all"
      >
        <Plus className="w-4 h-4" />
        {actionLabel}
      </button>
    </div>
  )
}

/* ──── Loading Skeleton ──── */

function LoadingSkeleton({ tab }: { tab: Tab }) {
  if (tab === "Site Config") {
    return (
      <div className="rounded-xl bg-zinc-900/50 border border-zinc-800 overflow-hidden">
        <div className="border-b border-zinc-800 px-5 py-3 flex gap-4">
          <div className="h-3 w-24 bg-zinc-800 rounded animate-pulse" />
          <div className="h-3 flex-1 bg-zinc-800 rounded animate-pulse" />
          <div className="h-3 w-16 bg-zinc-800 rounded animate-pulse" />
        </div>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border-b border-zinc-800 last:border-0 px-5 py-4 flex gap-4">
            <div className="h-4 w-32 bg-zinc-800 rounded animate-pulse" />
            <div className="h-4 flex-1 bg-zinc-800 rounded animate-pulse" />
            <div className="h-4 w-8 bg-zinc-800 rounded animate-pulse" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="rounded-xl bg-zinc-900/50 border border-zinc-800 p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 space-y-3">
              <div className="flex gap-2">
                <div className="h-4 w-16 bg-zinc-800 rounded animate-pulse" />
                <div className="h-4 w-8 bg-zinc-800 rounded animate-pulse" />
              </div>
              <div className="h-5 w-48 bg-zinc-800 rounded animate-pulse" />
              <div className="h-4 w-full bg-zinc-800 rounded animate-pulse" />
              <div className="h-4 w-3/4 bg-zinc-800 rounded animate-pulse" />
              <div className="flex gap-2">
                <div className="h-5 w-20 bg-zinc-800 rounded-full animate-pulse" />
                <div className="h-5 w-24 bg-zinc-800 rounded-full animate-pulse" />
                <div className="h-5 w-16 bg-zinc-800 rounded-full animate-pulse" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="w-9 h-9 bg-zinc-800 rounded-lg animate-pulse" />
              <div className="w-9 h-9 bg-zinc-800 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
