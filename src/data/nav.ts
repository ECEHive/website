/**
 * Navigation data — shared between Navbar and Footer.
 * Update links here; both components pick up changes automatically.
 */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/** Primary navigation (desktop nav + mobile menu) */
export const primaryNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Explore", href: "/explore" },
  { label: "Community", href: "/community" },
  { label: "Become a PI", href: "/become-a-pi" },
  { label: "Contact", href: "/contact" },
];

/** "More" dropdown links (Policies, Wiki, etc.) */
export const moreNav: NavLink[] = [
  { label: "Rules & Policies", href: "/policies" },
  { label: "HUMS", href: "https://hums.hivemakerspace.com/", external: true },
  {
    label: "Hive Wiki",
    href: "https://hive.ece.gatech.edu/hive-wiki/",
    external: true,
  },
];

/** Footer link columns — The Hive + Resources */
export const footerSections = [
  {
    heading: "The Hive",
    links: [
      { label: "About", href: "/about" },
      { label: "Explore Space", href: "/explore" },
      { label: "Community", href: "/community" },
      { label: "Become a PI", href: "/become-a-pi" },
    ] as NavLink[],
  },
  {
    heading: "Resources",
    links: [
      { label: "Rules & Policies", href: "/policies" },
      {
        label: "HUMS",
        href: "https://hums.hivemakerspace.com/",
        external: true,
      },
      {
        label: "Hive Wiki",
        href: "https://hive.ece.gatech.edu/hive-wiki/",
        external: true,
      },
      {
        label: "Live Dashboard",
        href: "https://hive.ece.gatech.edu/live-dashboard/",
        external: true,
      },
    ] as NavLink[],
  },
];
