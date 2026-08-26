# Project architecture

This project uses Next.js App Router with feature-based organization. Application code stays in top-level folders because this repository already uses a root `app` directory.

## Dependency direction

```text
app -> features -> components / hooks / lib
```

- `app` owns routing, route layouts, loading states, errors, and route handlers.
- `features` owns business behavior, Directus queries, feature components, forms, schemas, and types.
- `components`, `hooks`, and `lib` own reusable, business-agnostic UI and infrastructure.
- Shared folders must never import from `features` or `app`.
- A feature should not import another feature's internal files. Import only from its public `index.ts` when cross-feature composition is unavoidable.

## Data rules

- Page content, labels, navigation, logos, and images come from Directus.
- Server Components fetch Directus content by default.
- TanStack Query is reserved for client-side server state that needs refetching, caching, pagination, polling, or optimistic updates.
- React Hook Form and Zod live inside the feature that owns the form.
- Directus credentials and authenticated clients remain server-only.
- Feature API functions request only the fields required by their consumers.

## Top-level folders

```text
app/                 # App Router only
features/            # Business features
components/ui/       # shadcn primitives only
hooks/               # Shared hooks
lib/                 # Shared utilities and integrations when introduced
```

## Feature shape

```text
feature-name/
|-- components/    # Feature-specific UI
|-- data/          # Temporary content adapters until the CMS is connected
|-- schemas/       # Zod schemas
|-- types/         # Feature-owned types
`-- index.ts       # Public API of the feature
```

Create `api`, `actions`, or `hooks` only when the feature actually needs them. Never keep empty placeholder folders. Shared interactive primitives are generated through shadcn and live in `components/ui`; feature components compose those primitives rather than duplicating buttons, inputs, labels, cards, dialogs, or menus. Files under `data` are temporary frontend sources and must be replaced by the feature's Directus queries when CMS integration starts.

Current implemented features:

```text
features/
|-- auth/
|   |-- components/
|   |   |-- auth-form-controls.tsx  # Shared auth fields and actions
|   |   |-- auth-page-layout.tsx    # Shared login/register presentation
|   |   |-- login-*.tsx
|   |   `-- register-*.tsx
|   |-- data/                       # Login/register content adapters
|   |-- schemas/                    # Shared fields + page form schemas
|   |-- types/                      # Auth content contracts
|   `-- index.ts
|-- home/
|   |-- components/
|   |-- data/
|   |-- types/
|   `-- index.ts
|-- membership/
|   |-- components/                 # Renewal + payment page views and cards
|   |-- data/                       # Plans, member/demo-user, page content adapters
|   |-- schemas/                    # Payment form schema
|   |-- types/                      # Membership content contracts
|   `-- index.ts
`-- site-shell/
    |-- components/
    |-- data/
    |-- types/
    `-- index.ts
```

`membership`'s two routes (`/membership/renewal`, `/membership/renewal/payment`) live under `app/(member)/` — a separate route group from `app/(website)/` — so its layout can pass a mock signed-in user to `SiteShell` (the designs show a logged-in header). Route groups don't change the URL, so this is transparent to navigation.
