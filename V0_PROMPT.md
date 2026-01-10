# EcoSpray Solutions - v0 App Builder Prompt

## Instructions for v0
Copy everything below the line into v0.dev to generate an award-winning spray foam insulation website.

---

# BUILD PROMPT

Build a modern, award-winning Next.js 15 website for "EcoSpray Solutions" - a spray foam insulation company in Pittsburgh, PA. The design should be dark-themed with green accents, featuring premium animations, micro-interactions, and a polished UI that could win design awards.

## Tech Stack Requirements
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Lucide React icons
- shadcn/ui components

## Design System

### Colors
```css
--background: 240 10% 4% (near black)
--foreground: 0 0% 98% (white)
--primary: 142 76% 36% (green)
--primary-light: 142 70% 50%
--accent: 152 80% 40% (emerald)
```

### Typography
- Font: Inter or Geist Sans
- Headings: Bold, with gradient text effects
- Body: Regular weight, zinc-400 for secondary text

## Animated Background Effects

### 1. Floating Particles Background
Create a canvas-based particle system with:
- 50-100 small green glowing dots
- Slow, organic floating movement
- Subtle parallax on mouse move
- Particles connect with lines when close (like a network)

```tsx
// Particle component with Framer Motion
const FloatingParticles = () => {
  // Canvas-based particle system
  // Green glowing dots (#22c55e at 30% opacity)
  // Slow sine-wave movement
  // Mouse parallax effect
}
```

### 2. Gradient Orb Background
- Large blurred gradient orbs that slowly move
- Colors: green-500/20, emerald-500/10
- Subtle pulsing animation
- Follows scroll position slightly

### 3. Grid Pattern Overlay
- Subtle grid lines at 5% opacity
- Animated gradient mask that moves
- Creates depth without distraction

## Page Sections with Animations

### Hero Section
```tsx
// Staggered entrance animations
- Badge slides down with bounce (delay: 0)
- H1 fades up with blur (delay: 0.2)
- Subtitle fades up (delay: 0.4)
- CTAs scale in with spring (delay: 0.6)
- Stats bar slides up from bottom (delay: 0.8)

// Continuous animations
- Badge has subtle pulse glow
- CTA buttons have shimmer effect on hover
- Background orbs float slowly
```

**Hero Content:**
- Badge: "Save Up to 50% on Energy Bills" with Zap icon
- H1: "Pittsburgh's **Spray Foam Insulation** Experts" (gradient on bold part)
- Subtitle: "Professional spray foam insulation for homes and businesses in Murrysville, PA and the greater Pittsburgh area. Lower energy costs, improved comfort, and lasting protection."
- CTA 1: "Get Your Free Quote" (green gradient button with arrow)
- CTA 2: "Calculate Savings" (outline button with calculator icon)
- Trust badges: Licensed & Insured | Energy Star Certified | 10+ Years Experience
- Stats: 500+ Projects | 50% Avg Savings | 4.9 Rating | 10+ Years

### Services Section
```tsx
// Scroll-triggered animations
- Section header fades in on scroll
- Cards stagger in from bottom (0.1s delay each)
- Icons have rotate + scale entrance

// Hover interactions
- Card lifts up (translateY: -8px)
- Border glows green
- Icon scales up 1.1x with rotation
- Background gradient intensifies
```

**4 Service Cards:**
1. **Residential Insulation** - Home icon
   - Attic, Wall Cavities, Basement, Crawl Spaces
2. **Commercial Insulation** - Building icon
   - Office, Retail, Warehouses, Industrial
3. **New Construction** - Warehouse icon
   - Builder Programs, Code Compliance, Custom Solutions
4. **Energy Audits** - ClipboardCheck icon
   - Thermal Imaging, Blower Door Tests, ROI Analysis

### Benefits Section
```tsx
// 6 benefit cards in 3x2 grid
// Each card has:
- Icon with animated gradient background
- Stat number that counts up on scroll
- Hover: card glows, stat pulses

// "Why Choose Us" panel
- Checkmarks animate in sequentially
- Green gradient border pulses subtly
```

**6 Benefits:**
1. Energy Savings - 50% Lower Bills
2. Air Sealing - 100% Coverage
3. Moisture Barrier - Zero Moisture
4. Noise Reduction - 80% Quieter
5. Long Lasting - 25+ Years
6. Eco-Friendly - Green Choice

**Why Choose EcoSpray:**
- Locally owned in Murrysville, PA
- Licensed, bonded, fully insured
- Free on-site estimates
- Clean, professional crews
- Lifetime warranty
- Financing available

### Process Section (Timeline)
```tsx
// Horizontal timeline with connecting line
// Line draws itself on scroll (SVG animation)
// Steps appear sequentially as line reaches them
// Each step icon has pulse animation when active
```

