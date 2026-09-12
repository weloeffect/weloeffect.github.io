# Repository Guidelines

## Project Structure & Module Organization
This personal portfolio uses React 18, TypeScript, Vite, Tailwind CSS, and shadcn/ui.
- `src/main.tsx` initializes the app; `src/App.tsx` defines providers and routes.
- `src/pages/` contains the landing page and not-found page.
- `src/components/` contains portfolio sections; `src/components/ui/` holds reusable UI primitives.
- `src/contexts/` manages language and theme; `src/hooks/` contains shared hooks, and `src/lib/utils.ts` provides utilities.
- `src/assets/` stores imported images and CV PDFs; `public/` holds static public assets.
- Global styles live in `src/index.css` and `src/App.css`; Tailwind configuration lives in `tailwind.config.ts`.

## Build, Test, and Development Commands
Run commands from the repository root:
- `npm ci`: install dependencies from `package-lock.json`.
- `npm run dev`: start Vite, configured for port 8080.
- `npm run build`: generate the production bundle in `dist/`.
- `npm run build:dev`: build using development mode.
- `npm run preview`: serve the built bundle locally.
- `npm run lint`: run ESLint on the project.
- `npm run deploy`: build through `predeploy`, then publish `dist/` to GitHub Pages.

## Coding Style & Naming Conventions
Use TypeScript function components, two-space indentation, and descriptive camelCase variables. Name section components and contexts in PascalCase, such as `HeroSection.tsx`; preserve lowercase hyphenated filenames for UI primitives and hooks, such as `use-mobile.tsx`. Use `@/` imports for paths under `src/`. Match existing quotation and semicolon style in edited files. Reuse UI primitives and Tailwind theme tokens. ESLint includes TypeScript, React Hooks, and React Refresh rules; no dedicated formatter is configured.

## Testing Guidelines
There is no automated test framework, test script, or coverage threshold configured. Run lint and a production build before submitting code changes. Manually verify desktop and mobile layouts, navigation, English/French switching, theme switching, and CV links. Add corresponding English and French translation keys in `src/contexts/LanguageContext.tsx` when changing translated copy.

## Commit & Pull Request Guidelines
This checkout has no Git metadata, so historical commit conventions cannot be verified. Use concise, imperative messages, such as `Fix mobile navigation spacing`. Keep changes focused. PRs should describe the change, link related issues when applicable, list validation performed, and include screenshots for visual updates.
