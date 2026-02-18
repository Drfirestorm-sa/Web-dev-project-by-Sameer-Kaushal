<div align="center">

# 🌐 Sameer Kaushal — Portfolio Website

**A modern, responsive personal portfolio built for the CS11002 Web Development module**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

[**View Live Site**](https://drfirestorm-sa.github.io/Web-dev-project-by-Sameer-Kaushal/) · [**GitHub Repo**](https://github.com/Drfirestorm-sa/Web-dev-project-by-Sameer-Kaushal)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Pages](#-pages)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Git Workflow](#-git-workflow)
- [Author](#-author)

---

## 🔍 Overview

A multi-page personal portfolio website showcasing my projects, skills, education, work experience, and contact information. Built with **HTML5**, **CSS3**, **JavaScript (ES6+)**, and **Bootstrap 5.3** as part of the CS11002 Web Development module at the **University of Dundee**.

The site is fully responsive, supports dark mode, includes scroll-reveal animations, and was developed iteratively using Git version control with meaningful commits tracking each stage of development.

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| 🏠 **Home** | `index.html` | Full-viewport hero section, profile intro, three featured project cards with skill badges and CTAs |
| 👤 **About** | `about.html` | Profile bio, education timeline, work milestones, reflection & evaluation cards, interests & values |
| 💼 **Projects** | `projects.html` | Seven project cards in a 3-column grid, evidence & documentation section with wireframes and code snippets |
| 🛠️ **Skills** | `skills.html` | Technical skill cards, animated proficiency bars (8 skills), professional skills, achievements & certifications |
| 📬 **Contact** | `contact.html` | Contact info cards (email, LinkedIn, GitHub) + validated form with Formspree integration |
| 🔬 **Fravara Case Study** | `fravara-case-study.html` | Deep-dive: overview, problem statement, solution features, design process, results, tech stack, lessons learned |
| 📐 **Wireframe** | `wireframe.html` | Original low-fidelity design wireframe created during planning (standalone CSS, no Bootstrap) |

---

## ✨ Key Features

### 🎨 Responsive Design
- Bootstrap grid system + **4 custom CSS breakpoints** (`1199px`, `991px`, `767px`, `575px`)
- Navbar collapses to hamburger menu on mobile
- Cards reflow from 3-column → 2-column → 1-column automatically

### 🌙 Dark Mode Toggle
- One-click toggle in the navbar on every page
- Toggles `dark-mode` class on `<body>` + Bootstrap's `data-bs-theme` attribute
- Preference saved in `localStorage` — persists across page loads
- 20+ CSS overrides for full dark theme coverage

### 🎬 Scroll-Reveal Animations
- Elements with `.animate-fade-in-up` use `IntersectionObserver` for viewport-triggered animations
- Staggered delays via `.delay-100` through `.delay-500`
- Respects `prefers-reduced-motion` for accessibility

### 📝 Contact Form
- Bootstrap floating labels + custom JS validation (`checkValidity()`)
- Sends data to **Formspree** via Fetch API
- Button states: idle → "Sending..." spinner → "Message Sent!" ✅ → auto-reset

### ⬆️ Back-to-Top Button
- Appears after scrolling 300px, smooth-scrolls to top on click
- Circular design with chevron icon and box shadow

### ♿ Accessibility
- Semantic HTML5 (`<header>`, `<nav>`, `<section>`, `<footer>`)
- All images have descriptive `alt` attributes
- ARIA attributes on progress bars (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`)
- `prefers-reduced-motion` media query disables animations
- External links use `rel="noopener noreferrer"`

### 🔧 Extensible Card System
- All project cards follow the same HTML template — copy, paste, update content
- Grid system handles layout automatically across breakpoints

---

## 🧰 Tech Stack

| Technology | Version | Purpose |
|:----------:|:-------:|---------|
| ![HTML5](https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | 5 | Semantic page structure |
| ![CSS3](https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white) | 3 | Styling, animations, media queries |
| ![JS](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | ES6+ | DOM manipulation, theme toggle, form validation |
| ![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white) | 5.3.3 | Grid, navbar, cards, responsive utilities |
| ![Font Awesome](https://img.shields.io/badge/-Font_Awesome-528DD7?style=flat-square&logo=fontawesome&logoColor=white) | 6.4.0 | Icon library |
| ![Google Fonts](https://img.shields.io/badge/-Google_Fonts-4285F4?style=flat-square&logo=google&logoColor=white) | Poppins | Typography |
| ![Formspree](https://img.shields.io/badge/-Formspree-FF4136?style=flat-square&logo=formspree&logoColor=white) | — | Contact form backend |

> All libraries are loaded via **CDN** — no local installation or build step required.

---

## 📁 Project Structure

```
Web-dev-project-by-Sameer-Kaushal/
│
├── 📄 index.html                  # Home page — hero + featured projects
├── 📄 about.html                  # Profile, education, work, reflection
├── 📄 projects.html               # Full project portfolio + evidence
├── 📄 skills.html                 # Skills, proficiency bars, achievements
├── 📄 contact.html                # Contact form + social links
├── 📄 fravara-case-study.html     # Fravara AI Smart Glasses case study
├── 📄 wireframe.html              # Original design wireframe
│
├── 🎨 style.css                   # All custom CSS (~807 lines)
├── ⚡ script.js                   # All JavaScript (~193 lines)
│
├── 🖼️ Sameer pic about me.JPG     # Profile photo
├── 🖼️ fravara pickaball 3.png     # Fravara project image
│
└── 📝 README.md                   # This file
```

---

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/Drfirestorm-sa/Web-dev-project-by-Sameer-Kaushal.git

# 2. Open in your browser
cd Web-dev-project-by-Sameer-Kaushal
start index.html          # Windows
open index.html           # macOS
xdg-open index.html       # Linux
```

> **No build step, server, or dependencies required.** An internet connection is needed for CDN-hosted libraries (Bootstrap, Font Awesome, Google Fonts).

---

## 🌍 Deployment

The site can be deployed using **GitHub Pages**:

1. Go to **Settings → Pages** in the repository
2. Set source to `main` branch, root folder
3. Save — the site will be live at:

   👉 `https://drfirestorm-sa.github.io/Web-dev-project-by-Sameer-Kaushal/`

Future commits to `main` trigger automatic redeployment.

---

## 🔀 Git Workflow

Development used a **branching strategy** with `main` (stable) and `test` (active development) branches.

| # | Commit Message | Description |
|:-:|----------------|-------------|
| 1 | `Initial commit` | Repository creation |
| 2 | `Add initial HTML and CSS files for portfolio website` | First version of pages |
| 3 | `Remove all HTML and CSS files from the project` | Cleanup for restructuring |
| 4 | `Add wireframe HTML structure for university portfolio` | Wireframe added |
| 5 | `docs: update README and rename wireframe file for clarity` | Documentation |
| 6 | `feat: add initial portfolio website with interactive components` | Rebuilt with full interactivity |
| 7 | `docs: improve README with usage instructions and future plans` | README update |
| 8 | `feat: implement dark mode toggle and back-to-top button across all pages` | Dark mode feature |
| 9 | `Add Fravara case study page` | New case study page |
| 10 | `Refactor code structure for improved readability and maintainability` | Code cleanup |

> Commit messages follow conventional prefixes (`feat:`, `docs:`, `chore:`) demonstrating incremental development.

---

## 👤 Author

<div align="center">

**Sameer Kaushal**

BSc (Hons) Computer Science (Data Science & AI) — University of Dundee

[![Email](https://img.shields.io/badge/Email-kaushalsameer731%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:kaushalsameer731@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Sameer_Kaushal-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sameer-kaushal-041709279/)
[![GitHub](https://img.shields.io/badge/GitHub-Drfirestorm--sa-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Drfirestorm-sa)

</div>
