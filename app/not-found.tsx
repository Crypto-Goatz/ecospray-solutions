import Link from "next/link"
import { Home, MessageSquare, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <div className="text-[120px] md:text-[160px] font-extrabold leading-none gradient-text mb-2">
          404
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-4">
          Page Not Found
        </h1>

        <p className="text-[var(--slate-500)] mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-primary"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="btn-outline"
          >
            <MessageSquare className="w-5 h-5" />
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
