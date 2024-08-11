"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { NavItems } from "../sidebar/config";
import { Menu } from "lucide-react";
import Image from "next/image";
import SelectLanguage from "../SelectLanguage";
import { MovingButtonCV } from "../CV";

export default function Header() {
  const navItems = NavItems();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-100 flex items-center h-16 px-4 border-b shrink-0 md:px-6 justify-between bg-background shadow-md">
      {/* <Link
        href="/"
        className="items-center gap-1 text-lg font-normal md:text-base mr-8 hidden md:block"
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
      </Link> */}
      <MovingButtonCV/>
      <div className="ml-4 flex items-center gap-3">
        <Avatar className="block md:hidden lg:hidden cursor-pointer">
          <a
            href="http://github.com/redhocode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AvatarImage
              src="https://github.com/redhocode.png"
              alt="@redhocode"
            />
            <AvatarFallback>CN</AvatarFallback>
          </a>
        </Avatar>
    
        <div className="hidden sm:block md:block">
          <SelectLanguage />
        </div>

        <button onClick={() => setIsOpen(true)} className="block sm:hidden">
          <Menu size={24} />
        </button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="right" className="block md:hidden">
            <SelectLanguage />
            <div className="pt-4 overflow-y-auto h-fit w-full flex flex-col gap-1">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  href={navItem.href}
                  onClick={() => setIsOpen(false)}
                  className={`h-full relative flex items-center whitespace-nowrap rounded-md ${
                    navItem.active
                      ? "font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white"
                      : "hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                  }`}
                >
                  <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100">
                    {navItem.icon}
                    <span>{navItem.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
