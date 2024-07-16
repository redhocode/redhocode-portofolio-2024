import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "id", "jp"],
  defaultLocale: "en",
  // pathnames: {
  //   about: {
  //     en: "/about",
  //     id: "/about",
  //   },
  //   blog: {
  //     en: "/blog",
  //     id: "/blog",
  //   },
  // },
});

export const config = {
  matcher: ["/", "/(id|en|jp)/:path*"],
};
