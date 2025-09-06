# Portfolio Website Architecture

## 1. Overview
This document outlines the technical architecture for the portfolio website, based on the requirements in the `portfolio-prd.md`.

## 2. Technology Stack

| Category | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | [Astro](https://astro.build/) | Excellent performance (zero JS by default), great for content-driven sites, and allows for UI islands with other frameworks if needed. |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | A utility-first CSS framework for rapid UI development and clean, modern designs. |
| **Deployment** | [Vercel](https://vercel.com/) | Seamless Git integration, automatic deployments, global CDN, and a generous free tier. |
| **Version Control** | Git / GitHub | Standard for version control and required for Vercel integration. |

## 3. Project Structure

The project will follow the standard Astro project structure:

```
/Users/ahmadbilal/Downloads/Bmad/
├── public/
│   ├── images/         # Static images (e.g., logos, favicons)
│   └── audio/          # Static audio files
├── src/
│   ├── components/     # Reusable UI components (e.g., Header.astro, AudioPlayer.jsx)
│   ├── layouts/        # Base page layouts (e.g., MainLayout.astro)
│   ├── pages/          # Site pages (e.g., index.astro, about.astro)
│   └── styles/         # Global styles (e.g., globals.css)
├── astro.config.mjs    # Astro configuration file
├── package.json        # Project dependencies
└── tailwind.config.cjs # Tailwind CSS configuration
```

## 4. Data Management
*   **Content**: Page content (like the 'About Me' text) will be managed directly within the `.astro` files or in Markdown files (`.md`) if preferred for longer content.
*   **Portfolio Data**: Image and audio metadata (titles, descriptions, categories) will be managed in a simple data file (e.g., `src/data/portfolio.json`) to easily separate data from presentation.

## 5. Key Architectural Patterns
*   **Static Site Generation (SSG)**: The entire site will be pre-built into static HTML, CSS, and JavaScript files during the build process. This ensures maximum performance and security.
*   **Component-Based Architecture**: The UI will be built from small, reusable components, promoting consistency and maintainability.
*   **API-less Design**: As this is a static site, there will be no backend server or database in the traditional sense. All data is co-located with the source code.
