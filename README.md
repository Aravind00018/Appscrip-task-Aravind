# mettā muse — Product Listing Page (PLP)

High-performance, accessible, and responsive Product Listing Page (PLP) built for the **Appscrip Frontend Assignment**, strictly adhering to the provided Figma design specifications.

---

## 🌟 Overview & Architecture

This application represents a single, unified, and fully responsive Next.js application (App Router) serving Desktop, Tablet, and Mobile devices from a single codebase. It faithfully replicates all three interactive states illustrated in the reference designs:

- **State A — With Filter (Default)**: Desktop shows a 3-column product grid with the left filter sidebar visible, displaying `3425 ITEMS` and `< HIDE FILTER`.
- **State B — With Filter Expanded**: The `IDEAL FOR` accordion section is expanded to show `All`, `Unselect all`, and checkboxes for `Men`, `Women`, and `Baby & Kids`. The `RECOMMENDED` dropdown menu is open, displaying all 5 sorting options with an active checkmark (`✓`).
- **State C — Hidden Filter**: Clicking `HIDE FILTER` smoothly collapses the sidebar, changes the toolbar control to `> SHOW FILTER`, and automatically expands the desktop product grid to 4 columns.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router architecture)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS Modules (Zero CSS frameworks, No Tailwind, No Bootstrap, No heavy UI libraries)
- **Typography**: Inter (Google Fonts via `next/font/google`)
- **Icons**: Inline scalable SVGs & native SVG assets
- **Data & SSR**: Server-Side Rendering with graceful FakeStoreAPI fallback

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18.17+` or `v20+` / `v22+`
- npm `9+` or `10+`

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/Aravind00018/Appscrip-task-Aravind.git
cd Appscrip-task-Aravind
npm install
```

### Local Development
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build & SSR Verification
Create an optimized production build:
```bash
npm run build
```
Start the production server:
```bash
npm run start
```

### Linting
Validate zero lint errors or warnings:
```bash
npm run lint
```

---

## ⚡ Key Engineering Highlights

### 1. True Server-Side Rendering (SSR) & Hydration Safety
- The top-level `app/page.tsx` is an asynchronous **React Server Component** responsible for fetching initial product data on the server via `lib/products.ts`, injecting structured SEO metadata, and rendering the initial HTML markup.
- Client Components are strictly confined to interactive leaves:
  - Filter state & collapsible accordion (`FilterSidebar`, `FilterSection`)
  - Sorting dropdown (`SortDropdown`)
  - Wishlist heart interactions (`ProductCard`)
  - Mobile navigation and filter drawers
- Hydration is 100% deterministic: default states (`isFilterVisible = true`, `selectedSort = 'RECOMMENDED'`) match between the server-rendered HTML and client mount.

### 2. Resilient Data Layer (`lib/products.ts`)
- Features a typed `Product` TypeScript interface.
- Implements `getProducts()` which queries FakeStoreAPI with a timeout guard and falls back gracefully to a curated reference dataset matching the Figma product photography 1:1.
- Guarantees the application never crashes or breaks if third-party APIs are down.

### 3. Responsive Layout (One Unified Codebase)
- **Desktop (1440px / 1280px)**:
  - Filter visible: Sidebar (290px) + 3-column CSS Grid.
  - Filter hidden: Full-width 4-column CSS Grid.
- **Tablet (768px - 1024px)**:
  - Preserves 3-column grid (with filter visible) and 4-column grid (with filter hidden) with scaled sidebar width (240px).
- **Mobile (375px - 414px)**:
  - Header with mobile hamburger menu.
  - Toolbar with compact `FILTER` button opening a slide-out filter drawer.
  - 2-column product grid with touch-friendly targets and zero horizontal scroll.

### 4. SEO & Structured Data
- Single semantic `<h1>DISCOVER OUR PRODUCTS</h1>` per page.
- Comprehensive metadata: Title, Meta Description, Canonical URL (`https://appscrip-task-aravind.vercel.app`), OpenGraph, and Twitter cards.
- JSON-LD Structured Data Schema (`CollectionPage` and `ItemList`) containing product pricing, availability, and descriptions for search engines.

### 5. Accessibility (a11y) & Performance
- Semantic HTML tags (`header`, `nav`, `main`, `aside`, `section`, `article`, `footer`).
- Standard `<button>` and `<a>` elements with keyboard navigation and visible focus rings.
- Dropdowns and dialogs support `Escape` key dismissal and outside click detection.
- Minimal DOM tree with zero unnecessary wrapper divs.

---

## 📂 Project Structure

```
appscrip/
├── app/
│   ├── globals.css          # Global CSS variables, reset, and container styles
│   ├── layout.tsx           # Root layout with Inter font and viewport settings
│   ├── page.tsx             # Async Server Component with SSR data fetching & JSON-LD
│   ├── PLPContainer.tsx     # Client coordinator for filters, sorting, and grid
│   └── PLPContainer.module.css
├── components/
│   ├── AnnouncementBar/     # Top black promo banner with repeated text
│   ├── Header/              # Main desktop/mobile header with icons & logo
│   ├── Navigation/          # Centered navigation links (SHOP, SKILLS, etc.)
│   ├── Hero/                # Page introduction with semantic H1
│   ├── ProductToolbar/      # Item count, HIDE/SHOW FILTER, and sort dropdown
│   ├── FilterSidebar/       # Desktop filter sidebar & mobile drawer
│   ├── SortDropdown/        # Accessible sorting dropdown (5 options)
│   ├── ProductGrid/         # Dynamic 3-col / 4-col CSS Grid
│   ├── ProductCard/         # Product item card with badges, overlays, and wishlist
│   └── Footer/              # Comprehensive black footer with forms and links
├── lib/
│   └── products.ts          # Typed product dataset, API fetcher, and sort utilities
├── public/
│   └── images/
│       ├── logo-icon.png    # Brand icon
│       ├── payment-methods.png # Accepted payment badges
│       └── products/        # High-resolution product photography
└── README.md
```

---

## 🌐 Repository & Deployment
- **GitHub Repository**: [https://github.com/Aravind00018/Appscrip-task-Aravind](https://github.com/Aravind00018/Appscrip-task-Aravind)
- **Live Deployment**: [https://appscrip-task-aravind.vercel.app](https://appscrip-task-aravind.vercel.app)

### Deploying to Netlify / Vercel
1. Repository is named `Appscrip-task-Aravind`.
2. Connect the repository to **Vercel** or **Netlify**.
3. Build Settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
4. Click **Deploy**.