**4 Steps:**
1. Free Consultation - Phone icon
2. Energy Assessment - Clipboard icon
3. Professional Installation - Hammer icon
4. Enjoy the Savings - ThumbsUp icon

### Testimonials Section
```tsx
// Cards have subtle floating animation
// Quote icon has typewriter fade-in effect
// Stars twinkle on hover
// Auto-rotating carousel option
```

**4 Testimonials with:**
- Customer name
- Location (Pittsburgh area cities)
- 5-star rating with animated stars
- Project type badge
- Quote text

### CTA Section
```tsx
// Full-width with animated gradient background
// Background: moving gradient mesh
// Pattern overlay with subtle animation
// Buttons have magnetic hover effect
// Phone number has shake animation on hover
```

**Content:**
- "Ready to Save on Energy Bills?"
- Subtext about free quotes
- Two CTAs: Get Quote + Call Now
- Trust badges

### Footer
- Animated logo on hover
- Social icons with pop effect
- Links have underline slide animation
- Copyright with current year

## Micro-Interactions

### Button Hover Effects
```tsx
// Primary buttons
- Scale: 1.02
- Box shadow expands with green glow
- Arrow icon slides right
- Shimmer effect sweeps across

// Outline buttons
- Border color transitions to green
- Background fades in
- Text color transitions
```

### Card Hover Effects
```tsx
- Transform: translateY(-8px)
- Box shadow: large, with green tint
- Border: transitions to green-500/50
- Background: gradient intensifies
- Icon: scales and rotates slightly
```

### Link Hover Effects
```tsx
- Underline slides in from left
- Color transitions to green-400
- Slight lift effect
```

### Form Interactions
```tsx
- Input focus: green ring + label float
- Button loading: spinner + disabled state
- Success: checkmark animation + confetti
- Property type buttons: scale + glow on select
```

## Scroll Animations

### Reveal on Scroll
```tsx
// Use Framer Motion's useInView
- Elements fade up from 20px below
- Opacity 0 -> 1
- Duration: 0.6s
- Stagger children by 0.1s
```

### Parallax Effects
```tsx
- Background orbs move slower than content
- Stats bar has slight parallax
- Section backgrounds shift subtly
```

### Progress Indicators
```tsx
- Scroll progress bar at top (green gradient)
- Section indicators on side (optional)
```

## Mobile Optimizations
- Hamburger menu with slide-in animation
- Touch-friendly tap targets (min 44px)
- Reduced motion for performance
- Simplified particle effects on mobile

## Performance Requirements
- Lazy load below-fold sections
- Optimize animations for 60fps
- Use CSS transforms only (no layout thrashing)
- Preload critical fonts
- Image optimization with next/image

## Environment Variables Needed
```env
# No env vars required for static site
# Optional for form submission:
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxx

# Optional for analytics:
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## File Structure
```
app/
├── layout.tsx
├── page.tsx
├── globals.css
└── contact/
    └── page.tsx
components/
├── ui/ (shadcn components)
├── navbar.tsx
├── hero.tsx
├── services.tsx
├── benefits.tsx
├── process.tsx
├── testimonials.tsx
├── cta.tsx
├── footer.tsx
└── animated-background.tsx
lib/
└── utils.ts
```

## Additional Polish

### Loading States
- Skeleton screens for dynamic content
- Smooth page transitions
- Loading spinner with brand colors

### Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Reduced motion media query respect
- High contrast text ratios

### SEO
- Proper meta tags
- Open Graph images
- Structured data for local business
- Sitemap generation

## Example Component Code

### Animated Background
```tsx
"use client"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-green-500/10 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#22c55e 1px, transparent 1px),
                           linear-gradient(90deg, #22c55e 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  )
}
```

### Shimmer Button
```tsx
"use client"
import { motion } from "framer-motion"

export function ShimmerButton({ children, ...props }) {
  return (
    <motion.button
      className="relative overflow-hidden bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-3 rounded-lg text-white font-medium"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6 }}
      />
    </motion.button>
  )
}
```

### Scroll Reveal
```tsx
"use client"
import { motion } from "framer-motion"

export function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}
```

---

## Summary

Create an EcoSpray Solutions website that:
1. Uses a dark theme (#09090b) with green (#22c55e) accents
2. Features animated gradient orb backgrounds
3. Has scroll-triggered reveal animations
4. Includes micro-interactions on all interactive elements
5. Displays 4 services, 6 benefits, 4-step process, 4 testimonials
6. Has a mobile-responsive navbar with hamburger menu
7. Includes a contact page with quote request form
8. Performs at 60fps with optimized animations
9. Follows accessibility best practices
10. Is SEO-optimized for "spray foam insulation Pittsburgh"

The result should look like an award-winning Awwwards or FWA submission - polished, performant, and delightful to use.
