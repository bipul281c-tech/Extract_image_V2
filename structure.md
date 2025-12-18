# ExtractPics - Frontend Designer Guide

## 🎯 Project Overview
**ExtractPics** is a web-based image extraction tool that allows users to extract/download images from any website URL.

**Live Features:**
- Single URL & Batch Mode (up to 5 URLs)
- Quick Scan & Deep Scan modes
- Filter by format/size/source
- Bulk download as ZIP
- SEO landing pages for various keywords

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | **Next.js 16** (React 19) |
| Styling | **Tailwind CSS 4** |
| UI Library | **Radix UI** + **shadcn/ui** |
| Icons | **Lucide React** |
| Fonts | **Geist**, Geist Mono |

---

## 🎨 Design System

### Brand Colors
```
Primary Navy:     #11224E (text, headings)
Primary Orange:   #F87B1B (CTA buttons, highlights)
Background:       #EEEEEE (light gray)
Selection:        #CBD99B (green tint)
```

### Button States
- **Primary CTA**: `bg-[#F87B1B]` → hover: `bg-[#e06c15]`
- **Active Toggle**: Orange `#F87B1B` or Green `#22c55e`
- **Inactive Toggle**: Gray background with slate text

### Typography
- Headings: `text-[#11224E]` with `font-medium`
- Body: `text-slate-500` or `text-slate-600`
- Labels: `text-xs` with uppercase tracking

---

## 📁 Key Components

```
components/
├── navbar.tsx          → Sticky nav with Tools dropdown
├── search-section.tsx  → URL input + mode toggles + progress bar
├── filters-sidebar.tsx → Format/size/source filters
├── image-grid.tsx      → Image results + selection + ZIP download
├── image-card.tsx      → Individual image preview card
├── footer.tsx          → Site footer
├── seo-content.tsx     → Homepage SEO sections
├── faq-section.tsx     → FAQ with schema markup
├── landing-hero.tsx    → Hero for SEO landing pages
└── ui/                 → shadcn primitives (buttons, tooltips, etc.)
```

---

## 📄 Page Structure

### Homepage (`app/page.tsx`)
1. **Navbar** - Logo + Tools dropdown + About/Help/Pricing
2. **Hero/Search Section** - Title + URL input + mode toggles
3. **Results Grid** - Filters sidebar (3 cols) + Image grid (9 cols)
4. **SEO Content** - Features & How it works
5. **FAQ Section** - Accordion with schema
6. **Footer**

### SEO Landing Pages (`app/[keyword]/page.tsx`)
- 20+ pages targeting different keywords
- Each uses `LandingHero` + `LandingFAQ` components
- Same extraction functionality as homepage

---

## 🧩 Core UI Patterns

### Toggle Button Groups
```tsx
// Two-option toggle (e.g., Single URL / Batch Mode)
<div className="inline-flex items-center bg-gray-100 rounded-lg p-1 border border-gray-200">
  <button className="px-3 py-1.5 rounded-md text-xs font-medium">
    Option 1
  </button>
  <button className="bg-[#F87B1B] text-white shadow-sm">
    Option 2 (Active)
  </button>
</div>
```

### Input with Button (Search Bar)
```tsx
<div className="flex items-center rounded-lg border border-gray-200 bg-white p-1">
  <input className="h-10 w-full bg-transparent px-3 text-sm" />
  <button className="h-9 bg-[#F87B1B] rounded-md px-4 text-white">
    Extract
  </button>
</div>
```

### Progress Bar (Loading State)
- Gradient: `from-[#F87B1B] via-[#f59e0b] to-[#F87B1B]`
- Animated shimmer effect
- Shows rotating status messages

---

## 📱 Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| Mobile | Single column, filters collapse |
| `sm:` (640px) | Nav items visible |
| `lg:` (1024px) | 12-col grid: 3 filters + 9 results |

---

## ⚡ What Needs Improvement

1. **Mobile Experience** - Filters UX on small screens
2. **Dark Mode** - CSS variables exist but not fully implemented
3. **Animations** - More micro-interactions on hover/click
4. **Empty States** - Better illustrations when no results
5. **Loading Skeletons** - Replace spinners with skeleton loading

---

## 🔗 Key Files to Review

| File | Purpose |
|------|---------|
| `app/page.tsx` | Homepage layout |
| `app/globals.css` | Tailwind config + CSS variables |
| `styles/globals.css` | Design tokens (oklch colors) |
| `components/search-section.tsx` | Main tool interface |
| `components/image-grid.tsx` | Results display |
| `components/navbar.tsx` | Navigation |

---

## 📋 Quick Commands

```bash
npm run dev     # Start dev server (http://localhost:3000)
npm run build   # Production build
npm run lint    # Check code quality
```

---

*Last Updated: December 2024*
