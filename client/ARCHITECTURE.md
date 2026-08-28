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
|-- health-care/
|   |-- components/           # Plan listing, plan card, details/booking page + form
|   |-- data/                 # Plan listing + per-plan details content adapters
|   |-- schemas/              # Booking form schema
|   |-- types/
|   `-- index.ts
|-- site-shell/
|   |-- components/           # Header, footer, logo, nav + shared PageBreadcrumb
|   |-- data/
|   |-- types/
|   `-- index.ts
`-- trips/
    |-- components/           # Trips page view, promo banner, search/grid, trip card
    |-- data/                 # Promo + trip listing content adapter
    |-- types/
    `-- index.ts
```

`PageBreadcrumb` (the green pattern bar under the header) lives in `site-shell` because it is
site chrome rather than any one feature's concern; `membership` and `trips` both consume it
through `@/features/site-shell`.

`membership`'s two routes (`/membership/renewal`, `/membership/renewal/payment`) live under `app/(member)/` — a separate route group from `app/(website)/` — so its layout can pass a mock signed-in user to `SiteShell` (the designs show a logged-in header). Route groups don't change the URL, so this is transparent to navigation. `trips` (`/trips`)
sits in the same group for the same reason — its design also shows the signed-in header. `health-care` (`/health-care`, `/health-care/[planId]`) sits there too, for the same reason.

`health-care`'s details/booking page (`/health-care/[planId]`) closely mirrors `trips`'s details/booking page (contact details + a member field-array + payment), reusing the shared `PaymentMethodSelector`, but the member section models a fixed "assigned engineer" plus a removable family-members array (relation + national ID) instead of trips's traveler array.

`PaymentMethodSelector` (`components/payment-method-selector.tsx`) is a shared, business-agnostic component — `membership`, `trips`, and `health-care` all offer the same three payment methods (card/fawry/paytabs), so it lives directly under `components/` rather than inside any one feature. It isn't a shadcn primitive, so it sits alongside `theme-provider.tsx` rather than in `components/ui/`.

`components/form-field.tsx` is the same story for the labeled-field wrapper (label + inline error + relative-positioned slot for an input/icon) all three features' forms use, plus its `fieldInputClassName`/`fieldIconClassName` styling helpers — hoisted after `trips` and `health-care` had copied it byte-for-byte from `membership`.
