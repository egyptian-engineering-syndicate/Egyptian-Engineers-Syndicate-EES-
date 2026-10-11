# Egyptian Engineers Syndicate — agent notes

This is a two-part repo, not a monorepo tool (no turborepo/nx):

```text
Egyptian-Engineers-Syndicate-EES-/
|-- client/     # Next.js App Router frontend
`-- directus/   # Directus CMS, run via Docker Compose
```

Each part has its own `AGENTS.md` / `README.md` with the real detail — read the one for whatever you're touching:

- [client/AGENTS.md](client/AGENTS.md) — this Next.js version has breaking changes vs. training data; check `node_modules/next/dist/docs/` before relying on memorized Next.js APIs.
- [client/ARCHITECTURE.md](client/ARCHITECTURE.md) — feature-based App Router structure, dependency rules, stack.
- [directus/README.md](directus/README.md) — Docker Compose setup, env config (written in Arabic).

`CLAUDE.md` at the repo root ties these together and tracks Directus/client integration status — read it for the current state (e.g. Directus is scoped to images/media only, not general page content, and the SDK wiring in `client/lib/directus/` isn't done yet).

## Ground rules

- `client/` uses **npm only** — don't add a second lockfile.
- `directus/` has no app code — it's Docker Compose + env config.
- Don't commit `directus/data/`, `directus/uploads/`, or `directus/extensions/` — runtime-created, gitignored.
