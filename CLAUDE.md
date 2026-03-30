# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Educational course material repository for InsperAI (Insper's ML/DL academic club). Contains beginner-friendly Machine Learning lessons written in Brazilian Portuguese, served as a static documentation site.

**Tech stack:** MkDocs + Material theme, Python 3.10+, uv (package manager), GitHub Actions → GitHub Pages.

## Common Commands

All commands run from the `handout/` directory:

```bash
# Install dependencies
cd handout && uv sync

# Serve docs locally (hot-reload at http://127.0.0.1:8000)
uv run mkdocs serve

# Build static site
uv run mkdocs build
```

Graphics generation scripts live inside lesson folders:

```bash
python handout/docs/aula-01/gerar_graficos_aula00.py
python handout/docs/aula-02/gerar_graficos_aula01.py
```

## Architecture

```
handout/
├── mkdocs.yml           # Site config: nav, theme, plugins, extensions
├── requirements.txt     # Python deps for example code
└── docs/                # All course content
    ├── index.md         # Landing page
    ├── js/mathjax.js    # LaTeX math rendering config
    └── aula-NN/         # One folder per lesson
        ├── *.md         # Lesson sections (teoria, atividades, etc.)
        ├── *.py         # Scripts that generate img/ assets
        ├── *.ipynb      # Optional Jupyter notebooks
        └── img/         # Generated/static images and GIFs
```

Each lesson follows a consistent structure: overview → theory → exploration → practical training → exercises → summary.

## Key Conventions

- **Language:** All prose is in Portuguese; code and library references are in English.
- **Content markup:** MkDocs admonitions (`!!! warning`, `!!! tip`, `!!! note`), LaTeX via MathJax, code blocks with syntax highlighting.
- **Interactive quizzes:** Enabled via the `mkdocs-quiz` plugin.
- **Graphics pipeline:** Python scripts (`gerar_graficos_*.py`) produce PNGs/GIFs into `img/` folders using a shared color palette.
- **Deployment:** Pushes to `main` trigger `.github/workflows/deploy.yml`, which runs `mkdocs gh-deploy --force` to publish to GitHub Pages.
- **Dependencies are managed with `uv`** — use `uv sync` and `uv run`, not pip.
