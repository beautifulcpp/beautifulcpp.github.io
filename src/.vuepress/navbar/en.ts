import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  { text: "Quick Navigation", icon: "navigation", link: "/quicknav/" },
  { text: "Blog", icon: "blog", link: "/blog/" },
  { text: "Notes", icon: "code", link: "/codenotes/" },
  { text: "All Others", icon: "note", link: "/floatinglife/" },
  { text: "Projects", icon: "free", link: "/projects/" },
  {
    text: "Resources",
    icon: "advance",
    prefix: "/resources/",
    children: [
      {
        text: "Books",
        icon: "animation",
        link: "books/",
      },
      {
        text: "Videos",
        icon: "play",
        link: "videos/",
      },
    ],
  },
]);
