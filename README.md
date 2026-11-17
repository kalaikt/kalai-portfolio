# Kalaikumar Profile

Angular 4 portfolio site.

## Local development

```bash
npm install   # uses .npmrc ignore-scripts (see note below)
npm start     # build + static server — works on Node 18+ including v25
```

Open [http://localhost:4200](http://localhost:4200).

For **live reload** (`ng serve`), use **Node 20 LTS** (see `.nvmrc`):

```bash
nvm install    # or: fnm install && fnm use
npm run start:dev
```

### `npm install` and Node.js

This project uses **Angular CLI 1.x**, which pulls in **node-sass**. That package tries to compile native code and fails on current Node (e.g. v25) unless you use an old Node version or skip install scripts.

The app only uses **CSS** (no Sass/SCSS), so `.npmrc` sets `ignore-scripts=true` and a normal `npm install` is safe.

If install still fails, remove `node_modules` and run:

```bash
rm -rf node_modules
npm install --ignore-scripts
```

### `ng serve` on Node 20+ / v25

`ng serve` uses webpack-dev-server 2.x (`http-deceiver` → `process.binding('http_parser')`), which **breaks on Node 21+**. On current Node, use `npm start` (build + `serve`). Use `npm run start:dev` only under Node **18 or 20** LTS.

Long term, upgrading to a modern Angular version removes these constraints.
