# VoltEdge Solutions - Website Project

## Student Information
- Module: Web Development (Introduction)
- Module Code: WEDE5020
- Part: Part 2 - Designing the Visuals

---

## Project Overview

VoltEdge Solutions is a fictional full-service electrical and maintenance company based in Cape Town, South Africa. This website was built as part of the WEDE5020 Portfolio of Evidence. Part 1 covered the HTML structure and content across all five pages. Part 2 added all CSS styling, responsive design, and visual improvements. JavaScript functionality will be added in Part 3.

---

## Website Goals and Objectives

- Give VoltEdge Solutions a proper online presence
- Clearly display all the services the company offers
- Allow visitors to submit a service enquiry form
- Show two business locations with embedded Google Maps
- Be easy to navigate across all five pages

Key targets after launch include getting 500 unique visitors per month, receiving 20 form submissions per month, and keeping the bounce rate below 50 percent.

---

## Key Features and Functionality

- Sticky navigation bar with hover and active pseudo-class states
- Hero section with background image and semi-opaque overlay
- Service cards with yellow left border and box shadow
- Team cards with portrait area on the about page
- Styled enquiry and contact forms with focus states on all inputs
- Two location cards with embedded Google Maps on the contact page
- Fully responsive layout for desktop, tablet, and mobile
- External CSS stylesheet linked to all five pages

---

## File and Folder Structure

```
voltedge/
├── index.html        - Homepage
├── about.html        - About Us page
├── services.html     - Services page
├── enquiry.html      - Get a Quote page
├── contact.html      - Contact Us page
├── css/
│   └── style.css     - External stylesheet
├── js/
│   └── main.js       - JavaScript file (to be completed in Part 3)
├── images/           - Folder for all image assets
└── README.md         - This file
```

---

## Sitemap

```
VoltEdge Solutions Website

Home (index.html)
- Hero section with background image and call to action buttons
- Why choose us section
- Services overview with six service summaries

About Us (about.html)
- Company history and story
- Mission and vision statements
- Company values
- Team member cards with portrait placeholders

Services (services.html)
- Electrical Services
  - Residential electrical
  - Commercial electrical
  - Certificates of Compliance
  - Distribution board upgrades
- Solar and Renewable Energy
  - Solar panel installation
  - Battery storage and hybrid systems
  - Solar geyser installation and maintenance
- Pool, Hot Tub, and Water Feature Pumps
  - Pool pump servicing and repair
  - Hot tub and spa pump repair
  - Water feature and fountain pump maintenance

Get a Quote (enquiry.html)
- Enquiry form with personal details
- Service category dropdown
- Urgency and preferred contact time dropdowns
- Message text area
- What happens next section

Contact Us (contact.html)
- Head office location with Google Maps embed
- Bellville branch location with Google Maps embed
- General contact form
```

---

## Timeline and Milestones

| Phase | Tasks | Status |
|---|---|---|
| Weeks 1 and 2 - Part 1 | Proposal approved, GitHub set up, content researched, file structure created | Complete |
| Weeks 3 and 4 - Part 1 | All five HTML pages built, navigation working, content added | Complete |
| Weeks 5 and 6 - Part 2 | External CSS stylesheet, responsive design, styling | Complete |
| Weeks 7 and 8 - Part 3 | JavaScript, form validation, SEO finalised | Pending |
| Week 9 | Final testing, submission | Pending |

---

## Part 1 Details

Pages created:
1. index.html - Homepage
2. about.html - About Us
3. services.html - Services
4. enquiry.html - Get a Quote
5. contact.html - Contact Us

HTML elements used across all pages:
- Semantic elements: header, nav, main, section, article, footer, fieldset, legend
- Headings: h1, h2, h3
- Paragraphs, unordered lists, ordered lists
- Anchor tags linking all five pages together
- HTML forms with input, textarea, select, option, optgroup, and button elements
- iframe embeds for Google Maps on the contact page (two locations as required)
- Meta tags for SEO on all pages
- HTML comments throughout all files

---

## Part 2 Details

CSS features implemented:

- CSS reset to ensure consistent styling across all browsers
- Base body styles including font family, font size, line height, and background colour
- Typography styles for all six heading levels and paragraph text
- Sticky header with yellow bottom border
- Navigation with hover background and active yellow underline pseudo-classes
- Hero section with background image and semi-opaque navy overlay
- Service article cards with yellow left border and box shadow
- Team member cards with portrait area, role label, and info section
- Fieldset and legend styling for grouped form sections
- Input, select, and textarea styling with focus pseudo-class border highlight
- Submit button with hover state
- Location cards with yellow top border and embedded iframe maps
- Footer split into brand column and contact column with copyright bar
- Media query at 768px for tablet layout adjustments
- Media query at 480px for mobile layout adjustments
- Responsive navigation that stacks on smaller screens
- Responsive team grid that goes from four columns to two to one
- Responsive hero overlay that fills full width on smaller screens

---

## Changelog

### Version 2.0.0 - 29 May 2026
- Created external stylesheet style.css and linked to all five pages
- Added CSS reset, base body styles, and typography for all heading levels
- Styled header with sticky positioning, yellow bottom border, and logo sizing
- Updated navigation with hover background and active page yellow underline
- Added hero section with background image and semi-opaque overlay on index page
- Styled service article cards with yellow left border and box shadow
- Added team member cards with portrait area and role label on about page
- Styled fieldsets, legends, labels, inputs, selects, and textarea on enquiry page
- Added focus pseudo-class highlight to all form inputs
- Styled submit button with yellow background and hover state
- Added location card layout with Google Maps iframes on contact page
- Updated footer with two column layout and copyright bar
- Added responsive media queries for tablet at 768px and mobile at 480px
- Removed duplicate CSS rules from stylesheet

### Version 1.0.0 - 27 April 2026
- Created folder and file structure including css, js, and images folders
- Built all five HTML pages with semantic HTML5 structure
- Added navigation menu linking all pages on every page
- Added content to all five pages
- Added enquiry form with service category, urgency, and contact time dropdowns
- Added general contact form on the contact page
- Embedded Google Maps for two office locations on the contact page
- Created placeholder style.css file ready for Part 2
- Created placeholder main.js file ready for Part 3
- Added HTML comments to all pages explaining the code structure
- Created README.md with sitemap, changelog, and references

---

## References

Google Maps Platform 2024. Embed a map. Available at: https://developers.google.com/maps/documentation/embed [Accessed 27 April 2026].

MDN Web Docs 2024. HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 27 April 2026].

MDN Web Docs 2024. HTML forms. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms [Accessed 27 April 2026].

MDN Web Docs 2024. CSS: Cascading Style Sheets. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 29 May 2026].

MDN Web Docs 2024. Using media queries. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 29 May 2026].

W3Schools 2024. HTML Tutorial. Available at: https://www.w3schools.com/html [Accessed 27 April 2026].

W3Schools 2024. CSS Tutorial. Available at: https://www.w3schools.com/css [Accessed 29 May 2026].

Google 2026. Gemini AI image generator. Images generated using Gemini for use as website assets including the company logo and hero background image. Available at: https://gemini.google.com [Accessed 29 May 2026].