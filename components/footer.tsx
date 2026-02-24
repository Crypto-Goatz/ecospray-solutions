"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, BookOpen } from "lucide-react"

const DEFAULT_CONFIG: Record<string, string> = {
  business_name: 'Spray Foam Solutions',
  phone: '(724) 819-2727',
  email: '',
  location: 'Murrysville, PA',
  service_area: 'Serving Pittsburgh & Western PA',
  license: 'PA License #123456',
}

interface FooterProps {
  config?: Record<string, string>
}

export default function Footer({ config }: FooterProps) {
  const c = { ...DEFAULT_CONFIG, ...config }

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-12 h-12 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image src="/images/logos/icon.png" alt="Spray Foam Solutions" fill className="object-contain" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Spray Foam</span>
                <span className="text-green-400 text-sm ml-1">Solutions</span>
                <div className="text-xs text-zinc-500">Spray Foam Insulation</div>
              </div>
            </Link>
            <p className="text-zinc-400 text-sm mb-4 max-w-md">
              Pittsburgh&apos;s trusted spray foam insulation experts. We help homeowners and
              businesses save energy, improve comfort, and protect their properties.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-500 hover:text-green-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-green-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-sm text-zinc-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/services" className="block text-sm text-zinc-400 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/about" className="block text-sm text-zinc-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/process" className="block text-sm text-zinc-400 hover:text-white transition-colors">
                Our Process
              </Link>
              <Link href="/testimonials" className="block text-sm text-zinc-400 hover:text-white transition-colors">
                Reviews
              </Link>
              <Link href="/contact" className="block text-sm text-zinc-400 hover:text-white transition-colors">
                Get a Quote
              </Link>
              <Link href="/free-guide" className="flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition-colors font-medium">
                <BookOpen className="w-3.5 h-3.5" />
                Free Guide
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href={`tel:${c.phone.replace(/[^+\d]/g, '')}`}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-green-500" />
                {c.phone}
              </a>
              <a
                href={`mailto:${c.email}`}
                className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-green-500" />
                {c.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-zinc-400">
                <MapPin className="w-4 h-4 text-green-500 mt-0.5" />
                <span>
                  {c.location}<br />
                  {c.service_area}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} {c.business_name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-zinc-300 transition-colors">Terms</Link>
            <span>|</span>
            <Link href="/cookies" className="hover:text-zinc-300 transition-colors">Cookies</Link>
            <span>|</span>
            <span>{c.license}</span>
            <span>|</span>
            <span>Fully Insured</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
