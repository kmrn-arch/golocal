# GoLocal — Static Website

A complete static HTML/CSS/JS version of the GoLocal travel-assistant marketing site. **No build step**, **no framework**, ready to deploy to GitHub Pages.

## Pages

- `index.html` — Home (hero, problem, solution, features, how it works, trust, demo, testimonials, download)
- `features.html` — All 12 features
- `safety.html` — Safety pillars
- `partners.html` — Partner pitch + application form
- `pricing.html` — Pricing tiers
- `about.html` — Mission & roadmap
- `contact.html` — Contact form
- `download.html` — App store buttons + waitlist
- `demo.html` + `demo-*.html` — Live Baku demo (emergency, transport, info, places)
- `privacy.html` / `terms.html` — Legal

## Languages
EN / RU / AZ / TR via the language switcher in the header (saved to `localStorage`).

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `golocal-site`).
2. Upload all files from this folder to the repo root (the `index.html` MUST be at the repo root for GitHub Pages).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source = Deploy from a branch**, select **`main` / root**, and save.
5. Wait ~1 minute. Your site will be live at `https://<username>.github.io/<repo>/`.

For a custom domain: add a `CNAME` file containing your domain and configure DNS.

## Replace placeholders with real photos

Search the codebase for `photo-placeholder` divs. Replace each one with:

```html
<img src="images/your-photo.jpg" alt="Description" />
```

Suggested real photos to add:
- Baku Old City (İçərişəhər)
- Flame Towers at night
- Maiden Tower
- Heydar Aliyev Center
- Baku Boulevard / Caspian sea
- Baku Metro map
- Team or city skyline (about page)

Place images in an `images/` subfolder.

## Files
```
index.html
styles.css
i18n.js     ← translations EN/RU/AZ/TR
main.js     ← language switcher + form handlers
[other html pages]
```
