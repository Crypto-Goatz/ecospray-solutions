"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Services", href: "/#services" },
  { label: "Areas", href: "/#areas" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span className="flex items-center gap-1">
              <span
                className="w-1 h-6 rounded-full bg-[var(--orange)] transition-all duration-300 group-hover:h-7"
              />
              <span
                className={`text-xl font-extrabold tracking-tight transition-colors duration-500 ${
                  scrolled ? "text-[var(--navy)]" : "text-white"
                }`}
              >
                SPRAY FOAM
              </span>
            </span>
            <span
              className={`text-[11px] font-medium tracking-widest uppercase ml-3 transition-colors duration-500 ${
                scrolled ? "text-[var(--slate-500)]" : "text-white/60"
              }`}
            >
              near pittsburgh
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-[var(--orange)] relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[var(--orange)] after:rounded-full after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? "text-[var(--slate-700)]" : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Side: Phone + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE.phoneTel}`}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-500 hover:text-[var(--orange)] ${
                scrolled ? "text-[var(--navy)]" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <Link href="/free-estimate" className="btn-primary !py-3 !px-6 !text-sm">
              Free Estimate
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative z-50 p-2 rounded-lg transition-colors ${
              mobileOpen
                ? "text-white"
                : scrolled
                  ? "text-[var(--navy)]"
                  : "text-white"
            }`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 left-0 right-0 bg-[var(--navy)] transition-transform duration-500 ease-out ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="pt-24 pb-8 px-6">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-white/80 hover:text-[var(--orange)] py-3 border-b border-white/10 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`tel:${SITE.phoneTel}`}
                className="flex items-center justify-center gap-2 text-white font-semibold text-lg"
              >
                <Phone className="w-5 h-5 text-[var(--orange)]" />
                {SITE.phone}
              </a>
              <Link
                href="/free-estimate"
                onClick={() => setMobileOpen(false)}
                className="btn-primary justify-center"
              >
                Get Your Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
