# Percy Integration Guide for Production Monorepo

This guide shows how to integrate Percy visual testing into your production monorepo with Turbo and Yarn workspaces.

## Key Changes Made

### 1. Removed Static Export
- **Before**: `output: "export"` with serve
- **After**: Standard Next.js server with `npm start`
- **Why**: Better CSS processing, more reliable snapshots

### 2. Production-Ready Configuration

#### `percy.config.yml`
```yaml
version: 2
snapshot:
  widths: [375, 768, 1280]
  min-height: 1024
  percy-css: |
    /* Hide dynamic content */
    [data-testid="timestamp"],
    .animate-spin,
    .animate-pulse {
      display: none !important;
    }
    /* Disable animations for consistent snapshots */
    *, *::before, *::after {
      animation-duration: 0s !important;
      transition-duration: 0s !important;
    }
discovery:
  network-idle-timeout: 750
  wait-for-timeout: 2000
```

#### Enhanced `snapshots.yml`
- Correct YAML syntax (`min-height` not `min_height`)
- Clean snapshot definitions without invalid properties
- Animation handling moved to `percy.config.yml`

## Integration Steps for Your Monorepo

### 1. Install Percy in Root Package
```bash
yarn add -D @percy/cli
```

### 2. Add Percy Scripts to Root `package.json`
```json
{
  "scripts": {
    "percy:allmachines": "percy snapshot --config percy.allmachines.yml",
    "percy:allcollectibles": "percy snapshot --config percy.allcollectibles.yml"
  }
}
```

### 3. Create App-Specific Configs

#### `percy.allmachines.yml`
```yaml
- name: AllMachines - Home Page
  url: http://localhost:3000/
  widths: [375, 768, 1280]
  min-height: 1024
  
- name: AllMachines - Tractors
  url: http://localhost:3000/tractors
  widths: [375, 768, 1280]
  min-height: 1024
```

#### `percy.allcollectibles.yml`
```yaml
- name: AllCollectibles - Home Page
  url: http://localhost:3001/
  widths: [375, 768, 1280]
  min-height: 1024
```

### 4. Update Your Workflow

Use the template in `.github/workflows/percy-monorepo-ready.yml`:

```yaml
- name: Install dependencies
  run: yarn install --frozen-lockfile

- name: Build specific app
  run: yarn turbo build --filter=allmachines

- name: Start specific app
  run: yarn workspace allmachines start &
```

### 5. Set Percy Token
Add `PERCY_TOKEN` to your GitHub secrets.

## Benefits for Your Setup

1. **Monorepo Compatible**: Works with Yarn workspaces and Turbo
2. **Multiple Apps**: Can test allmachines and allcollectibles separately
3. **Animation Stable**: Handles hover effects and transitions properly
4. **SEO Integration**: Can be combined with your existing SEO checks
5. **Production Ready**: Uses same server setup as production

## Testing Strategy

- Run Percy on specific routes that matter for visual regression
- Focus on components that frequently change
- Use Percy CSS to hide timestamps and dynamic content
- Set up different configs for different apps in your monorepo

## Next Steps

1. Copy `percy.config.yml` to your root
2. Adapt the workflow template for your specific apps
3. Create snapshot configs for key pages
4. Add Percy token to GitHub secrets
5. Test with a small PR first
