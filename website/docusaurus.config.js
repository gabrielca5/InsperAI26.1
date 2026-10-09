import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDefinitionList from 'remark-definition-list';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aulas — Insper AI',
  tagline: 'Material de apoio para as aulas de Inteligência Artificial',
  favicon: 'img/favicon.ico',

  url: 'https://gabrielca5.github.io',
  baseUrl: '/InsperAI26.1/',

  organizationName: 'gabrielca5',
  projectName: 'InsperAI26.1',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath, remarkDefinitionList],
          rehypePlugins: [rehypeKatex],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      crossorigin: 'anonymous',
    },
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['pt'],
        docsRouteBasePath: '/',
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Insper AI — 2026.1',
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'aula01',
            label: 'Aula 1 — Fundamentos',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'aula02',
            label: 'Aula 2 — Regressão Linear',
            position: 'left',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['python'],
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
    }),
};

export default config;
