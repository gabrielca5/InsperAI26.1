# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Educational course material repository for InsperAI (Insper's ML/DL academic club). Contains beginner-friendly Machine Learning lessons written in Brazilian Portuguese, served as a static documentation site.

**Tech stack:** Docusaurus 3.7, React 18, Node.js 20+, KaTeX (math), GitHub Actions → GitHub Pages.

## Common Commands

All commands run from the `website/` directory:

```bash
# Install dependencies
cd website && npm install

# Serve docs locally (hot-reload at http://localhost:3000)
npm run start

# Build static site
npm run build

# Serve production build
npm run serve
```

Graphics generation scripts live in the `helpers/` directory:

```bash
python website/helpers/aula-01/gerar_graficos_aula00.py
python website/helpers/aula-02/gerar_graficos_aula01.py
```

## Architecture

```
website/
├── docusaurus.config.js  # Site config: plugins, theme, i18n, navbar
├── sidebars.js           # Navigation structure (two sidebars: aula01, aula02)
├── package.json          # Dependencies and scripts
├── src/
│   ├── components/Quiz/  # Custom React quiz component (replaces mkdocs_quiz)
│   └── css/custom.css    # Theme colors and fonts
├── docs/                 # All course content
│   ├── index.mdx         # Landing page (slug: /)
│   └── aula-NN/          # One folder per lesson
│       ├── *.md / *.mdx  # Lesson sections (.mdx for files with Quiz components)
│       └── img/          # Co-located images (PNGs and GIFs)
└── helpers/              # Python scripts and Jupyter notebooks (not processed)
```

Each lesson follows a consistent structure: overview → theory → exploration → practical training → exercises → summary.

## Key Conventions

- **Language:** All prose is in Portuguese; code and library references are in English.
- **Content markup:** Docusaurus admonitions (`:::warning`, `:::tip`, `:::note`), LaTeX via KaTeX (`$...$` inline, `$$...$$` display), code blocks with Prism syntax highlighting.
- **Interactive quizzes:** Custom `<Quiz>` React component in `src/components/Quiz/`. Files using it must be `.mdx` with `import Quiz from '@site/src/components/Quiz'`.
- **Definition lists:** Supported via `remark-definition-list` plugin (`**Term**\n: Definition`).
- **Graphics pipeline:** Python scripts (`gerar_graficos_*.py`) in `helpers/` produce PNGs/GIFs into `docs/aula-NN/img/` folders.
- **Deployment:** Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds with Docusaurus and deploys to GitHub Pages via `actions/deploy-pages`.
