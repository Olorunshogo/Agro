# Debridger – Bridging Farmers to Global Buyers

Debridger is a modern platform designed to connect verified Nigerian farmers with global buyers, enabling secure transactions, transparent sourcing, and premium agricultural exports.

This project includes metadata configuration for enhanced SEO, social sharing, and overall discoverability.

## 🚀 Features

### Global Visibility

Built-in SEO and social metadata ensure the platform performs well across search engines and social platforms.

### Premium Agricultural Products

Showcase high-quality Nigerian crops directly from trusted farmers.

### Secure & Verified

Safe transactions and verified sources enhance trust between buyers and suppliers.

### Optimized Sharing

OpenGraph and Twitter metadata ensure clean previews on platforms like Facebook, WhatsApp, Twitter, and LinkedIn.

## 📁 Project Structure

Below is the overall structure of the project:

```bash

agro-bridge/
│
├── .next/
├── node_modules/
├── public/
│   ├── landing/
│   └── products/
│       └── product-details/
│
├── src/
│   ├── actions/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── dash-products/page.tsx
│   │   │   ├── forgot-password/page.tsx
│   │   │   ├── signin/page.tsx
│   │   │   ├── signup/page.tsx
│   │   │   ├── verify-email/page.tsx
│   │   │   └── layout.tsx
│   │   ├── (dashboards)/
│   │   │   ├── admin-dashboard/
│   │   │   │   ├── analytics/page.tsx
│   │   │   │   ├── products/page.tsx
│   │   │   │   ├── quote-requests/page.tsx
│   │   │   │   ├── settings/page.tsx
│   │   │   │   ├── actions.ts
│   │   │   │   ├── page.tsx
│   │   │   │   └── _components/
│   │   │   ├── user-dashboard/
│   │   │   │   ├── analytics/page.tsx
│   │   │   │   ├── products/page.tsx
│   │   │   │   ├── quote-requests/page.tsx
│   │   │   │   ├── settings/page.tsx
│   │   │   │   └── page.tsx
│   │   │   └── layout.tsx
│   │   ├── (main)/
│   │   │   ├── about/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── how-it-works/page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── (products-request)/
│   │   │   ├── products/
│   │   │   ├── request-quote/
│   │   │   └── layout.tsx
│   │   ├── api/
│   │   │   ├── dashboards/admin-dashboard/country-demand/route.ts
│   │   │   ├── contact/route.ts
│   │   │   ├── auth/forgot-password/route.ts
│   │   │   ├── logout/route.ts
│   │   │   ├── signin/route.ts
│   │   │   └── signup/route.ts
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── types/
│   │   │   └── types.ts
│   │   ├── favicon.ico
│   │   ├── font.ts
│   │   ├── global.css
│   │   └── layout.tsx
│   │
│   ├── components/
│   ├── lib/
│   └── store/
│
├── .env.local
├── .gitignore
├── .vscode/
├── components.json
├── eslint.config.mjs
├── middleware.ts
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── prettier.config.js
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## 🧠 SEO Metadata Overview
The project uses Next.js Metadata API to manage::

### **Basic Info**
- Template & default title
- SEO-optimized site description
- Authors, creator, publisher

### **SEO Controls**
- Robots (indexing rules) for search engines
- Canonical links

### **OpenGraph Metadata**
- Rich link previews
- Image previews
- Locale & site name

### **Twitter Metadata**
- Summary cards
- Social preview image

This ensures excellent visibility on search engines & social media platforms.


## 🛠️ Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **TailwindCSS**
- **Vercel Deployment**
- **SEO metadata configuration**
- **Server Actions & Route Handlers**
- **Authentication system (custom API)**


## Environment Variables
Your `.env.local` file should typically include items like:

```makefile

DATABASE_URL=
JWT_SECRET=
EMAIL_SERVER_HOST=
EMAIL_SERVER_PORT=
EMAIL_SERVER_USER=
EMAIL_SERVER_PASSWORD=
NEXT_PUBLIC_BASE_URL=
```

## 📦 Installation

```bash
git clone https://github.com/Olorunshogo/agro-bridge.git
cd agro-bridge
npm install
npm run dev
```

Visit:

```arduino
http://localhost:3000

```

## 🌐 Deployment

Deploy easily using **Vercel**:

```nginx
[Vercel](https://vercel.com/)
```

Or push to GitHub and let Vercel auto-deploy.

## 🌟 Live URL
### **[Debrigger URL](https://agro-bom-vercel.vercel.app)**

<!-- ## ✨ Contributing
We welcome contributions!

**1.** Fork the repository  
**2.** Create a feature branch  
**3.** Commit your changes  
**4.** Submit a pull request -->

## 📄 License
This project is licensed under the **[MIT License]()**.

## 👥 Authors
**[BAMTEFA Olorunshogo Moses](https://shogo-portfolio-ebon.vercel.app/)**