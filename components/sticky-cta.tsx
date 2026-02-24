"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky-cta md:hidden ${visible ? "visible" : ""}`}
    >
      <div className="flex items-center gap-3">
        <a
          href={`tel:${SITE.phoneTel}`}
          className="flex items-center justify-center gap-2 flex-1 py-3 rounded-lg bg-white/10 text-white font-semibold text-sm transition-colors hover:bg-white/20"
        >
          <Phone className="w-4 h-4" />
          {SITE.phone}
        </a>
        <Link
          href="/free-estimate"
          className="flex items-center justify-center gap-2 flex-1 py-3 rounded-lg bg-[var(--orange)] text-white font-semibold text-sm transition-all hover:bg-[var(--orange-hover)] hover:shadow-lg"
        >
          Free Estimate
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
