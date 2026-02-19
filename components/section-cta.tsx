import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SectionCtaProps {
  title: string
  subtitle: string
  variant?: 'dark' | 'gradient'
}

export default function SectionCta({ title, subtitle, variant = 'gradient' }: SectionCtaProps) {
  const bg =
    variant === 'gradient'
      ? 'bg-gradient-to-r from-green-600 to-emerald-700'
      : 'bg-zinc-900 border border-zinc-800'

  return (
    <section className={`py-16 ${bg} relative overflow-hidden`}>
      {variant === 'gradient' && (
        <>
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
        </>
      )}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className={
              variant === 'gradient'
                ? 'bg-white text-green-700 hover:bg-zinc-100 text-lg px-8 py-6 group'
                : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white text-lg px-8 py-6 group'
            }
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
            <a href="tel:+17248192727">
              <Phone className="mr-2 w-5 h-5" />
              (724) 819-2727
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
