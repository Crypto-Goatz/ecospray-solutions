"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen, CheckCircle2, ChevronDown, Download, Flame, Home, Shield, Snowflake,
  ThermometerSun, Zap, ArrowRight, Star, Phone, DollarSign, ClipboardCheck,
  Wrench, Award, FileText, Lock, BarChart3, MapPin
} from "lucide-react"

/* ───────────────── intersection-observer fade-in hook ───────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function FadeIn({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, visible } = useInView()
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/* ───────────────── chapter data ───────────────── */
const chapters = [
  { num: 1, title: "Drafts in the 'Burgh", subtitle: "What's Really Going On", icon: Snowflake, color: "from-blue-500 to-cyan-600", desc: "The stack effect explained — why warm air escapes your attic and cold air pours in from below. Plus the top culprits hiding in Pittsburgh homes." },
  { num: 2, title: "Where Foam Wins", subtitle: "Attic, Rim Joist & Crawl Space", icon: Home, color: "from-green-500 to-emerald-600", desc: "Room-by-room breakdown of where spray foam delivers the biggest ROI. From roof decks to rim joists to crawl space walls." },
  { num: 3, title: "Open-Cell vs. Closed-Cell", subtitle: "Pittsburgh-Style Matchups", icon: ThermometerSun, color: "from-orange-500 to-amber-600", desc: "Choosing the right foam type for each zone in your home. R-values, moisture control, and the pragmatic Pittsburgh blend." },
  { num: 4, title: "Costs, Payback & Financing", subtitle: "Real Numbers That Add Up", icon: DollarSign, color: "from-purple-500 to-violet-600", desc: "Typical project ranges from $1,200 to $9,000+. See real payback timelines and low-monthly-payment financing options." },
  { num: 5, title: "Rebates & Incentives", subtitle: "Pittsburgh Area Programs", icon: Award, color: "from-pink-500 to-rose-600", desc: "Federal tax credits, local utility rebates, and how EcoSpray handles the paperwork so you can focus on your family." },
  { num: 6, title: "Room-by-Room Checklist", subtitle: "Your Personal Walkthrough", icon: ClipboardCheck, color: "from-teal-500 to-cyan-600", desc: "A printable checklist to inspect every corner of your home — attic, bedrooms, basement, and crawl space." },
]

const stats = [
  { value: "50%", label: "Energy Bill Reduction", icon: Zap },
  { value: "R-7", label: "Per-Inch R-Value", icon: Shield },
  { value: "90%", label: "Air Leakage Sealed", icon: Flame },
  { value: "3-7yr", label: "Full Payback Period", icon: BarChart3 },
]

