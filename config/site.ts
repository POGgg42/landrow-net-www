export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Landrow",
  description: "Personal site of Matt Rowland",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Work",
      href: "/work",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Resume",
      href: "/resume",
    },
    {
      label: "Work",
      href: "/work",
    },
  ],
  links: {
    linkedin: "https://www.linkedin.com/in/mattrowland42/",
    email: "mailto:matt@landrow.net",
    resume: "/resume",
  },
};