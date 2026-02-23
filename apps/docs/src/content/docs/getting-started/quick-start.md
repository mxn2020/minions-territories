---
title: Quick Start
description: Get up and running with Minions Territories in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-territories/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_territories import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
territories info
```
