# Internal App Widget

This project is a small React widget built with Vite and TypeScript. It produces a single JS bundle (`internal-app.js`) that can be embedded into other projects (e.g., Rails `html.erb` pages).

---

## Setup

Install dependencies using `pnpm`:

```bash
pnpm i
```

---

## Development

Start the Vite development server with hot reload:

```bash
pnpm run dev
```

- Opens the dev server at `http://localhost:5173/` by default.
- You can preview your widget using the `index.html` file in the root or `public/`.

---

## Build for Production

Build the widget for production:

```bash
pnpm run build
```

- Generates the optimized JS bundle in the `dist/` folder.
- The main bundle is named `internal-app.js`.

---

## Preview Production Build

Preview the production build locally:

```bash
pnpm run preview
```

- Opens a local server (default `http://localhost:4173/`) serving the production build.
- Use this to test your widget exactly like it will run in Rails.

---

## Folder Structure

```
project/
├─ public/         # optional static assets or test HTML
│  └─ index.html
├─ src/            # React source code
│  └─ main.tsx
├─ vite.config.ts  # Vite configuration
└─ package.json
```

---

## Notes

- By default, the widget mounts to a `div` with `id="my-widget"` in your HTML.
- All dependencies (including React) are bundled in `internal-app.js`.
- For Rails integration, just include:

```erb
 <interal-app></interal-app>
<script type="module" src="/path/to/internal-app.js"></script>
```
