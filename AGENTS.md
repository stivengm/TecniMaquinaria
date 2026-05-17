# TecniMaquinaria — AGENTS.md

## Stack
- **Angular 20** standalone components (no NgModules), zoneless change detection (`provideZonelessChangeDetection`)
- SCSS styles, CSS custom properties for theming (see `src/styles.scss`)
- Jasmine + Karma for unit tests
- Lazy-loaded routes with `loadChildren` under `src/app/features/`

## Key commands
| Command | Purpose |
|---------|---------|
| `npm start` / `ng serve` | Dev server at `http://localhost:4200/` |
| `npm run build` | Production build → `dist/TecniMaquinaria/browser` |
| `npm test` / `ng test` | Run Karma unit tests |
| `ng generate component <name>` | Scaffold a component |

## Project structure
```
src/
  main.ts                         # Bootstrap entrypoint
  app/
    app.config.ts                 # App-wide providers (router, zoneless, error listeners)
    app.routes.ts                 # Lazy-loaded route config
    core/                         # Non-UI: models/, services/
    features/                     # Feature modules (lazy-loaded): landing, auth, admin, cursos, certificados, nosotros
    shared/components/            # Reusable UI: button, chart, footer, menu, navbar
```

## Conventions
- File naming: kebab-case directories, PascalCase class names, `.ts`/`.html`/`.scss` per component (e.g. `home-page/home-page.ts`)
- Routes use path prefixes: `/usuario`, `/certificados`, `/cursos`, `/nosotros`, `/admin`
- Admin sub-routes: `/admin/dashboard`, `/admin/pagos`, `/admin/usuarios`
- Single quotes for TypeScript (`.editorconfig`)
- 2-space indent, UTF-8, trailing newline

## CI / Deployment
- GitHub Actions on push to `release/QA` / PR to `main`
- Build command: `npm run build -- --base-href=/TecniMaquinaria/`
- Deploys `dist/TecniMaquinaria/browser` to GitHub Pages

## Dependencies
- AOS (scroll animations), Chart.js, Typed.js (typewriter effect)
- Space Grotesk font via `@font-face` in `src/fonts.scss`

## Testing quirks
- Tests need `provideZonelessChangeDetection()` in `TestBed.configureTestingModule` providers (see `app.spec.ts` for pattern)
- Karma + Chrome launcher only (no Playwright/Cypress)
