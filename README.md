<div align="center">

<img src="assets/svg/hero-banner.svg" alt="MAEC growth report, 4 months of impact. 1 Jul to 31 Oct 2026." width="100%">

<br>

![HTML5](https://img.shields.io/badge/HTML5-static-0066CC?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-custom%20properties-00CCCC?style=flat-square&logo=css3&logoColor=073b3b)
![JavaScript](https://img.shields.io/badge/JavaScript-vanilla-333333?style=flat-square&logo=javascript&logoColor=white)
![Dependencies](https://img.shields.io/badge/dependencies-none-1f9d63?style=flat-square)
![Period](https://img.shields.io/badge/period-1%20Jul%20%E2%80%93%2031%20Oct%202026-5b6573?style=flat-square)

</div>

# MAEC Performance Report

A six-page static website that presents the digital marketing results for **[maec.ai](https://maec.ai)** between **1 July and 31 October 2026**: quality backlinks, brand building and a cleaner, faster path to demo bookings. It was prepared by **Mohamed Ismail** (Digital Marketing) for **MAEC by IntoAEC**.

There is no build step and no package to install. Open `index.html` and the report is ready.

---

## Highlights

<p align="center">
  <img src="assets/svg/kpi-highlights.svg" alt="Domain authority 5 to 14, active users 3k up 238.7 percent, sessions 3.8k up 148.5 percent, demo page speed 4 to 90 plus" width="100%">
</p>

| Metric | Result |
| --- | --- |
| Domain authority | **5 → 14** (+9 points) |
| Active users | **3k** (+238.7%) |
| Sessions | **3.8k** (+148.5%) |
| Demo booking page speed | **4 → 90+** on PageSpeed (clone page) |

---

## What the report covers

| # | Page | What it shows |
| --- | --- | --- |
| 01 | [`index.html`](index.html) | Introduction, profile card and headline numbers |
| 02 | [`achievements.html`](achievements.html) | The eight activities delivered over the four months |
| 03 | [`website.html`](website.html) | GA4 growth, top pages and traffic sources for maec.ai |
| 04 | [`seo.html`](seo.html) | Domain authority, backlink clean-up, organic traffic and ranking keywords |
| 05 | [`social.html`](social.html) | Instagram, LinkedIn and Facebook performance |
| 06 | [`letters.html`](letters.html) | Preview and download of the internship and recommendation letters |

<p align="center">
  <img src="assets/svg/site-flow.svg" alt="A dot travels across the six report pages, which all share styles.css and app.js" width="100%">
</p>

---

## Authority and page speed

Domain authority rose from 5 to 14 through quality backlink work, and the clone demo-booking pages for IntoAEC and MAEC now score above 90 on PageSpeed.

<p align="center">
  <img src="assets/svg/authority-speed-gauges.svg" alt="Two gauges: domain authority 5 to 14 and demo booking page speed 4 to 90 plus" width="100%">
</p>

## Website analytics

Google Analytics 4, 1 Jul – 31 Oct 2026. Google is the largest source of first-user traffic at 43.8%.

<p align="center">
  <img src="assets/svg/website-analytics.svg" alt="GA4 growth bars for active users, sessions, event count and total users, plus first-user traffic sources" width="100%">
</p>

<details>
<summary><b>Top pages by views</b> (share of 893 views, all from Mexico)</summary>

| Page | Share |
| --- | --- |
| Home | 44.2% |
| Request demo | 13.2% |
| Pricing | 7.4% |
| Takeoff software | 6.4% |
| Demo confirmed | 2.8% |

</details>

## SEO and backlinks

Backlinks improved by more than 50% (source: Ubersuggest), 129 spam links were flagged across 85 root domains, and the site health score reached 83 / 100 across 211 crawled pages.

<p align="center">
  <img src="assets/svg/seo-trends.svg" alt="Column charts of estimated organic traffic and ranking keywords from July to October, with backlink, spam link and site health stats" width="100%">
</p>

## Social media

<p align="center">
  <img src="assets/svg/social-reach.svg" alt="Instagram, LinkedIn and Facebook panels with views, impressions, interactions and non-follower reach" width="100%">
</p>

| Platform | Period | Headline numbers |
| --- | --- | --- |
| Instagram | Last 90 days | 1,908 views, 108 interactions, 41 accounts engaged, 76 followers. 65% of views came from non-followers. |
| LinkedIn | 1 Jul – 31 Oct 2026, organic | 3,896 impressions, 231 clicks, 322 reactions |
| Facebook | 1 Jul – 17 Oct 2026 | 45,488 views, 1,303 three-second views (45%), 98.1% of views from non-followers |

## Major achievements

<p align="center">
  <img src="assets/svg/achievements-timeline.svg" alt="Eight achievements appear one by one with a running delivered counter" width="100%">
</p>

---

## Run it locally

Open `index.html` in any modern browser. To serve it the way a host would:

```bash
# from the project root
python -m http.server 8000
# then visit http://localhost:8000
```

Fonts (Poppins and Roboto Mono) load from Google Fonts, so the first visit needs an internet connection. Without it the site falls back to system fonts.

> **Letters page:** `letters.html` previews `assets/letters/internship-letter.pdf` and `assets/letters/recommendation-letter.pdf`. Drop those two files into `assets/letters/` for the preview and download buttons to work.

## Project structure

```text
maec-report/
├── index.html              Introduction and highlights
├── achievements.html       Eight delivered activities
├── website.html            GA4 analytics
├── seo.html                Authority, backlinks, organic reach
├── social.html             Instagram, LinkedIn, Facebook
├── letters.html            Letter preview and download
├── styles.css              Design tokens, layout and motion
├── app.js                  Scroll reveal, count-up, menu, page transitions, letter modal
└── assets/
    ├── logo.png
    ├── logo-mark.png
    ├── letters/            PDF letters (add files here)
    ├── svg/                Animated motion graphics used in this README
    └── gif/                GIF versions of the same animations
```

## Design system

The site uses the IntoAEC brand palette, defined once as CSS custom properties in [`styles.css`](styles.css).

| Token | Value | Used for |
| --- | --- | --- |
| `--ocean` | `#0066CC` | Primary actions, headline numbers |
| `--lagoon` | `#00CCCC` | Accents, growth arrows, secondary bars |
| `--onyx` | `#333333` | Body text |
| `--muted` | `#5b6573` | Secondary text |
| `--success` | `#1f9d63` | Positive-change chips |
| `--bg` | `#f5f7fa` | Page background |

Typography is **Poppins** for text and **Roboto Mono** for figures.

## Motion and accessibility

- Sections reveal on scroll, numbers count up once they enter the viewport, and pages fade between navigations.
- Interactive elements keep a visible focus ring and 44px minimum touch targets.
- The animated SVGs in this README include `prefers-reduced-motion` support: with reduced motion on, they show their final state without moving.

---

## Animation assets

Every animation exists as a lightweight **SVG** (used above, pure CSS keyframes, no scripts) and as a **GIF** for places that do not render animated SVG, such as some email clients and chat apps. All of them loop seamlessly and are built from the real report numbers.

| Animation | SVG | GIF | Loop |
| --- | --- | --- | --- |
| Hero banner | [`hero-banner.svg`](assets/svg/hero-banner.svg) | [`hero-banner.gif`](assets/gif/hero-banner.gif) | 9 s |
| Highlight cards | [`kpi-highlights.svg`](assets/svg/kpi-highlights.svg) | [`kpi-highlights.gif`](assets/gif/kpi-highlights.gif) | 8 s |
| Authority and speed gauges | [`authority-speed-gauges.svg`](assets/svg/authority-speed-gauges.svg) | [`authority-speed-gauges.gif`](assets/gif/authority-speed-gauges.gif) | 9 s |
| Website analytics | [`website-analytics.svg`](assets/svg/website-analytics.svg) | [`website-analytics.gif`](assets/gif/website-analytics.gif) | 10 s |
| SEO trends | [`seo-trends.svg`](assets/svg/seo-trends.svg) | [`seo-trends.gif`](assets/gif/seo-trends.gif) | 11 s |
| Social reach | [`social-reach.svg`](assets/svg/social-reach.svg) | [`social-reach.gif`](assets/gif/social-reach.gif) | 12 s |
| Achievements timeline | [`achievements-timeline.svg`](assets/svg/achievements-timeline.svg) | [`achievements-timeline.gif`](assets/gif/achievements-timeline.gif) | 12 s |
| Page flow | [`site-flow.svg`](assets/svg/site-flow.svg) | [`site-flow.gif`](assets/gif/site-flow.gif) | 12 s |

<details>
<summary><b>GIF gallery</b></summary>

<br>

<p align="center">
  <img src="assets/gif/hero-banner.gif" alt="Hero banner animation" width="100%"><br><br>
  <img src="assets/gif/kpi-highlights.gif" alt="Highlight cards animation" width="100%"><br><br>
  <img src="assets/gif/authority-speed-gauges.gif" alt="Authority and speed gauges animation" width="100%"><br><br>
  <img src="assets/gif/website-analytics.gif" alt="Website analytics animation" width="100%"><br><br>
  <img src="assets/gif/seo-trends.gif" alt="SEO trends animation" width="100%"><br><br>
  <img src="assets/gif/social-reach.gif" alt="Social reach animation" width="100%"><br><br>
  <img src="assets/gif/achievements-timeline.gif" alt="Achievements timeline animation" width="100%"><br><br>
  <img src="assets/gif/site-flow.gif" alt="Page flow animation" width="100%">
</p>

</details>

---

<div align="center">

**IntoAEC · Power Up Your Business**<br>
MAEC Report · Jul – Oct 2026

</div>
