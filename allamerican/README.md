# All American Appliance Repair, Inc.

Website for **All American Appliance Repair, Inc.** — Family-owned appliance repair serving Laguna Niguel and Orange County, CA since 1992.

**Live site:** [allamericanapp.com](https://allamericanapp.com)

---

## Pages

| File | Description |
|---|---|
| `index.html` | Homepage — hero, services overview, testimonials, FAQs, contact |
| `services.html` | Detailed service pages (refrigerator, washer, dryer, dishwasher) |
| `schedule-service.html` | Appointment request form |

## Structure

```
/
├── index.html
├── services.html
├── schedule-service.html
├── hero-video.mp4
├── css/
│   └── style.css
├── js/
│   └── main.js
└── images/
    └── (all site images)
```

## Contact Form

The contact form uses [Formspree](https://formspree.io). To activate it:
1. Create a free Formspree account at formspree.io
2. Create a new form and get your form ID
3. Replace `https://formspree.io/f/aa_appliance@yahoo.com` in `index.html` and `schedule-service.html` with your actual Formspree endpoint URL

## GitHub Pages Setup

1. Go to **Settings → Pages**
2. Set Source to **Deploy from a branch**
3. Select **main** branch, **/ (root)** folder
4. Save — your test URL will be `https://yourusername.github.io/repo-name`

## Custom Domain

Once the site is ready:
1. Add `allamericanapp.com` in **Settings → Pages → Custom domain**
2. Update DNS at StablePoint to point to GitHub's nameservers

## Business Info

- **Phone:** 949-458-8896
- **Email:** aa_appliance@yahoo.com
- **License:** A45443
- **Hours:** Mon–Fri 8AM–5PM | Sat 9AM–2PM | Sun Closed
