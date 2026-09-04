# EES Project — Claude reference

This file is my own working reference for this repo. Read `client/ARCHITECTURE.md`, `client/DESIGN-SYSTEM.md` and `directus/README.md` too — they're the source of truth; this file just ties them together and tracks integration status.

## Repo shape

```text
Egyptian-Engineers-Syndicate-EES-/
|-- client/     # Next.js App Router frontend (see client/ARCHITECTURE.md)
`-- directus/   # Directus CMS, run via Docker Compose (see directus/README.md)
```

Two independent parts, not a monorepo tool (no turborepo/nx). `client/` has its own `package.json`; `directus/` is just Docker Compose + env config, no app code lives there.

## client/ — Next.js frontend

- `client/DESIGN-SYSTEM.md` is the visual reference: color tokens, page skeleton, type scale, the shared card/field/button classes, and the RTL rules. Read it before styling any new page — it exists so new screens reuse existing pieces instead of inventing one-off styling.
- App Router, feature-based. Dependency direction: `app -> features -> components/hooks/lib`. Shared folders (`components`, `hooks`, `lib`) must never import from `features` or `app`. Features don't import each other's internals — only via a feature's `index.ts`.
- Feature shape: `components/`, `data/` (temporary content adapters, to be replaced by Directus queries), `schemas/` (Zod), `types/`, `index.ts`. Add `api/`, `actions/`, `hooks/` only when actually needed — no empty placeholder folders.
- Server Components fetch Directus content by default. TanStack Query is only for client-side server state (refetch/cache/pagination/polling/optimistic updates).
- React Hook Form + Zod live inside the feature that owns the form.
- Directus credentials and authenticated clients are server-only.
- Package manager: **npm only** (`npm install`, `npm run dev/lint/typecheck/build`). Don't add a second lockfile.
- Implemented so far: `features/auth` (login/register), `features/site-shell` (header/footer/nav/logo + shared `PageBreadcrumb`), `features/home`, `features/membership` (subscription renewal + payment), `features/trips` (trips listing + hajj-lottery promo), `features/health-care` (plans + rules/special-cases/required-documents cards + booking with attached documents), `features/committees` (committees listing + committee details with members), `features/profile` (profile page with member card + subscription chips + bookings, read-only booking details with cancel actions, and per-subscription data page with attached documents).
- Signed-in pages (`/membership/renewal`, `/membership/renewal/payment`, `/trips`, `/health-care`, `/committees`, `/profile`) live under the `app/(member)/` route group, not `app/(website)/`, so its layout can pass a mock signed-in `SiteShellUser` (`membershipDemoUser`) to `SiteShell` — the logged-in header the designs show. `app/(website)/` stays guest-only (login/register unaffected). `SiteShellUser` also carries a `profileHref`, which is what makes the header's signed-in chip link to `/profile`. Swap this for real session wiring once auth exists; both groups still resolve to the same URLs since route groups don't affect paths.
- `client/lib/directus/` exists as an empty placeholder — this is where the Directus SDK client + env wiring will go.
- Stack: Next 16, React 19, Tailwind 4, shadcn/radix-ui, react-hook-form + zod, TanStack Query, next-themes.
- `client/AGENTS.md` warns this Next.js version has breaking changes vs. training data — check `node_modules/next/dist/docs/` before relying on memorized Next.js APIs.

## directus/ — CMS

- Runs locally via `docker compose up -d` inside `directus/` (Postgres + Redis + Directus 11, one container each).
- Env file: copy `directus/.env.example` to `directus/.env` (already has working local defaults — change `ADMIN_PASSWORD` at least). Default admin: `admin@ees.local`.
- Directus UI at `http://localhost:8055` once containers are healthy (first boot takes longer — runs DB migrations).
- `directus/data/`, `directus/uploads/`, `directus/extensions/` are created at runtime by the containers and are gitignored — never commit them.
- README (`directus/README.md`) is written in Arabic.

### Directus's role: images/media only

**Confirmed scope (2026-08-19): Directus in this project is used to store project images only** — not general page content/copy. Keep that in mind when wiring up `client/lib/directus`: the SDK client should be scoped to asset/file retrieval (`PUBLIC_URL` + Directus Files/Assets API), not treated as a full headless-CMS content source for every feature. This narrows `client/ARCHITECTURE.md`'s more general "Page content, labels, navigation, logos, and images come from Directus" statement — confirm with the user if a feature seems to want non-image content from Directus, since the docs and the stated scope disagree.

### Integration status (as of 2026-08-19)

Not yet wired up. Next steps per `directus/README.md`:
1. Add `@directus/sdk` to `client/`.
2. Create a Directus client + env variables in `client/lib/directus/`.
3. Point it at `PUBLIC_URL` (`http://localhost:8055` locally).

Until this lands, feature `data/` folders (e.g. `features/auth/data/login-page.content.ts`) hold temporary hardcoded content and must be replaced once Directus queries exist.

Image placeholders under `client/public/images/` (including all of `images/trips/` and `images/committees/`) are the same kind of stopgap — they are the first thing that should move to Directus assets. Their sources and licenses are recorded in `client/public/images/README.md`.
