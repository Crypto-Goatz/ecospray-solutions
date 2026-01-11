"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, ArrowRight, Shield, Award, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Cta() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
          alt="Pittsburgh skyline"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-emerald-900/90 to-green-900/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Animated Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-white/10 rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-10 w-48 h-48 border border-white/10 rounded-full animate-pulse delay-500" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 border border-white/10 rounded-full animate-pulse delay-1000" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Save on
              <span className="block text-green-300">Energy Bills?</span>
            </h2>
            <p className="text-xl text-green-100/80 mb-8 max-w-lg">
              Get a free, no-obligation quote today. Our experts will assess your property
              and show you exactly how much you can save with spray foam insulation.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                asChild
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 text-lg px-8 py-6 group"
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
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                <a href="tel:+14125551234">
                  <Phone className="mr-2 w-5 h-5" />
                  (412) 555-1234
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-green-100/70">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                <span>5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Same-Day Estimates</span>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>

            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+14125551234"
                className="flex items-center gap-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-green-200">Call us now</div>
                  <div className="text-xl font-bold text-white group-hover:text-green-300 transition-colors">
                    (412) 555-1234
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-green-500/50 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-green-200">Service Area</div>
                  <div className="text-lg font-medium text-white">
                    Pittsburgh & Western PA
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-green-500/50 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-green-200">Business Hours</div>
                  <div className="text-lg font-medium text-white">
                    Mon-Fri: 8am - 6pm
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="mt-8 w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white font-bold rounded-xl hover:from-green-500 hover:to-emerald-600 transition-all group"
            >
              Schedule Free Estimate
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
