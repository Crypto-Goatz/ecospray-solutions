import type { Metadata } from 'next'
import Image from 'next/image'
import { Star, Quote, MapPin, Award, Clock, Sparkles, ThumbsUp } from 'lucide-react'
import Breadcrumbs from '@/components/breadcrumbs'
import SectionCta from '@/components/section-cta'
import Footer from '@/components/footer'
import { getBreadcrumbSchema, getReviewSchema, getAggregateRatingSchema } from '@/lib/schema-markup'

/* ------------------------------------------------------------------ */
/*  SXO Metadata                                                      */
/* ------------------------------------------------------------------ */

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials | Spray Foam Solutions Pittsburgh',
  description:
    'Read 200+ five-star reviews from Pittsburgh homeowners. Spray Foam Solutions averages a 4.9/5 rating for spray foam insulation across Murrysville, Monroeville, Greensburg & Western PA. Real customer stories, real energy savings.',
  keywords: [
    'spray foam insulation reviews Pittsburgh',
    'Spray Foam Solutions reviews',
    'Pittsburgh insulation testimonials',
    'spray foam insulation Murrysville PA',
    'insulation contractor reviews Western PA',
    'energy savings reviews Pittsburgh',
    'spray foam insulation customer stories',
    'best insulation company Pittsburgh',
  ],
  openGraph: {
    title: 'Customer Reviews & Testimonials | Spray Foam Solutions Pittsburgh',
    description:
      '200+ five-star reviews. 4.9/5 average rating. See why Pittsburgh homeowners trust Spray Foam Solutions for spray foam insulation.',
    url: 'https:///testimonials',
    siteName: 'Spray Foam Solutions',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Reviews & Testimonials | Spray Foam Solutions Pittsburgh',
    description:
      '200+ five-star reviews. 4.9/5 average rating. Real stories from Pittsburgh homeowners saving up to 50% on energy bills.',
  },
  alternates: {
    canonical: 'https:///testimonials',
  },
}

/* ------------------------------------------------------------------ */
/*  Testimonial Data                                                   */
/* ------------------------------------------------------------------ */

