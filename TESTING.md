## Testing

### Local Validation

Run these checks before pushing changes:

- npm run lint
- npm run build

### Data Validation

Validate JSON data against schema locally when editing datasets:

```typescript
node scripts/validate-json-schema.js \
  src/data/schema/regions.schema.json \
  src/data/regions.json
```
