# Personal Portfolio — AI Engineer & Creative Developer

A modern, fully static portfolio website. No build tools required — open `index.html` directly in a browser.

## Quick Start

```bash
# Open directly
start index.html   # Windows
open index.html    # macOS

# Or serve locally (optional, for GitHub API to work)
python -m http.server 8080
# then visit http://localhost:8080
```

## Customize

### 1. Personal Info — `assets/js/config.js`
Edit `PORTFOLIO_CONFIG` to set your name, email, GitHub username, social links, and stats.

### 2. Profile Photo
- Replace the emoji placeholder in the hero and about sections with:
  ```html
  <img class="hero-avatar" src="assets/images/avatar.jpg" alt="Your Name" />
  ```
- Add your photo to `assets/images/avatar.jpg`

### 3. Projects
Edit the project cards in `index.html` inside `#projects-grid`. Each card has:
- `data-category="ai|web|design"` for filter tabs
- Title, description, tech tags, GitHub/live links

To enable **live GitHub projects**, set `GITHUB_USER` in `assets/js/main.js` to your GitHub username.

### 4. Skills
Edit the skill bars in the `#skills` section. Change `data-width` (0–100) for each skill.

### 5. Creative Gallery
Replace the emoji placeholders in `#creative` with real images:
```html
<img src="assets/images/design-1.jpg" alt="Project name" style="width:100%;height:100%;object-fit:cover;" />
```

### 6. Career Timeline
Edit the `.timeline-item` entries in `#career` with your actual experience.

### 7. Resume
Place your resume at `assets/resume.pdf` — the "Download CV" button will work automatically.

### 8. Colors
All colors are CSS variables in `assets/css/style.css`:
```css
--accent-purple: #7c3aed;
--accent-cyan: #06b6d4;
```
Change these to match your brand.

## Sections

| Section | Purpose |
|---------|---------|
| Hero | Animated intro with typewriter, particle canvas, floating badges |
| About | Bio, personality cards, downloadable resume |
| Skills | Animated skill bars + tech badge cloud |
| Projects | Filterable project cards + optional live GitHub repos |
| Creative | Masonry gallery for UI design, AI art, motion, branding |
| Career | Timeline (experience) + Ambitions cards |
| Contact | Form + social links |

## Stack

- Pure HTML5 / CSS3 / Vanilla JS — zero dependencies
- Inter font (Google Fonts CDN)
- Canvas API for hero particle animation
- Intersection Observer for scroll animations
- GitHub REST API for live repo cards

## Deploy

**GitHub Pages** (recommended):
1. Push this folder to a GitHub repo
2. Go to Settings → Pages → Deploy from branch `main` / `root`
3. Your site will be live at `https://username.github.io/repo-name`

**Netlify / Vercel**: Drag and drop the folder — it works instantly.
