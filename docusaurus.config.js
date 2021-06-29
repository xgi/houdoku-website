const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Houdoku",
  tagline: "Free manga reader for the desktop",
  url: "https://houdoku.netlify.app",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "faltro",
  projectName: "houdoku",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
    },
    navbar: {
      title: "Houdoku",
      logo: {
        alt: "Houdoku Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "download",
          position: "left",
          label: "Download",
        },
        {
          type: "doc",
          docId: "getting-started",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/xgi/houdoku",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © 2018 - 2021 <a href="https://faltro.com" target="_blank">Jake Robertson</a> // <a href="https://github.com/xgi/houdoku-website/blob/master/LICENSE.txt" target="_blank">MIT License</a>`,
    },
    // prism: {
    //   theme: lightCodeTheme,
    //   darkTheme: darkCodeTheme,
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/xgi/houdoku-website/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
