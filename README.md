# retr0x — Personal Landing Page

Personal portfolio and landing page for **retr0x**, a self-taught creative technologist focused on AI tooling, web design, code review, and security.

Built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

---

## Stack

- **Framework** — Next.js 15 (App Router)
- **Styling** — Tailwind CSS v4 + custom CSS (neon/cyberpunk theme)
- **Animations** — Framer Motion
- **Icons** — Lucide React
- **Font** — JetBrains Mono / Share Tech Mono

---

## Sections

| Section | Status | Notes |
|---|---|---|
| Hero | ✅ Live | HeroGlitch component — per-character hacker decode effect |
| About | ✅ Live | Skills matrix, experience log |
| Projects | ✅ Live | Stack tags + status badges (SHIPPED / IN PROGRESS / OPEN SOURCE). Code / Live Demo links commented out — uncomment when projects are deployed |
| Blog | 🚧 Hidden | Placeholder posts — replace with real content or CMS. Re-enable by uncommenting in `page.tsx` and `Navigation.tsx` |
| Contact | ✅ Live | Form is simulated — wire up to a real endpoint (Resend, Formspree, etc.) |

---

## TODO

- [ ] Wire up contact form to a real email service
- [ ] Add real project links (uncomment Code / Live Demo in `Projects.tsx`)
- [ ] Replace blog placeholder posts with real content (re-enable in `page.tsx` and `Navigation.tsx` when ready)
- [ ] Add GitHub and Twitter profile URLs
- [ ] Add favicon / OG image
- [ ] Deploy to Vercel

---

## Project Links (when ready)

To re-enable the Code and Live Demo buttons on the Projects section, open `app/components/Projects.tsx` and uncomment the `{/* Links — commented out until projects are live */}` block at the bottom of each project card.

---

## Dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
