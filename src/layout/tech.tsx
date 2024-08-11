"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { IceCream } from "lucide-react";
import { BunIcon, CssIcon, DockerIcon, GitIcon, HtmlIcon, JavaScriptIcon, LinuxIcon, NodeIcon, PostgresSQLIcon, PrismaIcon, ReactIcon, ReduxIcon, TailwindIcon, TypescriptIcon } from "@/components/icons";
import { useTranslations } from "next-intl";
export default function Tech() {
  const t = useTranslations("Index");
  return (
    <>
      <div className=" flex flex-col antialiased items-center relative overflow-hidden gap-2 bg-slate-100 dark:bg-slate-950">
        <InfiniteMovingCards
          items={tech}
          direction="right"
          speed="slow"
        />
        {/* <InfiniteMovingCards
          items={tech}
          direction="left"
          speed="slow"
        /> */}
      </div>
    </>
  );
}

const tech = [
    {
        name: "",
        icon: <HtmlIcon/>
    },
    {
        name: "",
        icon: <CssIcon/>
    },
    {
        name: "",
        icon: <JavaScriptIcon/>
    },
    {
        name: "",
        icon: <TailwindIcon/>
    },
    {
        name: "",
        icon: <TypescriptIcon/>
    },
    {
        name: "",
        icon: <ReduxIcon/>
    },
    {
        name: "",
        icon: <PostgresSQLIcon/>
    },
    {
        name: "",
        icon: <DockerIcon/>
    },
    {
        name: "",
        icon: <LinuxIcon/>
    },
    {
        name: "",
        icon: <PrismaIcon/>
    },
  {
    name: "",
    icon: <ReactIcon/>,
  },
{
    name: "",
    icon: <NodeIcon/>
},
{
    name: "",
    icon: <BunIcon/>
},
{
    name: "",
    icon: <GitIcon/>
}
];
