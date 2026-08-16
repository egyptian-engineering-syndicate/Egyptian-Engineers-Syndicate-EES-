# Egyptian Engineers Syndicate (EES)

The application lives in [`client/`](./client). That folder is a Next.js App Router app with feature-based modules (`features/auth`, `features/site-shell`). See [`client/ARCHITECTURE.md`](./client/ARCHITECTURE.md) before adding routes or folders.

## Run locally

```bash
cd client
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts (from `client/`): `npm run lint`, `npm run typecheck`, `npm run build`.

Use **npm** only in this repository. Do not add a second lockfile.
