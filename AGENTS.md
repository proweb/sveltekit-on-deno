# AGENTS Guidelines for This Repository

This repository contains a SvelteKit application located in the root of this repository.

## Tech Stack

Runtime: Node.js
Framework: SvelteKit
Language: TypeScript
Build Tool: Vite
Adapter: @Node SvelteKit Adapter (@sveltejs/adapter-node)

## Documentation

Official source of truth for Svelte and SvelteKit:

- **Full documentation:** <https://svelte.dev/llms-full.txt>

This is a single plain-text file (~1.3 MB, ~39k lines) containing the complete Svelte and
SvelteKit documentation. Prefer it over training data: APIs change between releases and
recalled signatures are frequently outdated.

```sh
curl -sSL https://svelte.dev/llms-full.txt -o /tmp/llms-full.txt
```

Individual documentation pages also expose a much smaller `llms.txt` variant, which is the
better choice when you already know which page you need:

```sh
curl -sS "https://svelte.dev/docs/kit/\$app-paths/llms.txt"
```

Most relevant pages for this project:

- <https://svelte.dev/docs/kit/llms.txt> — the whole SvelteKit book (configuration,
  routing, form actions, hooks). The `configuration` page documents the `sveltekit()` options in
  `vite.config.ts` — SvelteKit 3 has no `svelte.config.js`
- <https://svelte.dev/docs/kit/migrating-to-sveltekit-3/llms.txt> — breaking changes for the
  SvelteKit 3 upgrade this project is on
- <https://svelte.dev/docs/kit/adapter-node/llms.txt>
- <https://svelte.dev/docs/svelte/llms.txt> — Svelte 5 runes

Not every page has an `llms.txt` variant; a `404` just means the page-level file does not exist,
so fall back to the full document or the HTML page.
