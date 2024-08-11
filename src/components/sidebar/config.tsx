import { usePathname } from "next/navigation";

import { Bell, Briefcase, Home, Settings, User, Pickaxe,Box } from "lucide-react";
import SelectLanguage from "../SelectLanguage";
import { useLocale } from "next-intl";

export const NavItems = () => {
  const pathname = usePathname();
  const locale = useLocale();
  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav);
  }

  return [
    {
      name: "Home",
      href: "/",
      icon: <Home size={20} />,
      active: pathname === "/",
      position: "top",
    },
    {
      name: "Profile",
      href: `/${locale}/about`,
      icon: <User size={20} />,
      active: isNavItemActive(pathname, `/${locale}/about`),
      position: "top",
    },
    {
      name: "Experience",
      href: `/${locale}/experience`,
      icon: <Pickaxe size={20} />,
      active: isNavItemActive(pathname, `/${locale}/experience`),
      position: "top",
    },
    {
      name: "Projects",
      href: `/${locale}/projects`,
      icon: <Briefcase size={20} />,
      active: isNavItemActive(pathname, `/${locale}/projects`),
      position: "top",
    },
    {
      name: "3D",
      href: `/${locale}/3d`,
      icon: <Box size={20} />,
      active: isNavItemActive(pathname, `/${locale}/3d`),
      position: "top",
    },
    // {
    //   name: "Settings",
    //   href: "/settings",
    //   icon: <Settings size={20} />,
    //   active: isNavItemActive(pathname, "/settings"),
    //   position: "bottom",
    // },
  ];
};
