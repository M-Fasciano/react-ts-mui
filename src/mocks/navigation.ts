export const navigation = [
  {
    menu: {
      items: [
        {
          label: "Home",
          link: "/home",
        },
        {
          label: "About Us",
          link: "/about-us",
        },
        {
          subMenu: {
            title: "Services",
            items: [
              {
                label: "Web Design",
                link: "/services/web-design",
              },
              {
                label: "Mobile App Development",
                link: "/services/mobile-app-development",
              },
              {
                label: "SEO",
                link: "/services/seo",
              },
            ],
          },
        },
        {
          label: "Portfolio",
          link: "/portfolio",
        },
        {
          label: "Contact",
          link: "/contact",
        },
      ],
    },
  },
];
