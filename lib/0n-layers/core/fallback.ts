/**
 * Layer 0: CORE — Fallback content with EcoSpray's ACTUAL hardcoded data.
 * Serves as the CMS "designed around the existing site" pattern.
 * Data extracted from hero.tsx, services.tsx, testimonials.tsx, footer.tsx.
 */

export const FALLBACK_DATA: Record<string, Record<string, string>[]> = {
  site_config: [
    { key: 'business_name', value: 'EcoSpray Solutions' },
    { key: 'tagline', value: "Pittsburgh's Spray Foam Experts" },
    { key: 'primary_color', value: '#22c55e' },
    { key: 'contact_email', value: 'info@ecospraysolutions.com' },
    { key: 'contact_phone', value: '(412) 555-1234' },
    { key: 'address', value: 'Murrysville, PA — Serving Pittsburgh & Western PA' },
    { key: 'social_facebook', value: '' },
    { key: 'social_instagram', value: '' },
    { key: 'license_number', value: 'PA License #123456' },
    { key: 'hours', value: 'Mon-Fri: 8am-6pm' },
    { key: 'service_area', value: 'Murrysville, Pittsburgh, Monroeville, Export, Greensburg, Irwin, North Huntingdon, Delmont' },
    { key: 'analytics_id', value: '' },
    { key: 'consent_mode', value: 'essential' },
    { key: 'setup_complete', value: 'false' },
  ],

  // -- EcoSpray Stats (from hero.tsx) --
  stats: [
    { id: '1', value: '500+', label: 'Projects Completed', order: '1' },
    { id: '2', value: '50%', label: 'Avg. Energy Savings', order: '2' },
    { id: '3', value: '4.9\u2605', label: 'Customer Rating', order: '3' },
    { id: '4', value: '10+', label: 'Years Experience', order: '4' },
  ],

  // -- EcoSpray Services (from services.tsx) --
  services: [
    {
      id: '1',
      title: 'Residential Insulation',
      description: 'Complete home insulation solutions including attics, walls, basements, and crawl spaces.',
      icon: 'Home',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
      color: 'from-green-500 to-emerald-600',
      features: 'Attic Insulation,Wall Cavities,Basement Sealing,Crawl Spaces',
      order: '1',
    },
    {
      id: '2',
      title: 'Commercial Insulation',
      description: 'Energy-efficient insulation for offices, warehouses, and commercial buildings.',
      icon: 'Building2',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
      color: 'from-blue-500 to-cyan-600',
      features: 'Office Buildings,Retail Spaces,Warehouses,Industrial',
      order: '2',
    },
    {
      id: '3',
      title: 'New Construction',
      description: 'Partner with builders for superior insulation in new homes and buildings.',
      icon: 'Warehouse',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
      color: 'from-orange-500 to-amber-600',
      features: 'Builder Programs,Code Compliance,Custom Solutions,Tight Deadlines',
      order: '3',
    },
    {
      id: '4',
      title: 'Energy Audits',
      description: 'Comprehensive energy assessments to identify opportunities for improvement.',
      icon: 'ClipboardCheck',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      color: 'from-purple-500 to-violet-600',
      features: 'Thermal Imaging,Blower Door Tests,Detailed Reports,ROI Analysis',
      order: '4',
    },
  ],

  // -- EcoSpray Testimonials (from testimonials.tsx) --
  testimonials: [
    {
      id: '1',
      name: 'Mike & Sarah Johnson',
      role: 'Homeowners',
      content: 'Our heating bills dropped by 40% after EcoSpray insulated our attic. The crew was professional, clean, and finished in one day. Highly recommend!',
      rating: '5',
      project: 'Attic Insulation',
      location: 'Murrysville, PA',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
      order: '1',
    },
    {
      id: '2',
      name: 'Tom Reynolds',
      role: 'Commercial Property Owner',
      content: 'As a commercial property owner, I was skeptical about the investment. After seeing the energy savings in my first quarter, I had them do all three of my buildings.',
      rating: '5',
      project: 'Commercial Buildings',
      location: 'Pittsburgh, PA',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
      order: '2',
    },
    {
      id: '3',
      name: 'Jennifer Martinez',
      role: 'Homeowner',
      content: 'We had terrible drafts in our 1920s home. EcoSpray sealed everything up and now our home is comfortable year-round. The difference is incredible.',
      rating: '5',
      project: 'Whole Home Retrofit',
      location: 'Monroeville, PA',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
      order: '3',
    },
  ],

  // -- Standard CMS Pages --
  pages: [
    {
      id: '1',
      title: 'Home',
      slug: 'home',
      content: '<h1>Pittsburgh\'s Spray Foam Experts</h1><p>Professional insulation for homes and businesses. Lower energy costs, improved comfort, and lasting protection for the greater Pittsburgh area.</p>',
      meta_description: "EcoSpray Solutions — Pittsburgh's trusted spray foam insulation experts. Save up to 50% on energy bills.",
      status: 'published',
      updated_at: new Date().toISOString(),
    },
    {
      id: '2',
      title: 'About',
      slug: 'about',
      content: '<h1>About EcoSpray Solutions</h1><p>With over 10 years of experience and 500+ completed projects, we are Pittsburgh\'s trusted spray foam insulation experts. Licensed, insured, and Energy Star certified.</p>',
      meta_description: 'Learn about EcoSpray Solutions — 10+ years serving Pittsburgh and Western PA.',
      status: 'published',
      updated_at: new Date().toISOString(),
    },
    {
      id: '3',
      title: 'Contact',
      slug: 'contact',
      content: '<h1>Get Your Free Quote</h1><p>Fill out the form below and we\'ll get back to you within 24 hours with a detailed estimate.</p>',
      meta_description: 'Contact EcoSpray Solutions for a free spray foam insulation quote in Pittsburgh and Western PA.',
      status: 'published',
      updated_at: new Date().toISOString(),
    },
  ],

  blog_posts: [
    {
      id: '1',
      title: 'How Spray Foam Insulation Cuts Energy Bills by 50%',
      slug: 'spray-foam-energy-savings',
      content: '<h2>The Science Behind the Savings</h2><p>Spray foam insulation creates an airtight seal that traditional insulation simply cannot match. By expanding to fill every crack and crevice, it eliminates the drafts and air leaks that account for up to 40% of energy loss in typical homes.</p><h3>Open-Cell vs Closed-Cell</h3><p>Open-cell foam is ideal for interior walls and attics, providing excellent sound dampening. Closed-cell foam offers higher R-value per inch and acts as a vapor barrier, perfect for basements and crawl spaces.</p>',
      excerpt: 'Learn how spray foam insulation creates an airtight seal that can cut your energy bills in half.',
      image_id: '',
      published_at: new Date().toISOString(),
      status: 'published',
    },
    {
      id: '2',
      title: '5 Signs Your Home Needs Better Insulation',
      slug: 'signs-home-needs-insulation',
      content: '<h2>Is Your Home Telling You Something?</h2><p>Many homeowners live with poor insulation without realizing it. Here are five common signs that your home could benefit from a spray foam upgrade.</p><h3>1. Uneven Temperatures</h3><p>If some rooms are always too hot or too cold, your insulation may have gaps.</p><h3>2. High Energy Bills</h3><p>A sudden increase in heating or cooling costs often points to insulation failure.</p><h3>3. Drafts Near Windows and Doors</h3><p>Air leaks around frames are a classic sign of inadequate sealing.</p><h3>4. Ice Dams in Winter</h3><p>Ice buildup on your roof edge means heat is escaping through your attic.</p><h3>5. Pest Problems</h3><p>Gaps in insulation create entry points for insects and rodents.</p>',
      excerpt: 'Uneven temperatures, high bills, and drafts are all signs your insulation needs an upgrade.',
      image_id: '',
      published_at: new Date().toISOString(),
      status: 'published',
    },
  ],

  navigation: [
    { id: '1', label: 'Home', href: '/', order: '1', parent_id: '', visible: 'true' },
    { id: '2', label: 'Services', href: '#services', order: '2', parent_id: '', visible: 'true' },
    { id: '3', label: 'Benefits', href: '#benefits', order: '3', parent_id: '', visible: 'true' },
    { id: '4', label: 'Process', href: '#process', order: '4', parent_id: '', visible: 'true' },
    { id: '5', label: 'Contact', href: '/contact', order: '5', parent_id: '', visible: 'true' },
  ],

  media_log: [],

  contacts: [
    {
      id: '1',
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane@example.com',
      phone: '(412) 555-2222',
      company: '',
      tags: 'lead,residential',
      source: 'contact_form',
      created_at: new Date().toISOString(),
    },
    {
      id: '2',
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      phone: '(412) 555-3333',
      company: 'Reynolds Properties',
      tags: 'lead,commercial',
      source: 'referral',
      created_at: new Date().toISOString(),
    },
  ],

  leads: [
    {
      id: '1',
      contact_id: '1',
      stage: 'qualified',
      value: '3500',
      notes: 'Interested in attic insulation, 2500 sq ft home',
      assigned_to: '',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],

  pipeline: [
    { id: '1', name: 'New Quote Request', order: '1', color: '#6b7280' },
    { id: '2', name: 'Site Visit Scheduled', order: '2', color: '#3b82f6' },
    { id: '3', name: 'Quote Sent', order: '3', color: '#8b5cf6' },
    { id: '4', name: 'Negotiating', order: '4', color: '#f59e0b' },
    { id: '5', name: 'Job Booked', order: '5', color: '#22c55e' },
    { id: '6', name: 'Lost', order: '6', color: '#ef4444' },
  ],

  activities: [
    {
      id: '1',
      contact_id: '1',
      type: 'form_submission',
      description: 'Submitted quote request form — residential attic insulation',
      created_at: new Date().toISOString(),
    },
  ],

  tags: [
    { id: '1', name: 'lead', color: '#3b82f6' },
    { id: '2', name: 'customer', color: '#22c55e' },
    { id: '3', name: 'residential', color: '#8b5cf6' },
    { id: '4', name: 'commercial', color: '#f59e0b' },
    { id: '5', name: 'new-construction', color: '#f97316' },
    { id: '6', name: 'referral', color: '#06b6d4' },
  ],

  // Agent learning tabs start empty
  page_experiments: [],
  page_ai_learnings: [],
  content_calendar: [],
  blog_ai_learnings: [],
  crm_ai_learnings: [],
  compliance_ai_learnings: [],
  orchestrator_learnings: [],
  '0n_events': [],
}
