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
          to: "docs",
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
