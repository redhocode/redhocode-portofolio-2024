"use client";
import * as React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";
import { useTranslations } from "next-intl";
export default function Experience() {
    const t = useTranslations("Experience")
    const content = [
      {
        title: t("position-2"),
        description_1: t("status-2"),
        description_2: t("year-2"),
        description_3: t("company-2"),
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/images/icon-4.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
      {
        title: t("position-1"),
        description_1: t("status-1"),
        description_2: t("year-1"),
        description_3: t("company-1"),
        content: (
          <div className="h-full w-full  flex items-center justify-center text-white">
            <Image
              src="/images/icon-3.png"
              width={300}
              height={300}
              className="h-full w-full object-cover"
              alt="linear board demo"
            />
          </div>
        ),
      },
    ];
    return (
      <>
        <div className="p-8">
          <StickyScroll content={content} />
        </div>
      </>
    );
}