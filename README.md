# MEHRAN RED TEAM EXPERT — Pro V3

A responsive, static cybersecurity learning portfolio.

## What's included
- Home, About, Roadmap, Skills, Tools, Labs, Projects, Write-ups, Contact, Ethics & Safety, Privacy and 404 pages.
- Responsive mobile navigation and searchable tools directory.
- Accessibility basics: skip link, semantic landmarks, visible focus, labels and reduced-motion support.
- Per-page titles/descriptions and social preview metadata.
- Sitemap and robots file templates.
- Honest project templates; no invented certifications, employment or client claims.

## Configure before publishing
1. Open `assets/config.js`.
2. Add only a dedicated public email and public profile URLs you are comfortable sharing. Keep blank if unsure. The contact form remains inactive until a public email is configured.
3. The sitemap and robots file are set to the previously published GitHub Pages address. If your repository URL changes, update both files.
4. Review all content and external links.

## Preview on Kali Linux
Open a terminal in this folder and run:
```bash
python3 -m http.server 8000
```
Then open `http://127.0.0.1:8000`.

## Publish to GitHub Pages
Upload the *contents* of this folder to the repository root, not the outer folder. Keep `index.html` and `assets/` at the root level. Commit changes and wait for GitHub Pages deployment.

## Important limitations
This is a static website. The contact form prepares an email draft through the visitor's email app; it does not deliver or store messages on the site. There is no backend, database, authentication, admin dashboard, analytics or server-side form processing.

## Security and privacy
Use HTTPS hosting. Do not publish private personal information, secrets, tokens or unapproved lab evidence. Only document authorized training work.
