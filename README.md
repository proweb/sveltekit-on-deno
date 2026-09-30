# Project Description

SvelteKit application configured for Node.js runtime.

## Running in Production

Build the application:

```bash
npm run build
```

Start the Node.js server (runs on port 9000 by default):

```bash
node build
```

### Behind a reverse proxy

`@sveltejs/adapter-node` derives the request origin from proxy headers. Set them so that SvelteKit
can build correct URLs and pass its CSRF origin check:

```bash
PROTOCOL_HEADER=x-forwarded-proto HOST_HEADER=x-forwarded-host node build
```

### Without a reverse proxy (plain HTTP)

When the server is reached directly over plain HTTP, `adapter-node` assumes `https`. As a result
`url.origin` does not match the browser's `Origin` header and form submissions fail with
`403 Cross-site POST form submissions are forbidden`. Set `ORIGIN` explicitly:

```bash
ORIGIN=http://localhost:9000 node build
```

## Development

```bash
npm run dev     # dev server
npm run check   # svelte-check
npm run lint    # prettier --check + eslint
npm run format  # prettier --write
```
