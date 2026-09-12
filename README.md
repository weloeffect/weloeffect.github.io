# Walid Abdela — Portfolio

A responsive personal portfolio for showcasing my work as an Artificial Intelligence researcher and engineer.

[View the live portfolio](https://weloeffect.github.io/Portfolio)

## Features

- Responsive desktop and mobile layouts
- English and French language support
- Light, dark, and system theme modes
- Animated introduction and interactive about section
- Research interests and downloadable CVs in English and French
- Project gallery with technology tags and GitHub links
- Latest articles synchronized from Substack
- Contact form powered by FormSubmit
- Links to LinkedIn, GitHub, and X

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui and Radix UI
- React Router
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm

### Installation

1. Clone or download the repository.
2. Open a terminal in the project directory.
3. Install the dependencies:

```bash
npm ci
```

4. Start the development server:

```bash
npm run dev
```

The site will be available at [http://localhost:8080](http://localhost:8080).

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server on port 8080. |
| `npm run sync:blog` | Fetch the latest public articles from Substack. |
| `npm run build` | Synchronize the blog and create a production build in `dist/`. |
| `npm run build:dev` | Create a development-mode build. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint across the project. |
| `npm run deploy` | Build and publish `dist/` to GitHub Pages. |

## Blog Synchronization

The blog section displays up to three recent posts from the public Substack feed. The synchronization script writes the article metadata to:

```text
src/data/substack-posts.json
```

`npm run build` runs this synchronization automatically. If the feed is temporarily unavailable and cached article data exists, the build uses the cached data.

## Project Structure

```text
Portfolio/
├── public/                  # Public static assets
├── scripts/                 # Build-time utilities
│   └── fetch-substack.mjs   # Substack feed synchronization
├── src/
│   ├── assets/              # Images and downloadable CV files
│   ├── components/          # Portfolio sections and UI components
│   ├── contexts/            # Language and theme providers
│   ├── data/                # Cached Substack article data
│   ├── hooks/               # Shared React hooks
│   ├── pages/               # Route-level pages
│   ├── App.tsx              # Application providers and routes
│   └── main.tsx             # Application entry point
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

## Customization

- Update English and French copy in `src/contexts/LanguageContext.tsx`.
- Edit portfolio projects in `src/components/ProjectsSection.tsx`.
- Change research interests and CV links in `src/components/AboutSection.tsx`.
- Update social links and contact details in `src/components/ContactSection.tsx`.
- Change the Substack feed URL in `scripts/fetch-substack.mjs`.

When adding translated content, update both the English and French entries.

## Deployment

The project is configured for deployment with GitHub Pages:

```bash
npm run deploy
```

This command builds the site and publishes the generated `dist/` directory through the `gh-pages` package.

## Contact

- Email: [walidabdela.pro@gmail.com](mailto:walidabdela.pro@gmail.com)
- LinkedIn: [Walid Abdela](https://www.linkedin.com/in/walid-abdela/)
- GitHub: [weloeffect](https://github.com/weloeffect)
- X: [@Welo3ffect](https://x.com/Welo3ffect)

