<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563EB,100:7C3AED&height=220&section=header&text=H%26L%20Software&fontSize=52&fontColor=FFFFFF&animation=fadeIn&fontAlignY=38&desc=Software%20that%20runs%20your%20world&descAlignY=58&descSize=20" alt="H&L Software hero banner" width="100%" />
</p>

<p align="center">
  <a href="https://hnlsoftware.in"><img src="https://img.shields.io/badge/Live%20Site-hnlsoftware.in-2563EB?style=for-the-badge" alt="Live site" /></a>
  <img src="https://img.shields.io/badge/status-phase%201-7C3AED?style=for-the-badge" alt="Phase 1" />
  <img src="https://img.shields.io/badge/license-proprietary-111827?style=for-the-badge" alt="Proprietary license" />
</p>

<h1 align="center">H&L Software</h1>

<p align="center">A modern landing website for H&L Software built using React, Vite and TypeScript.</p>

## ✨ Project Description

H&L Software is a polished, responsive marketing website for a growing software company building trading systems, billing software, mobile tools, and custom workflow solutions.

The current release is Phase 1: a frontend-only public landing website designed for fast iteration and deployment on Cloudflare Pages.

## 🚀 Features

- Responsive UI across desktop, tablet, and mobile
- Modern SaaS landing page experience
- Trading product showcase
- Billing software showcase
- Mobile app showcase
- Fast Vite-powered loading
- SEO-friendly public metadata
- Lazy-loaded routes
- Cloudflare Pages ready

## 🧰 Technology Stack

| Technology              | Purpose                                                                 |
| ----------------------- | ----------------------------------------------------------------------- |
| React                   | Component-based UI                                                      |
| TypeScript              | Type-safe application code                                              |
| Vite                    | Development server and production bundling                              |
| Custom CSS architecture | Global tokens, typography, utilities, animations, and responsive layout |
| Framer Motion           | Entrance and interaction animations                                     |
| Lucide React            | Consistent interface icons                                              |
| React Router            | Public page routing and lazy loading                                    |

## 📁 Folder Structure

```text
Website Development/
├── App/
│   ├── public/              # Public metadata and static assets
│   ├── src/
│   │   ├── Components/      # Components shared by multiple pages
│   │   │   ├── layout/      # Navbar, Footer, and MainLayout
│   │   │   └── ui/          # Button, Card, Container, and Icon primitives
│   │   ├── pages/           # Route-level page modules
│   │   │   └── <Page>/Components/ # Components owned by one page
│   │   ├── styles/          # Global CSS split by responsibility
│   │   ├── types/           # Shared TypeScript types
│   │   ├── hooks/           # Reusable React hooks
│   │   ├── utils/           # Shared utilities
│   │   ├── App.tsx          # Router and application shell
│   │   └── main.tsx         # React entry point
│   ├── index.html           # Vite HTML entry
│   ├── package.json         # App scripts and dependencies
│   └── vite.config.ts       # Vite configuration
├── Assets/                  # Project-level asset workspace
├── Documentation/           # Project documentation and screenshots
├── AGENTS.md                # Local project operating instructions
├── LICENSE.md               # Proprietary license
└── Launch Website Development.cmd
```

<details>
  <summary>Page routes</summary>

| Route        | Page      |
| ------------ | --------- |
| `/`          | Home      |
| `/products`  | Products  |
| `/solutions` | Solutions |
| `/pricing`   | Pricing   |
| `/about`     | About     |
| `/contact`   | Contact   |

</details>

## 🛠️ Getting Started

All application commands run from the `App/` directory.

### Installation

```bash
cd App
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

### Quality Checks

```bash
npm run lint
npm run format:check
```

## ☁️ Deployment

### Cloudflare Pages

| Setting          | Value            |
| ---------------- | ---------------- |
| Framework preset | Vite             |
| Root directory   | `App`            |
| Build command    | `npm run build`  |
| Output directory | `dist`           |
| Custom domain    | `hnlsoftware.in` |

For SPA navigation, configure Cloudflare Pages history fallback so public routes resolve to `index.html`.

## 🗺️ Roadmap

| Phase   | Scope            |
| ------- | ---------------- |
| Phase 1 | Landing Website  |
| Phase 2 | Billing Software |
| Phase 3 | Trading Platform |
| Phase 4 | Mobile App       |
| Phase 5 | Backend API      |

## 🖼️ Screenshots

Screenshots will be added to `Documentation/screenshots/` as the product surface evolves.

| Surface      | Placeholder                                  |
| ------------ | -------------------------------------------- |
| Hero Section | `Documentation/screenshots/hero-section.png` |
| Products     | `Documentation/screenshots/products.png`     |
| Solutions    | `Documentation/screenshots/solutions.png`    |
| Pricing      | `Documentation/screenshots/pricing.png`      |
| Footer       | `Documentation/screenshots/footer.png`       |

## 🤝 Contributing

This is a private proprietary project. Proposed changes should be discussed with the H&L Software team before opening a pull request.

<details>
  <summary>Contribution checklist</summary>

1. Keep changes scoped to the requested feature or fix.
2. Preserve the existing visual language unless a redesign is explicitly approved.
3. Run `npm run lint`, `npm run format:check`, and `npm run build` from `App/`.
4. Update documentation when project structure or deployment settings change.

</details>

## 📄 License

Copyright © 2026 H&L Software. All Rights Reserved.

This source code is proprietary. See [LICENSE.md](LICENSE.md) for the complete terms.

## 👤 Author

**Rishabh Hurkat**  
Founder, H&L Software
