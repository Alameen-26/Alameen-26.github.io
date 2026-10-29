<!-- Added in v0.1.0: "Made by NiyiSoft" mark -->
<p align="right"><img src="assets/img/niyisoft-badge.svg" alt="Made by NiyiSoft" width="140"></p>

# NiyiSoft Portfolio

My personal portfolio website: who I am, the projects I've built, my skills and how to reach me.
It is a plain static site (HTML, CSS and a little vanilla JavaScript) with no build step, so it runs
straight from the folder and on GitHub Pages.

- Works on phones, tablets and desktops
- Light and dark mode (follows your system setting; the toggle remembers your choice)
- Accessible: semantic HTML, skip link, keyboard navigation, alt text, WCAG AA contrast
- Works without JavaScript (only the theme toggle and the phone menu need it)

## Quick start (Windows PowerShell)

**Option 1: just open it.** Double-click `index.html`, or run:

```powershell
cd portfolio
start index.html
```

**Option 2: local web server** (closest to how GitHub Pages serves it). You need
[Python 3.10 or newer](https://www.python.org/downloads/):

```powershell
cd portfolio
python -m http.server 8000
```

Then open <http://localhost:8000> in your browser. Press `Ctrl+C` in PowerShell to stop the server.

## Editing

| What                        | Where                                   |
| --------------------------- | --------------------------------------- |
| Text, projects, contact     | `index.html`                            |
| Colours, layout, dark mode  | `assets/css/style.css` (base styles), then `assets/css/niyisoft-theme.css` (NiyiSoft light/dark theme, loaded after it) |
| Theme toggle, phone menu    | `assets/js/main.js`                     |
| Images and NiyiSoft badges  | `assets/img/`                           |

If you add a placeholder later, mark it `TODO(owner)` in `index.html` and wrap it in `<span class="todo">` so it shows on the page as a
yellow dashed box, so nothing is published by accident. Search for `TODO` to find them all.

## Project screenshots

- `tk-terminal.svg`, `tk-report-top.svg`, `tk-report-upgrades.svg`: the PC Diagnostics Toolkit (main branch)
  in the terminal and its HTML report, from the built-in demo PC (example data, not a real PC).
- `ck-menu-desktop.svg`, `ck-chat-desktop.svg`, `ck-mobile.svg`: Cooking with Cookie (main branch) menu and
  Ask Cookie chat on desktop and on a phone.
- `ns-scan.svg`, `ns-http-check.svg`, `ns-help-ping.svg`: NetScope (main branch) port scan with its guard rails,
  HTTP/TLS check, and help and ping, run against this computer (localhost) and local test servers only.
- Bug Tracker and Network Inventory & Troubleshooting Tool show a striped "Screenshot coming soon"
  placeholder until they are built.

## Publishing

Published as `Alameen-26/Alameen-26.github.io`, which GitHub Pages serves at
<https://alameen-26.github.io>. Pushing to `main` updates the live site.

Images in `assets/img/` are SVG files that wrap the screenshots and badges (embedded as base64 PNG or
JPEG), so the repository holds only text files.

## License

All rights reserved. No license is granted to copy, modify or redistribute this code or its content.
