![CI](https://github.com/mxn2020/minions-territories-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-territories

**Country, state, region, city definitions, focus queue, and saturation tracking**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-territories/sdk minions-sdk

# Python
pip install minions-territories

# CLI (global)
npm install -g @minions-territories/cli
```

---

## CLI

```bash
# Show help
territories --help
```

---

## Python SDK

```python
from minions_territories import create_client

client = create_client()
```

---

## Project Structure

```
minions-territories/
  packages/
    core/           # TypeScript core library (@minions-territories/sdk on npm)
    python/         # Python SDK (minions-territories on PyPI)
    cli/            # CLI tool (@minions-territories/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [territories.minions.help](https://territories.minions.help)
- Blog: [territories.minions.blog](https://territories.minions.blog)
- App: [territories.minions.wtf](https://territories.minions.wtf)

---

## License

[MIT](LICENSE)
