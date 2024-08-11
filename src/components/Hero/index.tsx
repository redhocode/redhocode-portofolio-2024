"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import HeroImage from "../../../public/images/hero.png"
import Image from "next/image";
import { Button } from "../ui/moving-border";
import { useTranslations } from "next-intl";
export function Hero() {
  const t = useTranslations("Hero");
  const words = t("title");

  return (
    <>
    <section id="hero">
      <div className="flex justify-center md:min-h-screen lg:min-h-screen mx-8 flex-col items-center min-h-screen">
        <TextGenerateEffect  words={words} />
        <BackgroundBeams />
      </div>
    </section>
    </>
  );
}