const FEATURED_REVIEWS = [
  {
    name: 'Mike & Sarah Johnson',
    location: 'Murrysville, PA',
    rating: 5,
    text: 'Our heating bills dropped by 40% after Spray Foam insulated our attic. The crew was professional, clean, and finished in one day. We were amazed at the temperature difference the very first night -- the upstairs bedrooms that used to be freezing are now perfectly comfortable. Highly recommend to every homeowner in the area!',
    project: 'Attic Insulation',
    date: '2025-09-12',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    name: 'Tom Reynolds',
    location: 'Pittsburgh, PA',
    rating: 5,
    text: 'As a commercial property owner, I was skeptical about the investment. After seeing the energy savings in my first quarter -- nearly 35% lower utility costs -- I had Spray Foam do all three of my buildings. Their team handled the scheduling around our tenants with zero disruption. Top-notch professionalism from start to finish.',
    project: 'Commercial Buildings',
    date: '2025-07-22',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    name: 'Jennifer Martinez',
    location: 'Monroeville, PA',
    rating: 5,
    text: 'We had terrible drafts in our 1920s home. Every winter the second floor was unbearable and our furnace ran non-stop. Spray Foam sealed everything up -- walls, rim joists, attic -- and now our home is comfortable year-round. The difference is incredible. Our energy bills are down and the house stays at a consistent temperature for the first time ever.',
    project: 'Whole Home Retrofit',
    date: '2025-11-03',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
]

const MORE_REVIEWS = [
  {
    name: 'Robert K.',
    location: 'Export, PA',
    rating: 5,
    project: 'Crawl Space',
    date: '2025-10-18',
    text: 'Had a damp, musty crawl space for years. Spray Foam encapsulated the whole thing with closed-cell foam and it is bone dry now. No more moisture problems, no more musty smell upstairs. Worth every penny.',
  },
  {
    name: 'Lisa & David M.',
    location: 'Greensburg, PA',
    rating: 5,
    project: 'New Construction',
    date: '2025-08-05',
    text: 'Our builder recommended Spray Foam for our new home and we are so glad we went with spray foam over fiberglass. The house is incredibly quiet and our first winter heating bill was shockingly low.',
  },
  {
    name: 'Amanda W.',
    location: 'Irwin, PA',
    rating: 5,
    project: 'Basement Insulation',
    date: '2025-06-14',
    text: 'Our basement was always cold and damp. After Spray Foam insulated the walls and rim joists, it feels like a whole new room. We actually use it as a family room now. The crew was fast and left everything spotless.',
  },
  {
    name: 'James T.',
    location: 'North Huntingdon, PA',
    rating: 5,
    project: 'Energy Audit',
    date: '2025-12-01',
    text: 'Started with an energy audit and they pinpointed exactly where we were losing heat. The spray foam work they did based on the audit cut our gas bill nearly in half. Transparent, honest, and professional.',
  },
  {
    name: 'Patricia S.',
    location: 'Delmont, PA',
    rating: 5,
    project: 'Attic + Walls',
    date: '2025-05-20',
    text: 'We had Spray Foam insulate both the attic and exterior walls of our split-level. Night-and-day difference in comfort. No more cold spots by the windows and the HVAC barely kicks on now. Fantastic work.',
  },
  {
    name: 'Chris R.',
    location: 'Penn Township, PA',
    rating: 5,
    project: 'Garage Insulation',
    date: '2025-09-30',
    text: 'I use my garage as a workshop and it was unbearable in winter. Spray Foam foamed the walls and ceiling and now I can work out there comfortably year-round. Great team, great results.',
  },
]

const ALL_REVIEWS_FOR_SCHEMA = [
  ...FEATURED_REVIEWS.map((r) => ({
    author: r.name,
    rating: r.rating,
    text: r.text,
    date: r.date,
  })),
  ...MORE_REVIEWS.map((r) => ({
    author: r.name,
    rating: r.rating,
    text: r.text,
    date: r.date,
  })),
]

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function TestimonialsPage() {
  const breadcrumbItems = [
    { name: 'Home', url: 'https://' },
    { name: 'Reviews', url: 'https:///testimonials' },
  ]

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems)
  const reviewSchemas = getReviewSchema(ALL_REVIEWS_FOR_SCHEMA)
  const aggregateRatingSchema = getAggregateRatingSchema()

  return (
    <div className="min-h-screen bg-zinc-950">
      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchemas) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />

      {/* ── Breadcrumbs ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Breadcrumbs items={[{ label: 'Reviews' }]} />
      </div>

      {/* ================================================================ */}
      {/*  HERO                                                            */}
      {/* ================================================================ */}
      <section className="pt-8 pb-16 md:pb-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pattern-grid" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-green-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
            200+ Verified Reviews
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            What Pittsburgh Homeowners Say{' '}
            <span className="block gradient-text">About Spray Foam</span>
          </h1>

          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Real stories from real customers across Murrysville, Pittsburgh, and Western PA.
            See why hundreds of homeowners trust Spray Foam Solutions for their spray foam
            insulation needs.
          </p>

          {/* Aggregate Rating Badge */}
          <div className="inline-flex items-center gap-5 px-8 py-5 glass rounded-2xl hover-glow">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-7 h-7 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-zinc-400">Average Rating</span>
            </div>
            <div className="h-12 w-px bg-zinc-700" />
            <div className="text-center">
              <div className="text-4xl font-bold text-white">4.9</div>
              <div className="text-sm text-zinc-400">out of 5</div>
            </div>
            <div className="h-12 w-px bg-zinc-700" />
            <div className="text-center">
              <div className="text-4xl font-bold text-white">200+</div>
              <div className="text-sm text-zinc-400">Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  FEATURED REVIEWS                                                */}
      {/* ================================================================ */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured <span className="gradient-text">Customer Stories</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Detailed reviews from homeowners and business owners who transformed their
              properties with spray foam insulation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {FEATURED_REVIEWS.map((review) => (
              <div
                key={review.name}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-500 card-lift"
              >
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={review.image}
                    alt={`${review.project} project for ${review.name} in ${review.location}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

                  {/* Project Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                    {review.project}
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute bottom-4 left-4">
                    <Quote className="w-10 h-10 text-green-500/50" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-zinc-300 mb-6 leading-relaxed italic text-sm">
                    &quot;{review.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-green-500/30">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white">{review.name}</div>
                      <div className="flex items-center gap-1 text-sm text-zinc-500">
                        <MapPin className="w-3 h-3" />
                        {review.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  MORE REVIEWS GRID                                               */}
      {/* ================================================================ */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More Happy <span className="gradient-text">Customers</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              From crawl spaces to new construction, our customers across Western PA
              consistently rate us 5 stars.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MORE_REVIEWS.map((review) => (
              <div
                key={review.name}
                className="relative p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl hover:border-green-500/30 transition-all duration-300 hover-glow"
              >
                {/* Top Row: Stars + Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="px-2.5 py-0.5 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400 font-medium">
                    {review.project}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-4 italic">
                  &quot;{review.text}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 pt-4 border-t border-zinc-800">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white text-xs font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{review.name}</div>
                    <div className="flex items-center gap-1 text-xs text-zinc-500">
                      <MapPin className="w-3 h-3" />
                      {review.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  STATS BAR                                                       */}
      {/* ================================================================ */}
      <section className="py-12 border-y border-zinc-800 relative">
        <div className="absolute inset-0 pattern-dots opacity-30" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '4.9', label: 'Average Rating', icon: Star },
              { value: '200+', label: 'Customer Reviews', icon: Quote },
              { value: '500+', label: 'Projects Completed', icon: Award },
              { value: '100%', label: 'Satisfaction Goal', icon: ThumbsUp },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 mb-3">
                  <stat.icon className="w-5 h-5 text-green-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  WHY CUSTOMERS LOVE US                                           */}
      {/* ================================================================ */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Customers <span className="gradient-text">Love Us</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
              Four reasons Pittsburgh homeowners keep recommending Spray Foam Solutions to
              their neighbors, friends, and family.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Professional Crews',
                description:
                  'Trained, certified, and background-checked installers who treat your home with respect. Our team averages 8+ years of insulation experience.',
              },
              {
                icon: Clock,
                title: 'On-Time Completion',
                description:
                  'We show up when we say we will and finish on schedule. Most residential projects are completed in a single day with zero delays.',
              },
              {
                icon: Sparkles,
                title: 'Clean Job Sites',
                description:
                  'We protect your belongings, contain overspray, and leave your home cleaner than we found it. Every single time.',
              },
              {
                icon: ThumbsUp,
                title: 'Lasting Results',
                description:
                  'Spray foam does not sag, settle, or degrade. Our installations deliver energy savings and comfort for the lifetime of your home.',
              },
            ].map((reason) => (
              <div
                key={reason.title}
                className="relative p-6 border-gradient card-lift"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 border border-green-500/20 flex items-center justify-center mb-5">
                    <reason.icon className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================================ */}
      {/*  CTA                                                             */}
      {/* ================================================================ */}
      <SectionCta
        title="Ready to Join 200+ Happy Customers?"
        subtitle="Get your free insulation quote today and see why Pittsburgh homeowners rate us 4.9 out of 5 stars."
      />

      {/* ================================================================ */}
      {/*  FOOTER                                                          */}
      {/* ================================================================ */}
      <Footer />
    </div>
  )
}
