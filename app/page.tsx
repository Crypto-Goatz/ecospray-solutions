import Hero from "@/components/hero";
import ScrollReveal from "@/components/scroll-reveal";
import ServicesGrid from "@/components/services-grid";
import Stats from "@/components/stats";
import Benefits from "@/components/benefits";
import Testimonials from "@/components/testimonials";
import CtaBanner from "@/components/cta-banner";
import AreasGrid from "@/components/areas-grid";
import ImageShowcase from "@/components/image-showcase";
import LicensedCta from "@/components/licensed-cta";
import { reviewSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema()) }}
      />

      <Hero />

      {/* Services */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <ServicesGrid />
          </ScrollReveal>
        </div>
      </section>

      {/* Image Showcase */}
      <ImageShowcase />

      {/* Stats */}
      <ScrollReveal>
        <Stats />
      </ScrollReveal>

      {/* Benefits */}
      <Benefits />

      {/* Testimonials */}
      <ScrollReveal>
        <Testimonials />
      </ScrollReveal>

      {/* Licensed Contractor CTA */}
      <LicensedCta />

      {/* CTA - Estimate */}
      <ScrollReveal>
        <CtaBanner variant="estimate" />
      </ScrollReveal>

      {/* Areas */}
      <section className="bg-[var(--slate-50)] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <AreasGrid />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA - Call */}
      <ScrollReveal>
        <CtaBanner variant="call" />
      </ScrollReveal>
    </>
  );
}
