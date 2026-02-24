import Link from "next/link";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/services-data";
import { AREAS } from "@/lib/areas-data";
import Logo from "@/components/logo";

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Process", href: "/process" },
  { label: "Areas", href: "/areas" },
  { label: "Free Estimate", href: "/free-estimate" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const topAreas = AREAS.slice(0, 6);

  return (
    <footer className="bg-[var(--navy)] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[var(--orange)] after:rounded-full">
              Company
            </h4>
            <ul className="space-y-3">
              {COMPANY_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-[var(--orange)] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[var(--orange)] after:rounded-full">
              Services
            </h4>
            <ul className="space-y-3">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-white/60 hover:text-[var(--orange)] transition-colors duration-300"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[var(--orange)] after:rounded-full">
              Service Areas
            </h4>
            <ul className="space-y-3">
              {topAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-sm text-white/60 hover:text-[var(--orange)] transition-colors duration-300"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="text-sm text-[var(--orange)] hover:text-white transition-colors duration-300 font-medium"
                >
                  View All Areas &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-5 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[var(--orange)] after:rounded-full">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[var(--orange)]/20 transition-colors">
                    <Phone className="w-4 h-4 text-[var(--orange)]" />
                  </span>
                  <span className="font-semibold text-white">{SITE.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-colors duration-300 group"
                >
                  <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-[var(--orange)]/20 transition-colors">
                    <Mail className="w-4 h-4 text-[var(--orange)]" />
                  </span>
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[var(--orange)]" />
                </span>
                {SITE.hours}
              </li>
              <li className="flex items-center gap-3 text-sm text-white/60">
                <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[var(--orange)]" />
                </span>
                {SITE.address.full}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Logo className="text-white/60" size="small" />
            <p className="text-sm text-white/40">
              &copy; 2026 {SITE.name}. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <Link
              href="/privacy"
              className="hover:text-white/80 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white/80 transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
