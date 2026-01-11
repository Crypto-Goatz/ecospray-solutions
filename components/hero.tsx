"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play, Zap, Shield, Award, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80"
          alt="Professional insulation work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/95 to-zinc-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 pattern-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 backdrop-blur-sm animate-pulse-glow">
              <Zap className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-400">Save Up to 50% on Energy Bills</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-white">Pittsburgh&apos;s</span>
              <br />
              <span className="gradient-text">Spray Foam</span>
              <br />
              <span className="text-white">Experts</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-zinc-300 max-w-lg leading-relaxed">
              Professional insulation for homes and businesses. Lower energy costs,
              improved comfort, and lasting protection for the greater Pittsburgh area.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-8 py-6 glow-green group"
              >
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 text-lg px-8 py-6 group"
              >
                <a href="tel:+14125551234">
                  <Phone className="mr-2 w-5 h-5" />
                  (412) 555-1234
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Award, text: "10+ Years Experience" },
                { icon: Zap, text: "Energy Star Certified" },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2 text-zinc-400">
                  <badge.icon className="w-5 h-5 text-green-500" />
                  <span className="text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "500+", label: "Projects Completed", delay: "0s" },
                { value: "50%", label: "Avg. Energy Savings", delay: "0.1s" },
                { value: "4.9★", label: "Customer Rating", delay: "0.2s" },
                { value: "10+", label: "Years Experience", delay: "0.3s" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-gradient p-6 backdrop-blur-sm card-lift"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className="text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                  <div className="text-sm text-zinc-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Video Preview Card */}
            <div className="mt-4 border-gradient p-4 backdrop-blur-sm group cursor-pointer card-lift">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80"
                  alt="Spray foam installation video"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center glow-green-lg group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-zinc-400 mt-3">Watch how we transform homes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-green-400" />
      </div>
    </section>
  )
}
