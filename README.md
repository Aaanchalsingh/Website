# AANCHAL_SINGH // Kinetic Portfolio

A high-fidelity, single-page developer portfolio built with Next.js 15, React 19, and Framer Motion. Features a distinctive terminal-inspired aesthetic with spring-physics animations, dark/light theming, and a responsive layout.

[View it on Netlify](https://aanchalsinghresume.netlify.app/)

![Next.js](https://img.shields.io/badge/Next.js-15.3-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | Next.js 15 (App Router)             |
| UI          | React 19, TypeScript 5.8            |
| Styling     | Tailwind CSS 4, CSS custom properties |
| Animation   | Motion (Framer Motion) 12           |
| Theming     | next-themes                         |
| Icons       | Lucide React                        |
| Fonts       | Space Grotesk, Manrope (Google Fonts) |

## Sections

- **Hero** — Animated headline, status badge, stat pills, and a floating SVG graphic
- **Tech Stack** — Interactive icon grid (Java, Spring Boot, React, Docker, MongoDB, MySQL, Tailwind)
- **Experience** — Professional timeline with role highlights
- **Projects** — Showcase cards for URL Shortener, Task Queue Engine, and Style Sprint (e-commerce)
- **Terminal** — Contact form styled as a macOS terminal window
- **Mobile Nav** — Bottom sticky navigation for small screens

## Features

- Dark (purple/neon-yellow) and light (violet/cyan) theme with system preference detection
- Scroll-triggered animations and staggered fade-ins via Framer Motion
- Glass morphism panels with backdrop blur
- Dot grid background pattern on hero
- Downloadable resume PDF
- Fully responsive (mobile-first)

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
git clone <repo-url>
cd Portfolio
npm install
```

### Environment Variables

Copy the example env file and fill in values as needed:

```bash
cp .env.example .env.local
```

| Variable         | Description                    | Required |
| ---------------- | ------------------------------ | -------- |
| `GEMINI_API_KEY` | Google Gemini AI API key       | No       |
| `APP_URL`        | Deployment URL                 | No       |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with ThemeProvider
│   ├── page.tsx            # Homepage (all sections)
│   └── globals.css         # Theme tokens, animations, custom classes
├── components/
│   ├── Hero.tsx            # Landing section
│   ├── Navbar.tsx          # Top navigation
│   ├── TechStack.tsx       # Technology grid
│   ├── Experience.tsx      # Work experience
│   ├── Projects.tsx        # Project cards
│   ├── Terminal.tsx        # Contact form
│   ├── Footer.tsx          # Footer
│   ├── MobileNav.tsx       # Mobile bottom nav
│   ├── ThemeProvider.tsx   # next-themes wrapper
│   └── ThemeToggle.tsx     # Dark/light toggle
├── public/
│   └── resume.pdf          # Downloadable resume
└── lib/
    └── site-data.ts        # Site data utilities
```

## Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start dev server         |
| `npm run build` | Production build         |
| `npm start`     | Run production server    |
| `npm run lint`  | Lint with Next.js ESLint |

## Deployment

The project is configured for deployment on **Google Cloud Run** or **Vercel**. The `next.config.mjs` includes output file tracing optimizations for containerized deployments.

## License

&copy; 2024 Aanchal Singh
