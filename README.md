# Vanira Designs — Next.js Static Website

A modern, responsive static website for Vanira Designs, built with Next.js App Router.

## Included
- Modern Indian fashion / boutique UI
- Responsive desktop, tablet and mobile layouts
- Home, Collection, About, Occasion and Contact sections
- Client-provided product images included in `public/images`
- Floating WhatsApp and call buttons fixed at bottom-right
- WhatsApp enquiry links for collection items
- Telephone call links
- Google Maps embedded using the supplied boutique address
- Instagram, Facebook and Google Maps links
- SEO metadata
- Static export configuration for easy hosting
- `.gitignore` configured to exclude `node_modules` and build files

## Run locally

Requirements: Node.js 18.17+ recommended.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
```

The static output is generated in the `out/` directory because `next.config.mjs` uses `output: 'export'`.

## Deploy

The generated `out/` folder can be hosted on any static hosting provider. You can also deploy the project directly to Vercel or build it through GitHub Actions.

## Replace the logo

The client mentioned a supplied logo, but a logo image was not included with the provided files in this request. The site currently uses a text-based `VD / Vanira Designs` mark. If the actual logo file is available, add it to `public/` and replace the `Logo` component in `app/page.js`.

## Replace / add product photos

Add additional photos to `public/images/` and update the `products` array in `app/page.js`.

## Business details used

- Business: Vanira Designs
- Phone / WhatsApp: +91 70215 29200
- Address: Flat 1401, Tower 3, New BDD Sankul, Naigaon, Dadar East, Mumbai 400014
- Instagram: https://www.instagram.com/vaniradesigns?stkn=d3o3aWg2Zm1hbWJ5
- Facebook: https://www.facebook.com/share/1DNK3bh7fd/
- Google Maps: https://share.google/qV5BbCNgkaPcEu63J
