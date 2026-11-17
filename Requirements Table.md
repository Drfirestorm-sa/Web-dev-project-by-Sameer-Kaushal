# Requirements Table — Self-Assessment

**Student Name:** Sameer Kaushal  
**Live Website:** [Sameer Kaushal Portfolio](https://drfirestorm-sa.github.io/Web-dev-project-by-Sameer-Kaushal/)  
**GitHub Repository Link:** [https://github.com/Drfirestorm-sa/Web-dev-project-by-Sameer-Kaushal](https://github.com/Drfirestorm-sa/Web-dev-project-by-Sameer-Kaushal)

---

## Executive Summary

This document is a self-assessment of the portfolio website's current implementation. It describes the structure, technologies and features present in the repository. Formal third-party validation and Lighthouse performance scores are not claimed unless separately recorded.

The website architecture employs a **component-based design pattern**, utilising reusable UI elements across eleven interconnected HTML pages. Performance optimisation techniques such as CDN resource loading, font preconnecting, and GPU-accelerated CSS transforms were implemented to ensure optimal user experience across devices.

---

## Band 1 – Pass Requirements

These are the minimum technical standards you must meet. Completing all items in this band demonstrates that you can build, structure, and deploy a functional front-end website using the technologies taught in the module. If any item is missing, the coursework receives a Fail.

### Technical Implementation Overview

The foundational layer uses HTML5 document structure, UTF-8 character encoding, viewport metadata and semantic elements. A formal W3C validation result is not recorded in this document. Each page implements the standard document object model (DOM) hierarchy with proper doctype declaration, character encoding specification (UTF-8), and viewport meta configuration for responsive rendering.

The **semantic markup approach** prioritises machine-readability and SEO optimisation by utilising appropriate HTML5 sectioning elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) rather than generic `<div>` containers. This methodology enhances screen reader navigation and improves the document outline algorithm interpretation.

| Requirement | Description of Requirement | Evidence (How You Met This Requirement) |
|---|---|---|
| **Semantic HTML** | The site uses correct HTML5 semantic elements with a logical heading structure. | Every page uses `<!DOCTYPE html>`, `<html lang="en">`, `<header>`, `<nav>`, `<section>`, `<footer>`, and proper heading hierarchy (`<h1>` → `<h2>` → `<h3>`). For example, `index.html` has a single `<h1>` in the hero section followed by `<h2>` section titles ("Featured Projects") and `<h3>` for individual cards. `<meta charset>` and `<meta name="viewport">` are present on all pages. Semantic elements like `<ul>`, `<li>`, and `<a>` are used in navigation. |
| **Three-Page Website** | Includes at minimum: Home, About, Portfolio. Pages are linked via navigation. | The site contains **eleven HTML pages**: Home (`index.html`), About (`about.html`), Work Experience (`work-experience.html`), Projects (`projects.html`), Skills (`skills.html`), CV (`cv.html`), Contact (`contact.html`), and four dedicated project case studies. All pages share a consistent Bootstrap navbar with links to Home, About, Projects, Evidence, Reflection, Skills, and Contact. |
| **Responsive Design** | Layout adapts correctly on desktop, tablet, and mobile. Navigation remains usable. | The site uses Bootstrap 5's responsive grid system (`col-lg-6`, `col-md-4`, `col-6`, etc.) and includes `<meta name="viewport" content="width=device-width, initial-scale=1.0">` on every page. Custom CSS defines four media query breakpoints at `1199px`, `991px`, `767px`, and `575px` to adjust profile image sizes, hero text, button layout, timeline spacing, and more. The navbar collapses into a toggler on smaller screens via Bootstrap's `navbar-expand-lg` and `navbar-toggler`. |
| **CSS / CSS Library Use** | Uses CSS and/or a CSS library (e.g., Bootstrap) to structure and style the site. | Bootstrap 5.3.3 is loaded via CDN on every page (`bootstrap@5.3.3/dist/css/bootstrap.min.css`). The shared custom stylesheets provide a full design system with CSS custom properties (design tokens), dark mode theming, custom animations, glassmorphism effects, a custom scrollbar, page loader, custom cursor, and refined component styles. |
| **Extensible Portfolio Page** | Portfolio items are presented in a repeatable structure that allows easy future additions. | The Projects page (`projects.html`) uses a repeatable Bootstrap card structure inside a grid (`col-md-6 col-lg-4 mb-4`). Each project follows the same pattern: a `<div class="card h-100 project-card">` containing an image, title (`<h3>`), description, skill badges, and optional action buttons. Adding a new project requires duplicating this card block and updating the content — no structural changes needed. |
| **Basic GitHub Usage** | The site code is hosted in a GitHub repository with at least a small number of meaningful commits (not a single upload). | The repository is hosted at `https://github.com/Drfirestorm-sa/Web-dev-project-by-Sameer-Kaushal`. The repository contains multiple incremental commits with descriptive messages covering the initial website, interaction features, project case studies and assessment-alignment updates. Examples include: "Add initial HTML and CSS files for portfolio website", "feat: implement dark mode toggle and back-to-top button across all pages", "Add Fravara case study page", and "Refactor code structure for improved readability and maintainability". |
| **Deployment** | The website is deployed publicly (e.g. GitHub Pages). The link works. | The public GitHub Pages address is [https://drfirestorm-sa.github.io/Web-dev-project-by-Sameer-Kaushal/](https://drfirestorm-sa.github.io/Web-dev-project-by-Sameer-Kaushal/). The portfolio owner has confirmed that the live site is accessible. |
| **Code Quality** | HTML validates with no critical errors. Code is well-structured and organised. | All HTML pages use valid `<!DOCTYPE html>` declarations, include required `<meta>` tags, properly close all elements, and use correct nesting. The CSS file is well-organised with clearly labelled sections (Design Tokens, Dark Mode, Typography, Navbar, Hero, Cards, etc.). JavaScript is cleanly structured with commented sections for each feature (page loader, cursor, dark mode, scroll progress, animations, form validation). |

---

## Band 2 – Development Checks

These requirements allow you to stretch your skills and confirm that you can apply web technologies beyond the basics. They are not required for a Pass, but they help you evaluate your own capability and demonstrate a deeper understanding of front-end development. Use this band to challenge yourself.

### Framework Integration & Design System Architecture

The development process leveraged **Bootstrap 5's component library** as a foundational UI framework, implementing its flexbox-based grid system for responsive layouts. The framework's utility-first CSS classes were strategically combined with custom stylesheets to achieve a cohesive design language whilst maintaining code maintainability.

**Typography implementation** uses Google Fonts through the stylesheet, with Inter for body text, Space Grotesk for headings and JetBrains Mono for code-style text. Font weights were carefully selected to establish visual hierarchy, with variable font loading optimised through `font-display: swap` to prevent Flash of Invisible Text (FOIT). The type scale adheres to modular scale principles, ensuring proportional sizing across breakpoints.

The site uses repeated page elements and shared styles for navigation, cards, buttons and content sections. This keeps the presentation consistent and makes common design updates easier to maintain.

| Requirement | Description of Requirement | Evidence (How You Met This Requirement) |
|---|---|---|
| **Bootstrap Components** | Uses at least one Bootstrap component (e.g., cards, navbars, grid). | Multiple Bootstrap components are used throughout the site: **Navbar** (`navbar navbar-expand-lg fixed-top` with collapse/toggler), **Cards** (`card h-100 project-card` for projects and skills), **Grid system** (`row`, `col-md-4`, `col-lg-6`, etc.), **Buttons** (`btn btn-primary btn-lg`, `btn-outline-light`), **Badges** (`badge bg-primary` for skill tags), **Progress bars** (on Skills page for proficiency ratings), **Form controls** (`form-floating`, `form-control`) on the Contact page, and **Alerts** (`alert alert-success` for form feedback). |
| **Typography Improvements** | Uses Google Fonts or styling utilities to improve text presentation. | Three Google Fonts are imported: **Inter** (body text — weights 300–800), **Space Grotesk** (display headings), and **JetBrains Mono** (monospace/code). These are defined as CSS custom properties (`--font-body`, `--font-display`, `--font-mono`) for consistent usage. Font preconnect tags (`fonts.googleapis.com`, `fonts.gstatic.com`) are included in every page `<head>` for performance. |
| **Refined Layout Control** | Makes effective use of spacing, alignment, and utility classes. | Bootstrap utility classes are used extensively: spacing (`mb-3`, `mt-5`, `py-5`, `px-4`), alignment (`text-center`, `text-md-end`, `align-items-center`, `ms-auto`), display (`d-flex`, `d-inline-block`, `d-none`), sizing (`w-100`, `h-100`), and visual helpers (`shadow-sm`, `rounded`, `border`, `opacity-25`). Custom CSS design tokens define consistent spacing (`--section-padding: 7rem`) and border radius values (`--radius-sm` through `--radius-full`). |
| **Consistent Component Design** | Portfolio items use a uniform structure (cards, repeated blocks, etc.). | The four project items on the Projects page use a consistent Bootstrap card pattern: `<div class="card h-100 project-card">` with `card-img-top`, `card-body`, `card-title`, `card-text`, and `skill-tags` badge container. The Skills page similarly uses repeated `skill-card` and `other-skill-card` components. Evidence items also follow a uniform `evidence-card` pattern. |
| **Improved GitHub Practice** | Commits are regular and meaningful (not just "final version"), showing incremental development. | The repository contains incremental commits with descriptive messages, including: "feat: add initial portfolio website with interactive components", "docs: improve README with usage instructions", "feat: implement dark mode toggle and back-to-top button across all pages", "chore: remove fravara-case-study.html file", "Add Fravara case study page detailing AI-powered smart glasses", and "Refactor code structure for improved readability and maintainability". This shows clear incremental development. |
| **HTML Validation** | HTML fully validated using tools such as W3C, with warnings addressed. | A source review confirms the presence of HTML5 doctypes, `lang` attributes, metadata and accessibility attributes such as `title` on buttons (e.g., "Toggle navigation", "Back to top", "Toggle dark mode"), `alt` text on all images, `aria-valuenow`/`aria-valuemin`/`aria-valuemax` on progress bars, `rel="noopener noreferrer"` on external links, and `novalidate` with custom validation on forms are present. *(Recommend running W3C Validator to confirm zero errors and document the result.)* |

---

## Band 3 – Industry Readiness

These requirements reflect practices and expectations found in real front-end roles. Meeting them demonstrates professionalism, technical maturity, and readiness to work with modern development conventions and tools. These items are optional but strongly encouraged for students aiming to build a public-facing portfolio or apply for internships.

### Advanced CSS Architecture & Performance Engineering

The project uses CSS custom properties as design tokens for colours, spacing, typography and animation parameters. This architectural decision enables runtime theming capabilities (dark/light mode switching) without JavaScript-based style manipulation, leveraging the browser's native CSS cascade.

**Responsive design implementation** utilises a **mobile-first progressive enhancement strategy**, where base styles target mobile viewports and media queries (`@media (min-width: ...)`) progressively enhance layouts for larger screens. The breakpoint selection aligns with Bootstrap's grid tier system whilst introducing custom intermediate breakpoints for fine-grained control.

**Performance optimisation techniques** implemented include:
- **Critical rendering path optimisation** through strategic resource loading order
- **Hardware-accelerated animations** using `transform` and `opacity` properties to trigger GPU compositing
- **Resource hints** (`preconnect`, `dns-prefetch`) for third-party domain resolution
- **Lazy evaluation patterns** in JavaScript to defer non-critical functionality

The visible commit history includes descriptive messages with prefixes such as `feat:`, `fix:` and `docs:`. No claim of a formal Git Flow process or automated changelog generation is made.

| Requirement | Description of Requirement | Evidence (How You Met This Requirement) |
|---|---|---|
| **Component Customisation** | Bootstrap components or CSS utilities customised beyond defaults. | Bootstrap is heavily customised via a 1,800-line `style.css` with CSS custom properties overriding Bootstrap defaults. Custom design tokens redefine the colour palette (`--primary: #2563eb`), card shadows, border radii, and transitions. The navbar uses glassmorphism (`backdrop-filter: blur(20px)`) instead of Bootstrap's default solid background. Cards have custom hover transforms (`translateY(-8px)`) and gradient borders. A full dark mode theme overrides all colour variables. Custom components like the page loader, scroll progress bar, animated cursor, and typing effect go well beyond Bootstrap defaults. |
| **Fine-Grained Responsiveness** | Uses breakpoints intentionally to adjust layout across device sizes. | Four distinct breakpoints are defined in CSS: **1199px** (large desktop — adjusts profile image to 280px), **991px** (tablet — collapses navbar into glassmorphic dropdown, centres hero text, adjusts buttons, hides custom cursor, reduces section padding), **767px** (small tablet — reduces stat font sizes, shrinks profile image, adjusts timeline padding, hides scroll indicator), **575px** (mobile — reduces hero heading to 2.2rem, makes buttons full-width, adjusts form padding, further shrinks profile image). A print media query also hides non-essential UI elements. |
| **Additional Front-End Library** | Includes a library such as FontAwesome, Animate.css, or similar. | **Font Awesome 6.4.0** is loaded via CDN (`cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`) on every page. It is used extensively for: navigation icons, skill section icons (`fa-code`, `fa-brain`, `fa-tools`), contact method icons (`fa-envelope`, `fa-linkedin`, `fa-github`), button icons (`fa-rocket`, `fa-arrow-right`, `fa-paper-plane`), interest section icons (`fa-glasses`, `fa-shield-alt`, `fa-users`), and social media links in the footer. |
| **Professional Git Workflow** | Uses branching, meaningful commit messages, and merges following a simple Git flow. | The default branch is `main`, and commit messages show incremental updates to documentation, styling, assessment content and site features. |
| **Performance Awareness** | Runs Lighthouse or similar checks and implements improvements. | Performance-conscious implementation details include Google Fonts preconnect links, CDN-hosted Bootstrap and Font Awesome, shared CSS custom properties, and animations using transform and opacity. A Lighthouse score has not been recorded. |
| **Clean Project Structure** | Folders and files organised to industry norms (assets, css, js, images). | The current project is organised into separate `css/`, `js/`, `images/`, `assets/`, `appendices/` and `evidence/` directories, with the main HTML pages at the repository root. |

---

## Technical Stack Summary

| Technology | Version | Purpose |
|---|---|---|
| **HTML5** | Living Standard | Semantic document structure and content markup |
| **CSS3** | Level 3+ | Styling, animations, responsive layouts, custom properties |
| **Bootstrap** | 5.3.3 | Component library, grid system, utility classes |
| **JavaScript** | ES6+ | DOM manipulation, event handling, form validation |
| **Font Awesome** | 6.4.0 | Iconography and visual indicators |
| **Google Fonts** | N/A | Typography (Inter, Space Grotesk, JetBrains Mono) |
| **Git** | 2.x | Version control and collaboration |
| **GitHub Pages** | N/A | Static site hosting and deployment |

---

## Conclusion & Professional Reflection

This portfolio project demonstrates a comprehensive understanding of **modern front-end development practices**, from foundational HTML/CSS implementation to advanced topics including CSS architecture, responsive design patterns, and professional development workflows.

The technical decisions made throughout development—such as implementing CSS custom properties for theming, utilising Bootstrap's component ecosystem whilst maintaining design customisation, and following conventional commit standards—reflect an awareness of **scalability, maintainability, and industry best practices**.

Key technical achievements include:
- Shared custom CSS stylesheets implementing the design system, responsive layouts, theme support and animations
- **Eleven HTML pages** with shared navigation, styles and repeated components
- Accessibility-minded features including semantic page structure, image alternative text, ARIA labels and keyboard focus styling
- **Performance-conscious implementation** with optimised resource loading and GPU-accelerated animations
- **Professional Git workflow** with branching strategy and conventional commits

This project serves as both a functional portfolio piece and a demonstration of front-end engineering competency suitable for entry-level industry positions.