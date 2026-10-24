# Jason Patrick | Developer Portfolio

Personal portfolio of Jason Patrick, a first-year student at the Indian Institute of Information Technology, Bhopal. It covers my skills, projects, competitive programming profile and achievements.

**Live site:** <!-- TODO: add your Vercel URL, e.g. https://portfolio-yourname.vercel.app -->

## About the site

A single-page, dark-themed portfolio with a synthwave sunset hero and HUD-style panels, organized into six sections:

- **Start:** introduction and links to my profiles
- **Skills:** languages, web development, tools and interests
- **Projects:** things I've built, with demo and source links
- **Contests:** Codeforces and CodeChef progress
- **Trophies:** competitions and college activities
- **Contact:** email and social links

## Tech stack

- HTML5, CSS3 and vanilla JavaScript
- No frameworks and no build step
- Google Fonts: Chakra Petch, Figtree and JetBrains Mono
- Hosted on Vercel

## Features

- Responsive layout for desktop, tablet and mobile
- Section minimap for navigation (a bottom dock on small screens)
- Keyboard-friendly, with visible focus states and a skip link
- Respects the reduced-motion setting
- One-click "Copy email address" button

## Project structure

```
.
├── index.html   # page markup and content
├── style.css    # theme, layout and responsive rules
├── script.js    # minimap, count-up stats, copy-email button
└── assets/      # images (currently unused)
```

## Run locally

No installation needed. Clone the repo and open `index.html` in a browser:

```bash
git clone https://github.com/JasonPatrick177013/portfolio.git
cd portfolio
```

To serve it on a local address instead, run `python3 -m http.server 8000` and visit `http://localhost:8000`.

## Deploy

The site is a static project, so Vercel serves it with no configuration. Import the repo on [vercel.com](https://vercel.com), set the framework preset to **Other**, leave the build settings empty and deploy. Each push to `main` redeploys automatically.

## Contact

- GitHub: [JasonPatrick177013](https://github.com/JasonPatrick177013/)
- LinkedIn: [Jason Patrick](https://www.linkedin.com/in/jason-patrick-0025b22b2)
- CodeChef: [azeotrope](https://www.codechef.com/users/azeotrope)
- Email: [jasonpatrick3011@gmail.com](mailto:jasonpatrick3011@gmail.com)

&copy; 2026 Jason Patrick
