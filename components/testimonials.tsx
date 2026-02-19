"use client"

import Image from "next/image"
import { Star, Quote, MapPin } from "lucide-react"

const DEFAULT_TESTIMONIALS = [
  {
    name: "Mike & Sarah Johnson",
    location: "Murrysville, PA",
    rating: "5",
    text: "Our heating bills dropped by 40% after EcoSpray insulated our attic. The crew was professional, clean, and finished in one day. Highly recommend!",
    project: "Attic Insulation",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&q=80",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    order: '1',
  },
  {
    name: "Tom Reynolds",
    location: "Pittsburgh, PA",
    rating: "5",
    text: "As a commercial property owner, I was skeptical about the investment. After seeing the energy savings in my first quarter, I had them do all three of my buildings.",
    project: "Commercial Buildings",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    order: '2',
  },
  {
    name: "Jennifer Martinez",
    location: "Monroeville, PA",
    rating: "5",
    text: "We had terrible drafts in our 1920s home. EcoSpray sealed everything up and now our home is comfortable year-round. The difference is incredible.",
    project: "Whole Home Retrofit",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    order: '3',
  },
]

interface TestimonialsProps {
  testimonials?: Array<Record<string, string>>
  config?: Record<string, string>
}

export default function Testimonials({ testimonials, config }: TestimonialsProps) {
  const items = testimonials && testimonials.length > 0 ? testimonials : DEFAULT_TESTIMONIALS
  const overallRating = config?.overall_rating || '4.9'
  const reviewCount = config?.review_count || '200+'

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Customers
            <span className="block gradient-text">Are Saying</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what Pittsburgh homeowners say.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {items.map((testimonial) => {
            const rating = parseInt(testimonial.rating || '5', 10)

            return (
              <div
                key={testimonial.name}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden hover:border-green-500/50 transition-all duration-500 card-lift"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.project}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

                  {/* Project Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/90 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                    {testimonial.project}
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
                    {[...Array(rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-zinc-300 mb-6 leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-green-500/30">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-white">{testimonial.name}</div>
                      <div className="flex items-center gap-1 text-sm text-zinc-500">
                        <MapPin className="w-3 h-3" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 rounded-2xl">
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="h-8 w-px bg-zinc-700" />
            <div className="text-left">
              <div className="text-2xl font-bold text-white">{overallRating}/5</div>
              <div className="text-sm text-zinc-500">from {reviewCount} reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
