# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (localhost:3000)
npm run build    # production build
npm run start    # serve production build
```

No linter or test runner is configured.

## Architecture

**Next.js 16 App Router** with React 19. All routes live in `app/` as `page.js` files. The root layout (`app/layout.js`) wraps every page with `<Navbar>`, `<main>`, `<Footer>`, and `<Analytics>` (Vercel Analytics).

**Pages:** `app/page.js` (home), `app/about/page.js`, `app/services/page.js`, `app/contact/page.js`. Pages are Server Components by default and export a `metadata` object for SEO.

**Components** (`app/components/`):
- `animations.js` — Framer Motion wrappers (`HeroAnimate`, `FadeUp`, `FadeIn`, `ScaleIn`, `StaggerContainer` + `StaggerItem`). All are `'use client'`. `HeroAnimate` fires on mount; the rest trigger `whileInView` with `once: true`. Always mark consumer files `'use client'` if they import these.
- `Navbar.js` — sticky, responsive nav with mobile hamburger. Uses `usePathname` for active link highlighting. `'use client'`.
- `Footer.js` — Server Component; static links only.
- `ContactForm.js` — controlled form with `setTimeout`-simulated submission (no real backend). `'use client'`.
- `EbookForm.js` — same pattern as ContactForm (simulated, no real backend). `'use client'`.

**Styling:** Tailwind CSS v4 via `@tailwindcss/postcss`. No `tailwind.config.js` — configuration is handled in CSS. Color palette is `slate-*` (backgrounds, text) + `emerald-*` (brand/accent).

**Animation pattern:** Wrap sections in `<FadeUp>` or `<FadeIn>` for scroll-triggered reveals. Use `<StaggerContainer>` + `<StaggerItem>` for grids/lists so items stagger in one by one. Use `<HeroAnimate delay={n}>` with increasing `delay` values for hero sequencing.

**Forms:** Both forms are UI-only — submissions are faked with `setTimeout`. Real backend integration (email delivery for ebook, CRM/notification for contact) is not yet implemented.

**Analytics:** `@vercel/analytics` is installed. `<Analytics />` is rendered in the root layout and activates automatically on Vercel deployments.