/* ───────────────── lead capture form ───────────────── */
function LeadForm({ variant = "hero" }: { variant?: "hero" | "mid" | "bottom" }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", propertyType: "" })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [downloadUrl, setDownloadUrl] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name || !form.email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/guide/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (data.downloadUrl) {
        setDownloadUrl(data.downloadUrl)
        setStatus("success")
      } else {
        setStatus("success")
        setDownloadUrl("/downloads/pittsburghers-guide-draft-free-home.pdf")
      }
    } catch {
      setStatus("success")
      setDownloadUrl("/downloads/pittsburghers-guide-draft-free-home.pdf")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/30">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse-glow">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Your Guide Is Ready!</h3>
        <p className="text-zinc-400 mb-6">Check your email for a copy too.</p>
        <a
          href={downloadUrl}
          download
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
        >
          <Download className="w-5 h-5" />
          Download Your Free Guide
        </a>
      </div>
    )
  }

  const isHero = variant === "hero"

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${isHero ? "" : "max-w-lg mx-auto"}`}>
      <div className={isHero ? "space-y-3" : "grid sm:grid-cols-2 gap-3"}>
        <input
          type="text"
          placeholder="Your name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300"
        />
        <input
          type="email"
          placeholder="Email address"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300"
        />
        <input
          type="tel"
          placeholder="Phone (optional)"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300"
        />
        <select
          value={form.propertyType}
          onChange={(e) => setForm({ ...form, propertyType: e.target.value })}
          className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 rounded-xl text-zinc-400 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500 transition-all duration-300"
        >
          <option value="">Property type (optional)</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
          <option value="new-construction">New Construction</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/25 disabled:opacity-50 disabled:hover:scale-100"
      >
        {status === "loading" ? (
          <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            Get Your Free Guide Now
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </>
        )}
      </button>
      <div className="flex items-center justify-center gap-4 text-xs text-zinc-500">
        <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> No spam, ever</span>
        <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> 16-page PDF</span>
        <span className="flex items-center gap-1"><Zap className="w-3 h-3" /> Instant download</span>
      </div>
    </form>
  )
}

/* ───────────────── ebook 3D mockup ───────────────── */
function EbookMockup() {
  return (
    <div className="relative w-72 h-96 mx-auto group" style={{ perspective: "1200px" }}>
      {/* Glow behind book */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-emerald-600/20 rounded-3xl blur-3xl group-hover:from-green-500/40 group-hover:to-emerald-600/30 transition-all duration-700" />

      {/* Book spine shadow */}
      <div className="absolute left-4 top-4 bottom-4 w-3 bg-gradient-to-b from-green-800 to-green-950 rounded-l-sm transform -skewY-2 opacity-80" />

      {/* Book cover */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden border border-green-500/30 shadow-2xl shadow-green-500/10 transition-all duration-700 group-hover:shadow-green-500/30 group-hover:border-green-400/50"
        style={{
          transform: "rotateY(-8deg) rotateX(2deg)",
          transformStyle: "preserve-3d",
          transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "rotateY(-3deg) rotateX(0deg) translateZ(20px)" }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "rotateY(-8deg) rotateX(2deg)" }}
      >
        {/* Cover background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900" />
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-transparent" />

        {/* Grid pattern */}
        <div className="absolute inset-0 pattern-grid opacity-20" />

        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-between p-8 text-center">
          {/* Logo */}
          <div className="w-20 h-20 relative">
            <Image src="/images/logos/icon.png" alt="EcoSpray" fill className="object-contain drop-shadow-lg" />
          </div>

          {/* Title */}
          <div className="space-y-3">
            <div className="text-xs font-semibold text-green-400 tracking-widest uppercase">Free Guide</div>
            <h3 className="text-xl font-bold text-white leading-tight">
              The Pittsburgher&apos;s Guide to a
            </h3>
            <div className="text-3xl font-black gradient-text leading-none">
              Draft-Free Home
            </div>
          </div>

          {/* Bottom */}
          <div className="space-y-2">
            <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-green-500 to-transparent" />
            <p className="text-xs text-zinc-400">EcoSpray Solutions</p>
            <p className="text-[10px] text-zinc-500">Pittsburgh, PA</p>
          </div>
        </div>

        {/* Shimmer overlay */}
        <div className="absolute inset-0 shimmer pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Pages effect (right edge) */}
      <div className="absolute right-0 top-6 bottom-6 w-2 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-r-sm opacity-30" style={{ transform: "rotateY(-8deg) translateX(2px)" }} />
    </div>
  )
}

/* ───────────────── main page ───────────────── */
export default function FreeGuidePage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-16">

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-500/8 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-emerald-500/6 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
          <div className="absolute inset-0 pattern-grid opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Copy */}
            <div className="space-y-8">
              <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium">
                  <BookOpen className="w-4 h-4" />
                  Free 16-Page Guide
                </div>
              </FadeIn>

              <FadeIn delay={100}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
                  The Pittsburgher&apos;s Guide to a{" "}
                  <span className="gradient-text">Draft-Free Home</span>
                </h1>
              </FadeIn>

              <FadeIn delay={200}>
                <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                  Stop letting the cold out. This free playbook shows you exactly where your home is losing energy,
                  which insulation fixes deliver the biggest savings, and how to finally end those stubborn Pittsburgh drafts.
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <div className="flex flex-wrap gap-4">
                  {["Real cost breakdowns", "Room-by-room checklist", "Rebate guide included"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={400}>
                <LeadForm variant="hero" />
              </FadeIn>
            </div>

            {/* Right — Ebook Mockup */}
            <FadeIn delay={300} className="hidden lg:flex items-center justify-center">
              <EbookMockup />
            </FadeIn>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600">
          <ChevronDown className="w-6 h-6" />
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="relative border-y border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 100}>
                <div className="group text-center p-4 rounded-xl hover:bg-zinc-800/50 transition-all duration-300">
                  <stat.icon className="w-6 h-6 text-green-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-black text-white mb-1 group-hover:text-green-400 transition-colors">{stat.value}</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT YOU'LL LEARN — CHAPTER PREVIEWS ═══════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="text-sm text-green-400 font-semibold tracking-widest uppercase mb-4">Inside the Guide</div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
                6 Chapters of <span className="gradient-text">Pittsburgh-Tough</span> Insulation Knowledge
              </h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Everything a Pittsburgh homeowner needs to know about spray foam insulation — written in plain English with real costs and local expertise.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chapters.map((ch, i) => (
              <FadeIn key={ch.num} delay={i * 100}>
                <div className="group relative p-6 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-green-500/30 transition-all duration-500 card-lift cursor-default">
                  {/* Chapter number */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center text-sm font-bold text-zinc-400 group-hover:border-green-500/30 group-hover:text-green-400 transition-all duration-300">
                    {ch.num}
                  </div>

                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${ch.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <ch.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors duration-300">{ch.title}</h3>
                  <p className="text-sm text-green-500/80 font-medium mb-3">{ch.subtitle}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{ch.desc}</p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center gap-1 text-xs text-zinc-600 group-hover:text-green-500 transition-colors duration-300">
                    <BookOpen className="w-3 h-3" />
                    Included in your free guide
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ THE PITTSBURGH PROBLEM (content teaser) ═══════════ */}
      <section className="py-20 lg:py-28 relative bg-zinc-900/30 border-y border-zinc-800">
        <div className="absolute inset-0 pattern-dots opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — Content preview */}
            <FadeIn>
              <div className="space-y-6">
                <div className="text-sm text-green-400 font-semibold tracking-widest uppercase">From Chapter 1</div>
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
                  When Your Home Leaks Air, Your Hard Work <span className="gradient-text">Drains Away</span>
                </h2>
                <p className="text-zinc-400 leading-relaxed">
                  Western PA&apos;s freeze-thaw winters and humid summers make drafts, cold floors, and noisy rooms
                  feel like a stubborn problem many Pittsburghers just live with. But they don&apos;t have to.
                </p>

                <div className="space-y-4">
                  {[
                    { title: "The Stack Effect", desc: "Warm air rises and escapes through your attic, pulling cold air in from below." },
                    { title: "Attic & Can Lights", desc: "Penetrations from can lights, bath fans and flue chases leak more air than you'd think." },
                    { title: "Rim/Band Joists", desc: "The basement perimeter lets in cold air — the #1 overlooked problem in Pittsburgh homes." },
                    { title: "Crawl Spaces", desc: "Walls and sill plates with gaps that let moisture and cold seep into your living space." },
                  ].map((item) => (
                    <div key={item.title} className="group flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-800/50 transition-all duration-300">
                      <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-green-500/20 transition-colors">
                        <Snowflake className="w-4 h-4 text-green-500" />
                      </div>
                      <div>
                        <div className="font-semibold text-white text-sm group-hover:text-green-400 transition-colors">{item.title}</div>
                        <div className="text-xs text-zinc-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-zinc-500 italic">
                  <Lock className="w-4 h-4" />
                  Full details + diagrams in the free guide...
                </div>
              </div>
            </FadeIn>

            {/* Right — Visual */}
            <FadeIn delay={200}>
              <div className="relative">
                {/* Glowing card */}
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />

                  <div className="relative space-y-6">
                    <div className="flex items-center gap-3">
                      <Image src="/images/logos/icon-glow.png" alt="EcoSpray" width={60} height={60} className="rounded-xl" />
                      <div>
                        <div className="font-bold text-white">The Numbers Don&apos;t Lie</div>
                        <div className="text-sm text-zinc-500">Spray Foam Results</div>
                      </div>
                    </div>

                    {[
                      { stat: "Up to 50%", desc: "Energy Bill Reduction", bar: 85 },
                      { stat: "R-6 to R-7", desc: "R-Value Per Inch", bar: 92 },
                      { stat: "Up to 90%", desc: "Air Leakage Reduction", bar: 90 },
                      { stat: "15-25%", desc: "Increase in Home Value", bar: 60 },
                      { stat: "3-7 Years", desc: "Full Payback Period", bar: 70 },
                    ].map((item) => (
                      <div key={item.desc} className="group">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{item.desc}</span>
                          <span className="text-sm font-bold text-green-400">{item.stat}</span>
                        </div>
                        <div className="h-2 rounded-full bg-zinc-700 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500 transition-all duration-1000 ease-out group-hover:shadow-sm group-hover:shadow-green-500/50"
                            style={{ width: `${item.bar}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ MID-PAGE CTA ═══════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-zinc-900/80 to-zinc-800/50 border border-zinc-700/50 backdrop-blur-sm">
              <div className="lg:hidden mb-8">
                <EbookMockup />
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-green-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4 fill-green-400" />
                Join 500+ Pittsburgh homeowners
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Ready to Stop the Drafts?
              </h2>
              <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                Get the complete guide with cost breakdowns, rebate info, and a printable room-by-room checklist.
                No obligation — just practical Pittsburgh knowledge.
              </p>

              <LeadForm variant="mid" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ COST PREVIEW (Chapter 4 teaser) ═══════════ */}
      <section className="py-20 lg:py-28 relative bg-zinc-900/30 border-y border-zinc-800">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-sm text-green-400 font-semibold tracking-widest uppercase mb-4">From Chapter 4</div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                Real Costs. Real <span className="gradient-text">Payback.</span>
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { area: "Rim/Band Joist", range: "$1,200 – $3,000+", icon: Wrench, tagline: "Whole house perimeter" },
              { area: "Attic Roof Deck", range: "$3,500 – $9,000+", icon: Home, tagline: "Conditioned attic" },
              { area: "Crawl Space", range: "$2,500 – $6,000+", icon: Shield, tagline: "Walls & rim" },
              { area: "Garage/Bonus", range: "$1,800 – $5,000+", icon: ThermometerSun, tagline: "Bonus rooms" },
            ].map((item, i) => (
              <FadeIn key={item.area} delay={i * 100}>
                <div className="group relative p-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-green-500/30 transition-all duration-300 card-lift text-center">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="text-lg font-bold text-white mb-1 group-hover:text-green-400 transition-colors">{item.area}</div>
                  <div className="text-sm text-zinc-500 mb-3">{item.tagline}</div>
                  <div className="text-2xl font-black gradient-text">{item.range}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <p className="text-center text-zinc-500 text-sm mt-8 max-w-2xl mx-auto">
              Financing available with low monthly payments. Full cost breakdowns, payback drivers, and ROI analysis included in the guide.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══════════ TRUST / ABOUT ═══════════ */}
      <section className="py-20 lg:py-28 relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Image src="/images/logos/icon.png" alt="EcoSpray Solutions" width={64} height={64} className="rounded-xl" />
                  <div>
                    <h3 className="text-2xl font-black text-white">EcoSpray Solutions</h3>
                    <p className="text-green-400 text-sm">Pittsburgh&apos;s Spray Foam Experts</p>
                  </div>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  We&apos;re a Pittsburgh-born team that treats every home like it&apos;s on our block. From the South Hills to the
                  North Hills — from Allegheny County to Westmoreland County — we bring Pittsburgh&apos;s deep-rooted
                  craftsmanship to every job.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Award, text: "Licensed & Insured" },
                    { icon: Star, text: "4.9/5 Rating (200+ reviews)" },
                    { icon: MapPin, text: "Murrysville, PA" },
                    { icon: Wrench, text: "10+ Years Experience" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2 text-sm text-zinc-300">
                      <item.icon className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item.text}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:+17248192727"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white text-sm hover:bg-zinc-700 hover:border-green-500/30 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 text-green-500" />
                    (724) 819-2727
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white text-sm font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105"
                  >
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-500/30 transition-all duration-300 card-lift">
                    <Image src="/images/logos/banner-worker.png" alt="EcoSpray worker" width={400} height={200} className="w-full h-auto" />
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center hover:border-green-500/30 transition-all duration-300">
                    <div className="text-3xl font-black gradient-text">500+</div>
                    <div className="text-xs text-zinc-500">Projects Completed</div>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 text-center hover:border-green-500/30 transition-all duration-300">
                    <div className="text-3xl font-black gradient-text">50%</div>
                    <div className="text-xs text-zinc-500">Avg Energy Savings</div>
                  </div>
                  <div className="rounded-2xl overflow-hidden border border-zinc-800 hover:border-green-500/30 transition-all duration-300 card-lift">
                    <Image src="/images/logos/banner-interior.png" alt="Spray foam insulation" width={400} height={200} className="w-full h-auto" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══════════ FINAL CTA ═══════════ */}
      <section className="py-20 lg:py-28 relative bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950 border-t border-zinc-800">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <Image src="/images/logos/logo-full.png" alt="EcoSpray Solutions" width={120} height={90} className="mx-auto mb-8 opacity-80" />

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Yinz Ready to Stop Letting the <span className="gradient-text">Cold Out?</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
              Download your free guide and take the first step toward a warmer, quieter, more energy-efficient Pittsburgh home.
            </p>

            <LeadForm variant="bottom" />

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-zinc-600">
              <span>Published by EcoSpray Solutions</span>
              <span>|</span>
              <span>Pittsburgh, PA</span>
              <span>|</span>
              <a href="tel:+17248192727" className="hover:text-green-400 transition-colors">(724) 819-2727</a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
