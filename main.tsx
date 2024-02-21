import blog, { redirects } from "https://deno.land/x/blog/blog.tsx";

blog({
  author: "Turret Cegielski",
  title: "My Blog",
  description: "Tabletop RPG and math",
  avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatarClass: "rounded-full",
  links: [
    { title: "GitHub", url: "https://github.com/umfy" },
  ],
  lang: "en",
  // localised format based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
  dateFormat: (date) =>
    new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date),
  middlewares: [
    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),
    redirects({
      "main": "removing_armor_class",
    }),
  ],
  // favicon: "favicon.ico",
});
