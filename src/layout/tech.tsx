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
      <div className="h-[50rem] flex flex-col antialiased items-center relative overflow-hidden pt-10 gap-4">
        <h1 className="text-5xl mb-10 font-semibold">{t("title")}</h1>
        <InfiniteMovingCards
          items={tech}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={tech}
          direction="left"
          speed="normal"
        />
      </div>
    </>
  );
}

const tech = [
    {
        name: "HTML",
        icon: <HtmlIcon/>
    },
    {
        name: "CSS",
        icon: <CssIcon/>
    },
    {
        name: "Javascript",
        icon: <JavaScriptIcon/>
    },
    {
        name: "Tailwind CSS",
        icon: <TailwindIcon/>
    },
    {
        name: "Typescript",
        icon: <TypescriptIcon/>
    },
    {
        name: "Redux",
        icon: <ReduxIcon/>
    },
    {
        name: "Postgres SQL",
        icon: <PostgresSQLIcon/>
    },
    {
        name: "Docker",
        icon: <DockerIcon/>
    },
    {
        name: "Linux",
        icon: <LinuxIcon/>
    },
    {
        name: "Prisma",
        icon: <PrismaIcon/>
    },
  {
    name: "React JS",
    icon: <ReactIcon/>,
  },
{
    name: "Node JS",
    icon: <NodeIcon/>
},
{
    name: "Bun",
    icon: <BunIcon/>
},
{
    name: "Git",
    icon: <GitIcon/>
}
];
