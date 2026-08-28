# QA Engineer Portfolio

A minimal, professional, single-page portfolio for a junior/aspiring QA Engineer — built with React, Vite, and Tailwind CSS. Light/dark mode, accessible markup, and content kept honest (no invented metrics, companies, or certifications).

## Design notes

- **Palette:** off-white paper (`#FAFAF8`) / charcoal ink (`#161819`), with a single teal "signal" accent (`#0D9488`) used for links, highlights, and PASS states. Functional colors (`pass` teal-green, `warn` amber, `fail` red) are separate from the brand accent and only used for test-status indicators.
- **Type:** Space Grotesk (headings), Inter (body), JetBrains Mono (code, tags, status lines) — loaded from Google Fonts in `index.html`.
- **Signature element:** the hero's animated terminal ("live test console") that prints a small test run, including a flagged edge case and a failing test — a direct visual expression of "I think about how it can fail."

## 1. Project structure

```
src/
├── components/       # One component per section, all presentational
├── data/             # Editable content (experience, skills, projects, case studies)
├── context/          # Theme (light/dark) provider
├── App.jsx
├── main.jsx
└── index.css
public/
├── favicon.svg
├── robots.txt
└── resume.pdf        # ← add your real resume here (see below)
```

## 2. Installation

```bash
npm install
```

## 3. Development

```bash
npm run dev
```

Visit the printed local URL (typically `http://localhost:5173`).

## 4. Production build

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The static site is output to `dist/`.

## 5. Replacing personal information

Almost all editable content lives in `src/data/` — you shouldn't need to touch component files for basic edits:

| File | Contains |
|---|---|
| `src/data/experience.js` | Job history, bullet points, tags, and the education block |
| `src/data/skills.js` | Skill categories and the toolbox list |
| `src/data/projects.js` | QA project case cards |
| `src/data/caseStudies.js` | Bug → root cause → fix verification case studies |

Additional placeholders to update directly in components:

- **Name/monogram:** `src/components/Navbar.jsx` (`SM` logo)
- **Footer name/year:** `src/components/Footer.jsx`
- **Contact details:** `src/components/Contact.jsx` and `src/components/Footer.jsx` — replace `your.email@example.com`, `linkedin.com/in/yourusername`, `github.com/yourusername`
- **SEO/OG metadata:** `index.html` (`<title>`, meta description, Open Graph tags)
- **Education:** `src/data/experience.js` (`education` object) — currently uses bracketed placeholders like `[Your University]`

## 6. Adding your resume

Place your resume file at:

```
public/resume.pdf
```

Both "Download Resume" links (hero and the dedicated resume CTA section) already point to `/resume.pdf` — no code changes needed. If the file isn't present yet, the links simply won't resolve; nothing else in the app depends on it.

## 7. Connecting the contact form

The contact form validates input client-side but does **not** send email yet — there's no backend wired up, and the UI is honest about that after submission. To make it functional, open `src/components/Contact.jsx` and replace the `console.info(...)` block inside `handleSubmit` with a real call to one of:

- [Formspree](https://formspree.io/) — POST the form values to your Formspree endpoint
- [EmailJS](https://www.emailjs.com/) — call `emailjs.send(...)` with your service/template IDs
- Your own API route — `fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })`

## 8. Deploying

### Vercel
```bash
npm install -g vercel
vercel
```
Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --build
```
Build command: `npm run build`. Publish directory: `dist`.

Both platforms auto-detect Vite projects if you connect the repo via their dashboard instead of the CLI.

## 9. Content honesty checklist

Before publishing, double check:
- [ ] Real name, email, LinkedIn, GitHub added
- [ ] Resume PDF added (or the link intentionally left as-is)
- [ ] University/degree/year filled in (`src/data/experience.js`)
- [ ] No invented metrics, certifications, or companies introduced
- [ ] Contact form connected to a real email service before going live
