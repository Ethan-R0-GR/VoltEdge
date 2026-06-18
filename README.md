# VoltEdge Solutions - Website Project

## Student Information
- Module: Web Development (Introduction)
- Module Code: WEDE5020
- Part: Part 3 - Enhancing Functionality and SEO

---

## Project Overview

VoltEdge Solutions is a fictional full-service electrical and maintenance company based in Cape Town, South Africa. This website was built as part of the WEDE5020 Portfolio of Evidence. Part 1 covered the HTML structure and content. Part 2 added CSS styling and responsive design. Part 3 adds JavaScript functionality, form validation, EmailJS integration, SEO improvements, and deployment.

---

## Website Goals and Objectives

- Give VoltEdge Solutions a proper online presence
- Clearly display all the services the company offers
- Allow visitors to submit a service enquiry form that sends a real email
- Show two business locations with embedded Google Maps
- Be easy to navigate across all five pages

Key targets after launch include getting 500 unique visitors per month, receiving 20 form submissions per month, and keeping the bounce rate below 50 percent.

---

## Key Features and Functionality

- Sticky navigation bar with hover and active pseudo-class states
- Hero section with background image and semi-opaque overlay
- Service cards with yellow left border, box shadow, and grow animation on hover
- Team cards with portrait photos and a lightbox gallery on the about page
- Collapsible accordion sections on the services page
- Live search bar that filters services by keyword on the services page
- Enquiry form with full JavaScript validation and silent EmailJS submission
- Contact form with full JavaScript validation and silent EmailJS submission
- Two location cards with embedded Google Maps on the contact page
- Fully responsive layout for desktop, tablet, and mobile
- SEO meta tags, descriptive alt text, and optimised titles on all pages
- robots.txt and sitemap.xml created for search engine crawlers

---

## File and Folder Structure

```
voltedge/
├── index.html        - Homepage
├── about.html        - About Us page
├── services.html     - Services page
├── enquiry.html      - Get a Quote page
├── contact.html      - Contact Us page
├── robots.txt        - Instructs search engine crawlers
├── sitemap.xml       - Site structure for search engines
├── css/
│   └── style.css     - External stylesheet
├── js/
│   ├── about.js      - Lightbox gallery for team portraits
│   ├── services.js   - Accordion and search bar
│   ├── enquiry.js    - Enquiry form validation and EmailJS
│   └── contact.js    - Contact form validation and EmailJS
├── Images/           - Folder for all image assets
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
- Team member cards with portrait photos and lightbox gallery

Services (services.html)
- Live search bar to filter services by keyword
- Collapsible accordion sections
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
- Enquiry form with JavaScript validation
- Service category, urgency, and contact time dropdowns
- Silent email submission via EmailJS
- What happens next section

Contact Us (contact.html)
- Head office location with Google Maps embed
- Bellville branch location with Google Maps embed
- General contact form with JavaScript validation
- Silent email submission via EmailJS
```

---

## Timeline and Milestones

| Phase | Tasks | Status |
|---|---|---|
| Weeks 1 and 2 - Part 1 | Proposal approved, GitHub set up, content researched, file structure created | Complete |
| Weeks 3 and 4 - Part 1 | All five HTML pages built, navigation working, content added | Complete |
| Weeks 5 and 6 - Part 2 | External CSS stylesheet, responsive design, styling | Complete |
| Weeks 7 and 8 - Part 3 | JavaScript, form validation, SEO finalised | Complete |
| Week 9 | Final testing, submission | Complete |

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
- Headings: h2, h3
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
- Service article cards with yellow left border, box shadow, and hover grow animation
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
- Accordion section styles with collapsible body and toggle icon
- Search bar styles for the services page
- Lightbox overlay styles for the team portrait gallery
- Form validation error and success message styles

---

## Part 3 Details

JavaScript features implemented:

- about.js: Lightbox gallery that opens team portrait photos full screen with name and role caption. Closes on X button, outside click, or Escape key
- services.js: Accordion that collapses and expands each service category. Live search bar that filters service articles by keyword and auto-opens matched sections
- enquiry.js: Full client-side validation on all required fields including email format and phone number format. Silent background email submission using EmailJS with no page redirect. Submit button disables while sending. Success message replaces the form on completion
- contact.js: Full client-side validation on all required fields. Silent background email submission using EmailJS. Same behaviour as enquiry form

SEO improvements:
- Descriptive and unique title tags on all five pages
- Unique meta description on all five pages
- Relevant meta keywords on all five pages
- Descriptive alt text on all images across all pages
- Descriptive title attributes on all Google Maps iframes
- Internal links between pages throughout the site
- robots.txt created to guide search engine crawlers
- sitemap.xml created to help search engines index all pages

---

## Responsive Design Screenshot Evidence

Add screenshots here after testing in Chrome DevTools:

- Desktop view (1280px wide)
- Tablet view (768px wide)
- Mobile view (375px wide)

To take screenshots: Open Chrome, press F12, click the device toolbar icon at the top, set the width, and take a screenshot.

---

## Changelog

### Version 3.0.0 - 18 June 2026
- Added lightbox gallery for team portraits on about page
- Updated all portrait alt text to be fully descriptive for SEO
- Added collapsible accordion sections to services page
- Added live search bar to services page that filters by keyword
- Added JavaScript validation to enquiry form with inline error messages
- Integrated EmailJS for silent background email sending on enquiry form
- Added JavaScript validation to contact form with inline error messages
- Integrated EmailJS for silent background email sending on contact form
- Updated all image alt text across all pages to be descriptive
- Updated meta keywords on services and about pages
- Added active class to nav links on each respective page
- Created robots.txt to instruct search engine crawlers
- Created sitemap.xml to help search engines index the site
- Added form error and success CSS styles to stylesheet
- Added accordion and search bar CSS to stylesheet
- Added lightbox CSS to stylesheet
- Updated file and folder structure in README to reflect new JS files

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

EmailJS 2026. EmailJS - Send email directly from JavaScript. Available at: https://www.emailjs.com [Accessed 18 June 2026].

Google Maps Platform 2024. Embed a map. Available at: https://developers.google.com/maps/documentation/embed [Accessed 27 April 2026].

Google 2026. Gemini AI image generator. Images generated using Gemini for use as website assets including the company logo, hero background image, and team portrait photos. Available at: https://gemini.google.com [Accessed 29 May 2026].

MDN Web Docs 2024. HTML: HyperText Markup Language. Available at: https://developer.mozilla.org/en-US/docs/Web/HTML [Accessed 27 April 2026].

MDN Web Docs 2024. HTML forms. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms [Accessed 27 April 2026].

MDN Web Docs 2024. CSS: Cascading Style Sheets. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS [Accessed 29 May 2026].

MDN Web Docs 2024. Using media queries. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries [Accessed 29 May 2026].

MDN Web Docs 2024. JavaScript. Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript [Accessed 18 June 2026].

W3Schools 2024. HTML Tutorial. Available at: https://www.w3schools.com/html [Accessed 27 April 2026].

W3Schools 2024. CSS Tutorial. Available at: https://www.w3schools.com/css [Accessed 29 May 2026].

W3Schools 2024. JavaScript Tutorial. Available at: https://www.w3schools.com/js [Accessed 18 June 2026].