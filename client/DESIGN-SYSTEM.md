# Design system

How the EES pages are built visually. `ARCHITECTURE.md` says where code goes; this
file says what it should look like, so a new page can be assembled from pieces that
already exist instead of new one-off styling.

Rule of thumb: **if a value below covers your case, use the token/class listed here
verbatim.** Only invent new styling when the design genuinely shows something new —
and when you do, add it here.

---

## 1. Foundations

### Document

`app/layout.tsx` sets `lang="ar" dir="rtl"`, the Cairo font (`--font-cairo` →
`font-sans`), and forces the light theme (`forcedTheme="light"`). There is no dark
mode in the designs — don't add `dark:` variants.

### Color tokens

Defined in `app/globals.css` and exposed to Tailwind through `@theme inline`.

| Token            | Value     | Tailwind class                            | Used for                                                    |
| ---------------- | --------- | ----------------------------------------- | ----------------------------------------------------------- |
| `--brand`        | `#008c5f` | `bg-brand`, `text-brand`, `border-brand`  | primary buttons, prices, links, icons, active states        |
| `--brand-strong` | `#006f4b` | `hover:bg-brand-strong`                   | primary button hover only                                   |
| `--page-surface` | `#f6f6f6` | `bg-page-surface`                         | page background behind cards                                |
| —                | `#edf8f4` | `bg-[#edf8f4]`                            | brand tint: icon tiles, total/price rows                    |

Neutrals come straight from Tailwind: `neutral-950` headings, `neutral-700`
body-on-grey, `neutral-600` body, `neutral-500` muted/subtitles, `neutral-400`
placeholders, `neutral-200` borders, `neutral-100` field/chip backgrounds.
Destructive inline actions use `text-red-600` (`hover:text-red-700`); invalid fields
use `border-red-500` + `bg-red-50/50`.

### Patterns

Two CSS classes in `globals.css` paint the syndicate's geometric pattern:

- `.ees-green-pattern` — brand background, used by `PageBreadcrumb`.
- `.ees-light-pattern` — white background, used for light pattern bands.

### Radius, shadow, spacing

- Cards: `rounded-xl`. Controls, buttons, tiles, tinted rows: `rounded-md`.
- One elevation only: `shadow-[0_12px_28px_rgba(0,0,0,.06)]`. No borders on cards
  (`border-0 ring-0`) — the shadow is the separation.
- Stacked sections: `space-y-6 sm:space-y-8`. Grids: `gap-6 lg:gap-8`.
- Inside a card: heading → body `mt-4`/`mt-5`, field grids `gap-4`.

---

## 2. Page skeleton

Every inner page is the same three parts:

```tsx
<main className="bg-page-surface">
  <PageBreadcrumb items={content.breadcrumbs} />

  <div className="mx-auto w-full max-w-[1640px] px-5 py-10 sm:px-8 sm:py-12 lg:px-14">
    <h1 className="text-3xl font-extrabold text-neutral-950 sm:text-4xl">
      {content.title}
    </h1>
    <p className="mt-2 text-sm text-neutral-500 sm:text-base">
      {content.description}
    </p>

    {/* cards */}
  </div>
</main>
```

- `max-w-[1640px]` + `px-5 sm:px-8 lg:px-14` is **the** container. Reuse it,
  including inside `PageBreadcrumb`, so every band lines up.
- The header/footer come from the route group's layout, never from the page.
- Signed-in pages go in `app/(member)/`; guest pages in `app/(website)/`.
- A section that bleeds past the viewport (see `committees`) needs
  `overflow-x-clip` on `<main>` so RTL doesn't gain a horizontal scrollbar.

---

## 3. Type scale

