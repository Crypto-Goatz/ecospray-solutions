export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  hero: string;
  benefits: string[];
  features: string[];
  content: string;
  faqs: { q: string; a: string }[];
  relatedSlugs: string[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "residential-insulation",
    title: "Residential Spray Foam Insulation in Pittsburgh",
    shortTitle: "Residential",
    icon: "Home",
    description: "Transform your home's comfort and slash energy bills with professional closed-cell and open-cell spray foam insulation.",
    hero: "Your home deserves the best insulation technology available. Our residential spray foam creates an airtight thermal barrier that keeps your family comfortable year-round while cutting heating and cooling costs by up to 50%.",
    benefits: [
      "Cut energy bills by 40-50% on average",
      "Eliminate drafts and cold spots permanently",
      "Reduce outside noise by up to 80%",
      "Prevent moisture, mold, and mildew",
      "Strengthen your home's structural integrity",
      "Qualifies for federal energy tax credits",
    ],
    features: [
      "Attic insulation — the #1 area for heat loss",
      "Wall cavity insulation for maximum R-value",
      "Basement and foundation waterproofing + insulation",
      "Rim joist and band board sealing",
      "Cathedral ceiling insulation",
      "Garage insulation for workshops and living spaces",
    ],
    content: `Pittsburgh homeowners face extreme temperature swings — from sweltering summers to bitter winters below zero. Traditional fiberglass batts leave gaps, sag over time, and allow air infiltration that accounts for up to 40% of energy loss in a typical home.

Spray foam insulation solves this permanently. Unlike fiberglass, spray foam expands on contact to fill every crack, gap, and void. It bonds directly to surfaces, creating a seamless air and moisture barrier that never sags, shifts, or settles.

**Closed-Cell Spray Foam** delivers R-6.5 per inch — the highest R-value of any insulation. It also adds structural strength and acts as a vapor barrier, making it ideal for basements, crawl spaces, and exterior walls.

**Open-Cell Spray Foam** provides R-3.7 per inch with superior sound dampening. It's perfect for interior walls, attics, and anywhere noise reduction matters.

Every home is different. Our certified technicians perform a thorough assessment of your home's insulation needs, identify problem areas with thermal imaging, and recommend the right solution for your specific situation and budget.`,
    faqs: [
      { q: "How long does residential spray foam installation take?", a: "Most homes are completed in 1-2 days. A typical attic or basement takes just 4-6 hours. We work efficiently while protecting your home with full containment and ventilation." },
      { q: "Is spray foam insulation safe for my family?", a: "Absolutely. Once cured (within 24 hours), spray foam is completely inert and non-toxic. It does not off-gas or release particles. Our teams use full PPE during installation and ensure proper ventilation." },
      { q: "How much can I really save on energy bills?", a: "Pittsburgh homeowners typically see 40-50% reduction in heating and cooling costs. The exact savings depend on your home's current insulation, air leaks, and HVAC efficiency. Most projects pay for themselves in 3-5 years." },
      { q: "Does spray foam help with ice dams?", a: "Yes — this is one of the biggest benefits for Pittsburgh homes. By insulating and air-sealing the attic, spray foam prevents warm air from reaching the roof deck, which eliminates the uneven melting that causes ice dams." },
    ],
    relatedSlugs: ["crawl-space-insulation", "attic-insulation"],
  },
  {
    slug: "commercial-insulation",
    title: "Commercial Spray Foam Insulation in Pittsburgh",
    shortTitle: "Commercial",
    icon: "Building2",
    description: "Reduce operating costs and improve tenant comfort with high-performance commercial spray foam insulation solutions.",
    hero: "Commercial buildings lose thousands of dollars annually through inadequate insulation. Our commercial spray foam solutions deliver measurable ROI through dramatic energy savings, improved HVAC efficiency, and reduced maintenance costs.",
    benefits: [
      "Reduce HVAC costs by 30-50%",
      "Extend roof life by 20+ years with SPF roofing",
      "Meet and exceed energy code requirements",
      "Improve indoor air quality for tenants",
      "Minimize business disruption with fast installation",
      "Qualifies for commercial energy incentives",
    ],
    features: [
      "Warehouse and industrial facility insulation",
      "Office building envelope upgrades",
      "SPF roofing systems with renewable warranties",
      "Cold storage and temperature-controlled facilities",
      "Metal building insulation and condensation control",
      "Restaurant and retail space insulation",
    ],
    content: `Commercial buildings in the Pittsburgh area face unique insulation challenges. Aging steel structures, flat roofs, and large open spaces make traditional insulation impractical or ineffective.

Spray polyurethane foam (SPF) is the gold standard for commercial insulation. It conforms to any surface, fills irregular cavities, and creates a monolithic air and moisture barrier that outperforms all other insulation types.

**SPF Roofing Systems** are a game-changer for commercial flat roofs. Applied directly over existing roofing materials, SPF creates a seamless, self-flashing, waterproof membrane with built-in insulation. No tear-off required. Renewable every 10-15 years with a simple recoat.

**Metal Building Insulation** eliminates the condensation problems that plague steel structures in Pittsburgh's humid climate. Spray foam applied to the underside of metal roofing and walls prevents thermal bridging and stops "rain inside" condensation.

We work around your business schedule — nights, weekends, and phased installations to minimize disruption to your operations.`,
    faqs: [
      { q: "Can you insulate our building without shutting down operations?", a: "Yes. We regularly perform commercial installations during off-hours, weekends, and in phases to keep your business running. Our team works efficiently with minimal disruption." },
      { q: "What's the ROI on commercial spray foam?", a: "Most commercial projects see full ROI in 2-4 years through energy savings alone. SPF roof systems can save 30-50% on HVAC costs while extending roof life by 20+ years, making the total cost of ownership significantly lower than traditional alternatives." },
      { q: "Do you handle commercial roofing with spray foam?", a: "Yes. SPF roofing is one of our specialties. We apply high-density closed-cell foam directly over your existing roof, creating a seamless waterproof membrane with R-6.5 per inch of insulation. It's the most cost-effective flat roof solution available." },
    ],
    relatedSlugs: ["residential-insulation", "new-construction"],
  },
  {
    slug: "new-construction",
    title: "New Construction Spray Foam Insulation",
    shortTitle: "New Construction",
    icon: "HardHat",
    description: "Build it right from the start. Spray foam insulation for new homes and commercial construction projects in the Pittsburgh area.",
    hero: "New construction is the perfect opportunity to install the best insulation system available. Spray foam during the framing stage delivers maximum performance, ensures code compliance, and sets your building up for decades of energy efficiency.",
    benefits: [
      "Maximum R-value in minimum wall thickness",
      "Exceeds Pennsylvania energy code requirements",
      "Reduces HVAC equipment sizing and costs",
      "Creates a true air barrier from day one",
      "No callbacks for settling or shifting insulation",
      "Increases home appraisal value",
    ],
    features: [
      "Full envelope insulation (walls, roof, foundation)",
      "Open-cell for interior sound control",
      "Closed-cell for exterior and below-grade",
      "Coordination with builders and general contractors",
      "Blower door testing and thermal verification",
      "Energy Star and green building compliance",
    ],
    content: `Building a new home or commercial space in the Pittsburgh area? The insulation choice you make during construction will impact energy costs, comfort, and maintenance for the entire life of the building.

Spray foam is the smartest insulation investment for new construction. Applied to open wall cavities, roof decks, and foundations during the framing stage, it creates a complete thermal and air barrier that traditional insulation simply cannot match.

**Why builders choose spray foam:**

The R-value per inch is 2-3x higher than fiberglass, meaning you can meet energy codes with thinner walls. The air-sealing properties eliminate the need for separate house wrap in many applications. And because spray foam is structural, it actually strengthens the building.

**We work seamlessly with your construction team.** Our crews are experienced with new construction schedules. We coordinate with your builder, arrive on time, work clean, and pass inspection the first time — every time.

**Blower door testing** is included with every new construction project. We verify the air tightness of the building envelope and provide documentation for code compliance, energy ratings, and green building certifications.`,
    faqs: [
      { q: "When in the construction process should spray foam be installed?", a: "After framing, rough plumbing, and rough electrical are complete, and before drywall. This gives us full access to wall cavities, roof deck, and rim joists for maximum coverage." },
      { q: "Is spray foam more expensive than fiberglass for new builds?", a: "The material cost is higher, but the total installed cost difference is smaller than most people think. And when you factor in reduced HVAC sizing, lower energy bills, and zero callbacks for insulation issues, spray foam is often the most cost-effective choice over the life of the building." },
      { q: "Do you work with custom home builders?", a: "Yes, we work with builders, architects, and general contractors throughout the Pittsburgh area. We provide detailed quotes, coordinate with your schedule, and deliver the performance your clients expect." },
    ],
    relatedSlugs: ["residential-insulation", "commercial-insulation"],
  },
  {
    slug: "crawl-space-insulation",
    title: "Crawl Space Insulation & Encapsulation in Pittsburgh",
    shortTitle: "Crawl Spaces",
    icon: "Warehouse",
    description: "Eliminate moisture, mold, and cold floors with professional crawl space spray foam insulation and encapsulation.",
    hero: "Your crawl space is the hidden energy drain under your home. Moisture, mold, and uninsulated surfaces rob your comfort and damage your home's structure. Spray foam insulation and encapsulation solve these problems permanently.",
    benefits: [
      "Eliminate cold floors above the crawl space",
      "Stop moisture and mold at the source",
      "Improve indoor air quality throughout your home",
      "Reduce energy bills by 15-25%",
      "Protect plumbing from freezing in winter",
      "Prevent pest infiltration",
    ],
    features: [
      "Closed-cell foam on crawl space walls and rim joists",
      "Vapor barrier installation on crawl space floor",
      "Dehumidifier installation for ongoing moisture control",
      "Existing insulation removal and disposal",
      "Structural repair and joist reinforcement",
      "Pest exclusion and entry point sealing",
    ],
    content: `Pittsburgh's climate creates the perfect storm for crawl space problems. Cold winters, humid summers, and heavy rainfall mean your crawl space is under constant assault from moisture, temperature extremes, and condensation.

**The stack effect** means air from your crawl space rises into your living space. If your crawl space has mold, moisture, or musty odors, your family is breathing that air every day. Up to 40% of the air you breathe on the first floor comes from below.

**Crawl space encapsulation** with spray foam is the permanent solution:

1. **Seal the vents** — counterintuitive, but open crawl space vents in Pittsburgh's climate actually increase moisture problems by letting humid summer air condense on cool surfaces.

2. **Insulate the walls** — closed-cell spray foam on crawl space walls provides R-21+ insulation, a vapor barrier, and air sealing in one application.

3. **Seal the floor** — a heavy-duty vapor barrier on the crawl space floor prevents ground moisture from entering.

4. **Control humidity** — a properly sized dehumidifier maintains optimal conditions year-round.

The result: a clean, dry, insulated crawl space that dramatically improves your home's comfort, air quality, and energy efficiency.`,
    faqs: [
      { q: "Should crawl space vents be open or closed?", a: "Closed. This is one of the biggest misconceptions in home building. In Pittsburgh's climate, open vents let humid summer air into the cool crawl space where it condenses, causing mold and rot. A sealed, conditioned crawl space performs dramatically better." },
      { q: "How do I know if my crawl space needs insulation?", a: "Signs include: cold floors in winter, musty odors, visible mold or moisture, high humidity in your home, or sagging/falling fiberglass insulation under the floor. We offer free crawl space inspections to assess your situation." },
      { q: "What about existing fiberglass insulation in my crawl space?", a: "We remove it. Old fiberglass insulation in crawl spaces traps moisture, harbors mold, and often falls down over time. Our process includes complete removal and proper disposal before spray foam installation." },
    ],
    relatedSlugs: ["residential-insulation", "attic-insulation"],
  },
  {
    slug: "attic-insulation",
    title: "Attic Spray Foam Insulation in Pittsburgh",
    shortTitle: "Attic Insulation",
    icon: "Layers",
    description: "Stop heat from escaping through your roof. Professional attic spray foam insulation for maximum energy savings.",
    hero: "Your attic is the #1 source of energy loss in your home. Heat rises — and without proper insulation, it goes straight through your roof. Spray foam in your attic creates an impenetrable thermal barrier that keeps your home comfortable and your energy bills low.",
    benefits: [
      "Reduce heat loss through the roof by up to 90%",
      "Eliminate ice dams in winter",
      "Make attic spaces usable year-round",
      "Prevent moisture and condensation damage",
      "Dramatically reduce HVAC runtime",
      "One-day installation for most homes",
    ],
    features: [
      "Roof deck insulation (unvented attic)",
      "Attic floor insulation (vented attic)",
      "Gable end and soffit sealing",
      "Attic bypass air sealing (plumbing, wiring, HVAC)",
      "Knee wall insulation for bonus rooms",
      "Thermal imaging verification",
    ],
    content: `In a typical Pittsburgh home, 25-40% of heating and cooling energy escapes through the attic. It's the single biggest opportunity to improve your home's energy efficiency.

**Two approaches to attic insulation:**

**Unvented (hot roof)** — Spray foam is applied directly to the underside of the roof deck, transforming your attic into conditioned space. This is the premium approach. It makes attic spaces usable, protects HVAC equipment in the attic, and eliminates ice dams. Closed-cell foam provides R-30+ in just 5 inches.

**Vented attic** — Spray foam is applied to the attic floor, sealing all air bypasses (plumbing penetrations, electrical boxes, duct chases, top plates). This is the most cost-effective approach when the attic doesn't need to be conditioned.

Both approaches dramatically outperform fiberglass batts because spray foam seals air leaks AND insulates simultaneously. Fiberglass alone does not stop air movement — which is why you can have R-38 fiberglass in your attic and still have ice dams and high energy bills.

**Ice dams are a Pittsburgh epidemic.** They form when heat escaping through an under-insulated attic melts snow on the roof, which refreezes at the eaves. Spray foam stops this cycle by keeping attic temperatures consistent — no more heat reaching the roof deck.`,
    faqs: [
      { q: "Open-cell or closed-cell for attic insulation?", a: "For roof deck applications, we typically recommend closed-cell foam for its higher R-value, moisture resistance, and structural benefits. For attic floor applications, open-cell is often the better value — it provides excellent insulation and air sealing at a lower cost per square foot." },
      { q: "Do I need to remove old insulation before spray foam?", a: "For roof deck applications, we apply directly to the clean roof deck — no removal needed. For attic floor applications, we often apply spray foam over existing insulation after sealing all air bypasses. In some cases, removal of old, damaged, or contaminated insulation is recommended." },
      { q: "Will spray foam in my attic affect my roof warranty?", a: "Closed-cell spray foam applied to the underside of the roof deck does not affect most roof warranties because it does not contact the roofing material from the exterior. However, it does change the attic from vented to unvented, which some roofing manufacturers have specific guidelines for. We review this with you before installation." },
    ],
    relatedSlugs: ["residential-insulation", "crawl-space-insulation"],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
