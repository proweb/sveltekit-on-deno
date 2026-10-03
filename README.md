# Project Description

SvelteKit application configured for Node.js runtime.

## Running in Production

Build the application:

```bash
npm run build
```

Start the Node.js server:

```bash
npm start             # port 9000
PORT=3000 node build  # any other port; adapter-node defaults to 3000
```

### Deriving the request origin

HTTP carries no reliable information about the URL that was requested, so `@sveltejs/adapter-node`
falls back to the `https` protocol. When the app is reached directly over plain HTTP, `url.origin`
will not match the browser's `Origin` header and form submissions fail with
`403 Cross-site POST form submissions are forbidden`.

**Behind a reverse proxy** — forward the original protocol and host:

```bash
PROTOCOL_HEADER=x-forwarded-proto HOST_HEADER=x-forwarded-host node build
```

Only set these when the server really is behind a trusted reverse proxy, otherwise clients can
spoof them.

**Without a reverse proxy** — declare the origin in `vite.config.ts`:

```ts
sveltekit({
	adapter: adapter(),
	paths: { origin: process.env.ORIGIN }
});
```

```bash
ORIGIN=http://localhost:9000 npm run build
npm start
```

`paths.origin` is inlined during `npm run build`, so `ORIGIN` must be set at build time — setting it
only on the `node build` command has no effect. Earlier versions of SvelteKit read `ORIGIN`
directly at runtime; that environment variable no longer exists in SvelteKit 3.

## Development

```bash
npm run dev     # dev server
npm run check   # svelte-check
npm run lint    # prettier --check + eslint
npm run format  # prettier --write
```
