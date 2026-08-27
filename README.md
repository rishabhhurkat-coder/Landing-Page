# H&L Software Landing Page

> The public-facing website for H&L Software: a clear front door to the products, capabilities, and people behind the portfolio.

<p>
  <a href="https://hnlsoftware.in"><strong>Visit the live website</strong></a> ·
  <a href="https://hnlsoftware.in/contact"><strong>Start a conversation</strong></a> ·
  <a href="https://github.com/rishabhhurkat-coder"><strong>Connect with Rishabh</strong></a>
</p>

The H&L Software landing page is a modern, responsive marketing experience built to introduce the company, explain its product direction, and give potential customers and collaborators a clear way to get in touch.

## What the site communicates

- A concise H&L Software product story
- Product areas across trading, automation, billing, and workflow tools
- Clear routes for products, solutions, pricing, about, and contact
- A polished visual system with responsive layouts and reusable components
- A fast, SEO-conscious frontend ready for Cloudflare Pages

## Technology

| Area | Technology |
| --- | --- |
| UI | React and TypeScript |
| Tooling | Vite, ESLint, Prettier |
| Styling | Custom CSS tokens, utilities, and animations |
| Icons and motion | Lucide React and Framer Motion |
| Deployment | Cloudflare Pages |

## Project structure

```text
App/
  public/       Static assets, metadata, sitemap, and favicon
  src/
    Components/ Shared layout and UI primitives
    pages/      Route-level page modules
    styles/     Global styles and design tokens
    App.tsx     Application shell and routing
    main.tsx    React entry point
Assets/         Project-level asset workspace
Documentation/  Screenshots and supporting documentation
```

## Routes

| Route | Purpose |
| --- | --- |
| `/` | H&L Software home page |
| `/products` | Product overview |
| `/solutions` | Solutions and use cases |
| `/pricing` | Pricing direction |
| `/about` | Company and product story |
| `/contact` | Conversation and project inquiries |

## Run locally

All application commands run from `App/`:

```bash
cd App
npm install
npm run dev
```

Create a production build or run quality checks with:

```bash
npm run build
npm run lint
npm run format:check
```

## Deployment

The site is designed for Cloudflare Pages:

| Setting | Value |
| --- | --- |
| Framework | Vite |
| Root directory | `App` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Live domain | [hnlsoftware.in](https://hnlsoftware.in) |

## Work with H&L Software

H&L Software is building practical products for teams that value clear workflows, reliable automation, and thoughtful user experiences. If you have a product idea, an internal process worth improving, or a collaboration in mind, I’d be glad to hear from you.

- **Founder and builder:** [Rishabh Hurkat](https://github.com/rishabhhurkat-coder)
- **Website:** [hnlsoftware.in](https://hnlsoftware.in)
- **Project inquiries:** [Use the contact page](https://hnlsoftware.in/contact)
- **Technical discussion:** [Open a GitHub issue](https://github.com/rishabhhurkat-coder/Landing-Page/issues)

## License

Copyright © 2026 H&L Software. All rights reserved. This public repository is presented as a product and engineering portfolio; contact the author before reusing production code or assets.