| Role                               | Classes                                                 |
| ---------------------------------- | ------------------------------------------------------- |
| Page title (`h1`)                  | `text-3xl font-extrabold text-neutral-950 sm:text-4xl`  |
| Page subtitle                      | `text-sm text-neutral-500 sm:text-base`                 |
| Emphasised block heading (payment) | `text-2xl font-extrabold text-neutral-950 sm:text-3xl`  |
| Content card heading               | `text-xl font-extrabold text-neutral-950 sm:text-2xl`   |
| Brand card heading (profile data)  | `text-lg font-extrabold text-brand sm:text-xl`          |
| Form section heading               | `text-lg font-extrabold text-neutral-950 sm:text-xl`    |
| Sub-group label inside a card      | `text-sm font-bold text-neutral-950`                    |
| Accent sub-heading                 | `text-sm font-bold text-brand sm:text-base`             |
| Body / list copy                   | `text-sm leading-7 text-neutral-600 sm:text-base`       |
| Field label                        | `text-sm text-neutral-600 sm:text-base` (via `FormField`) |

Headings are `font-extrabold`; nothing else is heavier than `font-semibold`.

---

## 4. Shared building blocks

Business-agnostic pieces live in `components/` and are shared by every feature — use
them instead of re-styling.

| Piece                                   | Import                                | What it gives you                                                                                                    |
| --------------------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `SurfaceCard` / `surfaceCardClassName`  | `@/components/surface-card`           | the standard white card: `rounded-xl border-0 bg-white px-6 py-7 shadow-… ring-0 sm:px-7`                             |
| `FormField`                             | `@/components/form-field`             | label row + inline error + relative slot for the control                                                              |
| `fieldInputClassName(invalid, padding?)` | `@/components/form-field`            | the `h-14` grey field: `bg-neutral-100`, `rounded-md`, focus → white + `ring-3 ring-brand/10`, invalid → red          |
| `fieldIconClassName`                    | `@/components/form-field`             | brand icon pinned at `start-4`, vertically centred                                                                    |
| `PaymentMethodSelector`                 | `@/components/payment-method-selector` | the three-up card/fawry/paytabs radio row                                                                            |
| `PageBreadcrumb`                        | `@/features/site-shell`               | the green pattern bar under the header                                                                                |
| shadcn primitives                       | `@/components/ui/*`                   | `button`, `card`, `input`, `label`, `checkbox`, `textarea`                                                             |

Add primitives with the shadcn CLI (`./node_modules/.bin/shadcn add <name>`), never
by hand, so they keep the project's `radix-nova` style.

### Card anatomy

```tsx
<SurfaceCard>
  <h2 className="text-lg font-extrabold text-neutral-950 sm:text-xl">{title}</h2>
  {/* body starts at mt-4 / mt-5 */}
</SurfaceCard>
```

For a wider, copy-only card (rules, policies) pad it out:
`<SurfaceCard className="sm:px-8 sm:py-8">`.

### Read-only field

Pages that print stored data instead of collecting it (the whole `profile`
feature) use `ProfileDetailField` rather than `FormField`: the muted label sits
above the value, and the value is `text-base font-bold text-neutral-950 sm:text-lg`
— or `text-brand` for the values the designs highlight (names, service length,
amounts). Grids are the same `gap-4 sm:grid-cols-2` as the form ones.

### Icon tile

The rounded brand-tint square above a card title:

```tsx
<div className="grid size-14 place-items-center rounded-md bg-[#edf8f4] text-brand">
  <Icon aria-hidden="true" className="size-7" strokeWidth={1.8} />
</div>
```

Icons are lucide, `strokeWidth={1.8}`, `size-5` inline / `size-7` in a tile.

### Tinted total row

```tsx
<div className="flex items-center justify-between gap-4 rounded-md bg-[#edf8f4] px-5 py-4">
  <span className="text-sm font-bold text-neutral-950 sm:text-base">{label}</span>
  <span className="text-lg font-extrabold text-brand sm:text-xl">
    {price}
    <span className="ms-1.5 text-sm font-medium text-neutral-500">{currency}</span>
  </span>
</div>
```

Prices are always brand-green + extrabold, with the currency as a small muted span.

---

## 5. Forms

Owned by the feature: `schemas/<name>.schema.ts` (Zod, built by a
`create…Schema(messages)` factory so all copy stays in `data/`), wired with
`react-hook-form` + `zodResolver`, `noValidate` on the `<form>`.

