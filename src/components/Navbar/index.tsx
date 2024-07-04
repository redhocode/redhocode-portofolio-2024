"use client";
import { SetStateAction, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "../ui/mode-theme";
import { error } from "console";
import { useTranslations, useLocale } from "next-intl";
import {Code, FireExtinguisher,CodeSquare} from "lucide-react"
import Link from "next/link";
import SelectLanguage from "../SwichLang";
import { MovingButtonCV } from "../CV";
import Image from "next/image";
export default function Navbar() {
  const t = useTranslations("Menu");
const locale: string = useLocale(); // Get the current locale
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu: SetStateAction<string>) => {
    setActiveMenu(menu);
  };

  const menuItems = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/en/about" },
    { name: t("blog"), href: "/en/blog" },
  ];

  return (
    <header className="sticky top-0 flex h-16 items-center bg-background z-50 border-b ">
      <div className="container mx-auto flex items-center gap-4 px-4 md:px-6">
        <nav className="hidden flex-col gap-8 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-1 text-lg font-normal md:text-base mr-8"
          >
            <Image
            src="/icon.png"
            height={30}
            width={30}
            alt="logo"
            className="lazy"
            />
            <p className="font-semibold antialiased text-[#ee5449] text-xl tracking-wide">
          redhoarifin
            </p>
          </Link>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={activeMenu === item.name ? "page" : undefined}
              className={`transition-colors ${
                activeMenu === item.name
                  ? "text-foreground"
                  : "text-muted-foreground"
              } hover:text-foreground`}
              onClick={() => handleMenuClick(item.name)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <span className="font-bold antialiased text-[#ee5449] text-2xl ">
                  {"<redhoarifin/>"}
                </span>
              </Link>
              <SelectLanguage />
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`hover:text-foreground ${
                    activeMenu === item.name
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => handleMenuClick(item.name)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 justify-end">
          <div className="">
            <MovingButtonCV />
          </div>
          {/* <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form> */}
          <div className="hidden md:block">
            <SelectLanguage />
          </div>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
