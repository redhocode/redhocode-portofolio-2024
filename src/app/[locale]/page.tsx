"use client";
import { Hero } from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/layout/about";
import Experience from "@/layout/experience";
import HomePage from "@/layout/home";
import Project from "@/layout/project";
import Tech from "@/layout/tech";

export default function Home() {
 
  return (
    <>
    <Navbar/>
      <Hero/>
      <div className="bg-slate-950 md:h-16 h-10 dark:bg-[#ee5449]"></div>
      <About />
      <div className="bg-slate-950 ">
        <Tech />
      </div>
      <div className="bg-dot-slate-400 dark:bg-[#ee5449]">
        <Experience />
      </div>
    <Project/>
    </>
  );
}