```tsx
<FormField id="phone" label={content.phoneLabel} error={errors.phone?.message}>
  <Input
    id="phone"
    placeholder={content.phonePlaceholder}
    className={fieldInputClassName(Boolean(errors.phone))}
    {...register("phone")}
  />
  <Phone aria-hidden="true" className={fieldIconClassName} />
</FormField>
```

- Field grids: `grid gap-4 sm:grid-cols-2` (or `sm:grid-cols-3`).
- Without a leading icon, pass `"px-4"` as the second argument to
  `fieldInputClassName`.
- Repeating groups use `useFieldArray`, with a `Trash2` + label remove button
  (`text-sm font-medium text-red-600`) on the group's header row and an outline
  "add another" button underneath.
- Radix controls (checkbox, select-likes) need `useController`/`Controller`; plain
  inputs use `register`.
- Textareas reuse the field look:
  `min-h-24 rounded-md border-transparent bg-neutral-100 px-4 py-3 …`.
- File pickers are a dashed brand dropzone wrapping an `sr-only` file input:
  `h-24 … rounded-md border-2 border-dashed border-brand/45 bg-white text-brand`.
  Picked `File` objects stay in component state — they don't belong in the Zod
  schema.

### Buttons

| Role                | Classes                                                                                            |
| ------------------- | -------------------------------------------------------------------------------------------------- |
| Primary form action | `h-14 min-w-44 rounded-md bg-brand px-8 text-base font-semibold text-white hover:bg-brand-strong`   |
| Secondary / back    | `variant="outline"` + `h-14 rounded-md bg-white px-8 text-base font-semibold text-neutral-700`      |
| In-card CTA         | `h-11 rounded-md bg-brand px-7 text-sm font-semibold text-white hover:bg-brand-strong`              |
| Inline destructive  | plain `<button>` + `flex items-center gap-1.5 text-sm font-medium text-red-600 hover:text-red-700`  |
| Destructive action  | `variant="outline"` + `h-14 min-w-44 rounded-md border-red-500/60 bg-white px-8 text-base font-semibold text-red-600 hover:bg-red-50 hover:text-red-700` |

Buttons that navigate use `asChild` + `next/link`, never `onClick` + router.

---

## 6. RTL rules

The whole app is RTL. These are not optional:

- Use logical utilities only: `ms/me`, `ps/pe`, `start/end`, `text-start/text-end`.
  Never `ml/mr/pl/pr/left/right`.
- In an RTL flex/grid row the **first** DOM child renders at the **right**.
  `justify-start` = right edge, `justify-end` = left edge.
- Latin/numeric fragments inside Arabic text (list markers such as `1)`, card
  numbers, dates) must be isolated with `dir="ltr"` on their own span, or bidi
  reorders and mirrors the punctuation. See `HealthCareNumberedItem`.
- Chevrons point the RTL way: `ChevronLeft` means "forward" in breadcrumbs.
- Bled-out backgrounds need `overflow-x-clip` on the page's `<main>`.

---

## 7. Content

No Arabic copy is hardcoded in a component. Every string, label, placeholder,
validation message, href and price lives in the feature's `data/*.content.ts`, typed
by `types/*.types.ts`, and is passed in as a `content` prop — these files are the
seam that Directus will replace. List markers are authored strings (`marker: "1"`),
not derived from the array index, so a card can mirror the numbering of the printed
regulation it comes from.

---

## Checklist for a new page

1. Route under `app/(member)/` or `app/(website)/`; the page component only reads
   content and renders the feature's `…PageView`.
2. Feature folder per `ARCHITECTURE.md`: `components/`, `data/`, `types/`, plus
   `schemas/` if there's a form.
3. Page skeleton from §2 — same container, `PageBreadcrumb`, title + subtitle.
4. Body = a `space-y-6 sm:space-y-8` stack of `SurfaceCard`s.
5. Forms from §5; shared pieces from §4 — never re-style a card, field or button.
6. Type scale from §3, colors from §1, RTL rules from §6.
7. `npm run lint && npm run typecheck && npm run build` before calling it done.
