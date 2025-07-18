# React Portfolio Website

A creative, responsive personal portfolio built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite** — designed to showcase projects, skills, and contact info with style.

---

## Overview

This portfolio combines clean design with expressive visuals and smooth animations. Key features include a dynamic project system powered by Markdown files, a custom "redacted" text effect for classified/hidden content, and a sticky-note-style recent commit display using the GitHub API.

---

## Tech Stack

- **React** + **Vite**
- **Tailwind CSS**
- **TypeScript**
- [EmailJS](https://www.emailjs.com/) + `.env` for form handling
- [Sonner Toast](https://sonner.emilkowal.ski/) for notifications
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Marked](https://marked.js.org/) + [Front Matter](https://github.com/jxson/front-matter) for Markdown parsing

---

## Features

- **Dynamic Projects List** — Markdown files (`.md`) auto-imported from `public/projects/`, parsed and rendered with title, description, and full content.
- **Classified Redacted Effect** — Custom "blackout" visual on select text segments to simulate redacted/secret content.
- **Sticky Note GitHub Activity** — Displays your most recent commit as a sticky note with thumbtack pin.
- **Email Contact Form** — Integrated with EmailJS, styled with toast notifications for success/error.
- **Mobile-Responsive** — Clean layout and typography across all screen sizes.

---

## Getting Started

### Requirements

- Node.js v16+
- PNPM / Yarn / NPM

### Install & Run

```bash
git clone https://github.com/your-username/react-portfolio.git
cd react-portfolio
npm install
npm run dev
```
