# seenamohajeran.com

Personal portfolio website built with Vite and vanilla HTML/CSS/JS.

## Stack

- **Vite** — build tool and dev server
- **HTML / CSS / JS** — no frameworks

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Output goes to `dist/`.

## Structure

```
public/
  favicon.svg
  images/        # profile photo
  resume/        # resume PDF
src/
  main.js
  style.css
index.html
```

## Deployment

Set `base` in `vite.config.js` before deploying:
- Custom domain or root path → `base: '/'` (default)
- GitHub Pages subpath → `base: '/repo-name/'`
