# EcoSpray Solutions

Modern, award-winning website for a spray foam insulation company in Pittsburgh, PA.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)

## Features

- Dark theme with green gradient accents
- Mobile-responsive design
- Modern UI with shadcn/ui components
- Contact form with quote request
- SEO optimized for local search

## Pages

- **/** - Homepage with hero, services, benefits, process, testimonials
- **/contact** - Quote request form with service area info

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

No environment variables required for basic functionality.

Optional:
```env
# Form submission endpoint (e.g., Formspree)
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxx

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Crypto-Goatz/ecospray-solutions)

## Project Structure

```
ecospray-solutions/
├── app/
│   ├── layout.tsx          # Root layout with navbar
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   └── contact/
│       └── page.tsx        # Contact/quote form
├── components/
│   ├── navbar.tsx          # Mobile responsive navigation
│   ├── hero.tsx            # Hero section with stats
│   ├── services.tsx        # 4 service cards
│   ├── benefits.tsx        # 6 benefits + why us section
│   ├── process.tsx         # 4-step timeline
│   ├── testimonials.tsx    # Customer reviews
│   ├── cta.tsx             # Call-to-action section
│   ├── footer.tsx          # Site footer
│   └── ui/                 # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── label.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── V0_PROMPT.md            # v0.dev prompt for enhanced version
```

## Upgrading with v0

Want animations and enhanced effects? Use the `V0_PROMPT.md` file:

1. Go to [v0.dev](https://v0.dev)
2. Copy the contents of `V0_PROMPT.md`
3. Paste into v0's prompt
4. Get an upgraded version with:
   - Animated gradient backgrounds
   - Scroll-triggered animations
   - Micro-interactions
   - Framer Motion effects
   - Particle systems

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React

## Customization

### Colors
Edit `app/globals.css` to change the color scheme:
```css
:root {
  --primary: 142 76% 36%;  /* Green */
}
```

### Content
All content is in the component files. Update:
- `components/hero.tsx` - Main headline and CTAs
- `components/services.tsx` - Service offerings
- `components/benefits.tsx` - Benefits and features
- `components/testimonials.tsx` - Customer reviews
- `components/footer.tsx` - Contact info

### Contact Info
Search and replace these placeholders:
- `(412) 555-1234` - Phone number
- `info@ecospraysolutions.com` - Email
- `Murrysville, PA` - Location

## License

MIT
