import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import About from "@/layout/about";
import { HeroParallaxDemo } from "@/layout/project";
import Tech from "@/layout/tech";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <>
      <Hero />
      <div className="bg-slate-950 h-16 dark:bg-[#ee5449]"></div>
      <About />
      <div className="bg-slate-950 ">
        <Tech />
      </div>
      <div className="bg-slate-950 h-24 dark:bg-[#ee5449]">
        <HeroParallaxDemo />
      </div>
    </>
  );
}
