# Warp Docs

## Development

### Install dependencies
Run `pnpm install`.

### Run the docs

Start the development server, with hot reloading:

```bash
pnpm dev
```

### Build the agent skill

Generate the committed skill bundle at `skills/warp-docs/`:

```bash
npm run build:skill
```

Verify the generated output is up to date:

```bash
npm run check:skill
```
