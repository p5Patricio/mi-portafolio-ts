# AGENTS.md — mi-portafolio-ts

Personal portfolio website for Patricio (Pato), a software engineering student, deployed to [portafolio.patodev.com](https://portafolio.patodev.com) via GitHub Pages. Built with React 18 + TypeScript (Create React App), featuring dark/light theming, ES/EN i18n, WebGL particle effects, and Framer Motion animations.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript (CRA) |
| Routing | React Router DOM 7 — HashRouter |
| Internationalization | i18next + react-i18next (ES/EN) |
| Animations | Framer Motion |
| WebGL Effects | OGL (particle system) |
| Icons | Lucide React |
| Styling | CSS Modules (co-located) + CSS variables |
| Deployment | GitHub Pages (`gh-pages` branch) |
| CI/CD | GitHub Actions (push to `main` → build → deploy) |
| Analytics | Google Apps Script → Google Sheets |

---

## Architecture

```
src/
├── App.tsx                  - Root component: splash screen, analytics (runs once/session)
├── AppContent.tsx           - Route definitions (all 5 routes)
├── i18n.ts                  - ALL translations live here (ES + EN keys)
├── index.tsx                - Entry: HashRouter, ThemeProvider wrapping
├── assets/                  - Logo images (dark/light variants)
├── components/              - Reusable UI components
│   ├── Particles.tsx        - WebGL particle system (OGL)
│   ├── TextPressure.tsx     - Text pressure animation
│   ├── ClickSpark.tsx       - Click spark effect
│   ├── Navbar.tsx           - Navigation + language selector
│   ├── ProjectCard.tsx      - Reusable project card
│   ├── LanguageSelector.tsx - Language toggle (ES/EN)
│   ├── TechIcon.tsx         - Technology icon display
│   ├── ThemeToggleButton.tsx- Dark/light toggle
│   └── SplashScreen.tsx     - Initial loading screen
├── context/
│   └── ThemeContext.tsx     - Dark/light theme state + CSS class on <body>
├── hooks/
│   └── useIntersectionObserver.ts - Scroll-based visibility detection
└── pages/                   - One file per route
    ├── Home.tsx             - Landing / hero
    ├── Proyectos.tsx        - Projects showcase
    ├── Servicios.tsx        - Services offered
    ├── SobreMi.tsx          - About me
    └── Contacto.tsx         - Contact + social links
```

---

## Critical Conventions

1. **HashRouter is non-negotiable.** GitHub Pages does not support browser history API. Never switch to `BrowserRouter` or use `createBrowserRouter`.
2. **All user-facing text goes through i18next.** No hardcoded strings. Add keys to `src/i18n.ts` first, then use `useTranslation()` in the component.
3. **TypeScript strict mode.** Always type props, state, and return values explicitly. No `any`.
4. **Co-locate CSS with components.** Each `Component.tsx` has a matching `Component.css` in the same directory.
5. **New pages go in `src/pages/`.** New reusable UI goes in `src/components/`.
6. **Theme changes go through `ThemeContext`.** Never toggle dark/light via inline styles or local state. Read/write via the context.
7. **Never push to `gh-pages` directly.** CI/CD handles deployment automatically on push to `main`.
8. **Do not run a build after making changes** unless explicitly instructed.

---

## Key Patterns

### Theme System

- Default: dark (`#040316` bg, `#fff` text, `#ff6969` primary)
- Light: `#f8feff` bg, `#121212` text, `#1e6ed7` primary
- Theme is applied as a CSS class on `<body>`, controlled by `ThemeContext`
- Use CSS variables in stylesheets — never hardcode color values

```tsx
// Reading theme
const { theme, toggleTheme } = useTheme();

// In CSS
.myComponent {
  background: var(--bg-color);
  color: var(--text-color);
}
```

### i18n

- Translations defined in `src/i18n.ts` under `es` and `en` namespaces
- Always add both `es` and `en` keys together
- Usage in components:

```tsx
const { t } = useTranslation();
return <h1>{t('home.title')}</h1>;
```

### Routing

- All routes defined in `AppContent.tsx`
- Available routes: `/`, `/proyectos`, `/servicios`, `/sobre-mi`, `/contacto`
- Responsive breakpoint: `768px`

### Analytics

- Visit tracked once per session via `useRef` flag in `App.tsx`
- Posts to a Google Apps Script endpoint → logs to Google Sheets
- Do not duplicate or move this logic

---

## What NOT To Do

- Do NOT use `BrowserRouter` — breaks GitHub Pages routing entirely
- Do NOT hardcode user-visible text — always use `t('key')` from i18next
- Do NOT add theme logic outside of `ThemeContext` — causes desync
- Do NOT push to `gh-pages` branch manually — CI/CD owns that branch
- Do NOT use `any` type — defeats TypeScript strict mode
- Do NOT create a new CSS file in a different directory for a component that already has one co-located
- Do NOT add new routes without updating `AppContent.tsx`
- Do NOT run `npm run build` after changes unless explicitly asked

---

## Local Development Commands

```bash
# Install dependencies
npm install

# Start dev server
npm start

# Run tests
npm test

# Build for production (only when explicitly needed)
npm run build

# Deploy to GitHub Pages (handled by CI — avoid running manually)
npm run deploy
```
