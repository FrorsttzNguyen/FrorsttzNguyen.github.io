# Nguyen Phuong Nhat Hien — Portfolio

Personal portfolio site. Hand-built, no framework: HTML, CSS, vanilla JS.
Two color palettes with a toggle (blaugrana / terminal). No build step.

## Run locally
Just open `index.html`. Or:
```bash
python3 -m http.server 8000   # then http://localhost:8000
```

## Edit content
All text/data lives in `script.js`:
- `I18N` — strings (EN/VI)
- `TIMELINE` — experience
- `RESEARCH` — publications
- `PROJECTS` — project cards (covers are CSS, no images)
- `LEARNING` — Engineer Pro track
- `SKILLS` — tiered skills

## Deploy (GitHub Pages, free)
```bash
# from this folder
gh repo create FrorsttzNguyen.github.io --public --source=. --push
# then enable Pages: Settings → Pages → Source: main / root
# live at https://frorsttznguyen.github.io
```

## Structure
```
index.html   structure
styles.css   two palettes (data-theme="blaugrana" | "terminal")
script.js    content + i18n + render
PLAN.md      CV/portfolio plan & decisions
```