"use client";
import * as React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Experience() {
    const t = useTranslations("Experience")
const projects = [
  {
    title: t("position-2"),
    description1: t("year-2"),
    description2: t("status-2"),
    description3: t("company-2"),
    link: "",
  },
  {
    title: t("position-1"),
    description1: t("year-1"),
    description2: t("status-1"),
    description3: t("company-1"),
    link: "",
  },
  {
    title: t("position-3"),
    description1: t("year-3"),
    description2: t("status-3"),
    description3: t("company-3"),
    link: "",
  },
];
    return (
      <>
      <section id="experience" className="min-h-screen">
        <div className=" flex flex-row space-x-4 p-4 md:pt-20 md:pb-16">
          <h1 className="text-4xl md:text-[120px] font-bold  ">
           {t("title")}
          </h1>
        </div>
        <div className="justify-center flex items-center mx-auto px-4">
          <HoverEffect items={projects} />
        </div>
      </section>
      </>
    );
}