"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Process", href: "/process" },
  { name: "Reviews", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image src="/images/logos/icon.png" alt="Spray Foam Solutions" fill className="object-contain" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-white text-lg">Spray Foam</span>
              <span className="text-green-400 text-sm ml-1">Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/free-guide"
              className="flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition-colors font-medium"
            >
              <BookOpen className="w-4 h-4" />
              Free Guide
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+17248192727"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              (724) 819-2727
            </a>
            <Button
              asChild
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white"
            >
              <Link href="/contact">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-zinc-800">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors px-2 py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/free-guide"
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors px-2 py-1 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                <BookOpen className="w-4 h-4" />
                Free Guide
              </Link>
              <a
                href="tel:+17248192727"
                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors px-2 py-1"
              >
                <Phone className="w-4 h-4" />
                (724) 819-2727
              </a>
              <Button
                asChild
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white mt-2"
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Free Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
