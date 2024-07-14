/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import HeroImage from "../../../../public/images/hero-4.png";
import { useTranslations } from "next-intl";
import { MapPinned, GraduationCap, School, BriefcaseBusiness } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LampContainer } from "@/components/ui/lamp";
import React from "react";
import { motion } from "framer-motion";
import { MovingButtonCV } from "@/components/CV";
import Button from "@/components/Button";
import { MailIcon, TelegramIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import Experience from "@/layout/experience";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Study from "@/layout/study";
import CodeBox from "@/components/CodeBox";
import { Separator } from "@/components/ui/separator";
export default function Page() {
  const t = useTranslations("Bio");
  return (
    <>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="py-4"
        >
          <section id="about" className="lg:-mt-20 mt-80">
            <div className="md:container flex flex-col mx-auto md:flex-row md:items-center justify-center ">
              <div className="md:container">
                <Card className="px-4 py-4">
                  <div className="flex flex-row gap-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="https://github.com/redhocode.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <h1 className="md:text-7xl text-4xl font-semibold text-[#ee5449]">
                        {t("name")}
                      </h1>
                      <div className="flex md:flex-row md:gap-3 flex-col">
                        {/* <Button
                          variant="outline"
                          className="mt-4 gap-4 py-4 rounded-xl"
                          href="https://t.me/redhoarifin"
                          target="_blank"
                        >
                          <TelegramIcon />
                          <h3 className="text-md">{t("contact")} Telegram</h3>
                        </Button> */}
                        <Button
                          variant="outline"
                          className="mt-4 gap-4 py-4 rounded-xl"
                          href="https://mail.google.com/mail/u/1/?view=cm&fs=1&to=redho.arn@gmail.com&tf=1"
                          target="_blank"
                        >
                          <MailIcon />
                          <h3 className="text-md">{t("contact")}</h3>
                        </Button>
                      </div>
                      <div className="flex items-center mt-4 cursor-pointer">
                        <a
                          href="https://www.linkedin.com/in/redho-arifin-983372196/"
                          target="_blank"
                          className="flex items-center justify-center mr-3 border border-gray-200 rounded-full w-9 h-9 hover:border-black hover:bg-gray-200 hover:text-slate-800 dark:hover:text-slate-900 cursor-pointer"
                          rel="noreferrer"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                          >
                            <title>LinkedIn</title>
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>

                        <a
                          href="https://instagram/shasimies/"
                          target="_blank"
                          className="flex items-center justify-center mr-3 border border-gray-200 rounded-full w-9 h-9 hover:border-black hover:bg-gray-200 hover:text-slate-800 dark:hover:text-slate-900"
                          rel="noreferrer"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                          >
                            <title>Instagram</title>
                            <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                          </svg>
                        </a>

                        <a
                          href="http://x.com/redhocode"
                          target="_blank"
                          className="flex items-center justify-center mr-3 border border-gray-200 rounded-full w-9 h-9 hover:border-black hover:bg-gray-200 hover:text-slate-800 dark:hover:text-slate-900"
                          rel="noreferrer"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            widths="20"
                            height="20"
                            fill="currentColor"
                          >
                            <title>X</title>
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                          </svg>
                        </a>
                        <a
                          href="http://github/redhocode"
                          target="_blank"
                          className="flex items-center justify-center mr-3 border border-gray-200 rounded-full w-9 h-9 hover:border-black hover:bg-gray-200 hover:text-slate-800 dark:hover:text-slate-900"
                          rel="noreferrer"
                        >
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            widths="20"
                            height="20"
                            fill="currentColor"
                          >
                            <title>GitHub</title>
                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-4 md:text-start text-justify">
                    {t("desc")}
                  </p>
                  <Separator/>
               
                  {/* <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-2">
                      <AccordionTrigger>
                        <div className="md:text-2xl">
                          <School className="w-8 h-8" />
                          {t("title-1")}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-row gap-3 mb-4 items-center">
                          <GraduationCap className="w-8 h-8" />
                          <span className="font-semibold">{t("study-1")}</span>
                        </div>
                        <div className="flex flex-row gap-3 items-center">
                          <School className="w-8 h-8" />
                          <span className="font-semibold">{t("study-2")}</span>
                        </div>
                        <Study />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion> */}
                </Card>
              </div>
              {/* <div className="w-full px-4 mt-10 md:w-1/2 md:mt-0 lg:w-1/2">
                <div className="relative">
                  <a
                    href="https://www.spotify.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="https://spotify-github-profile.kittinanx.com/api/view.svg?uid=a3thxrr5hvqruh3dkvsa8nh49&cover_image=true&theme=default&show_offline=false&background_color=121212&interchange=true"
                      alt="Spotify Now Playing"
                    />
                  </a>
                </div>
              </div> */}
            </div>
          </section>
        </motion.h1>
      </LampContainer>
      <div className="md:container md:-mt-80 lg:-mt-32 -mt-72">
        <Experience />
      </div>
    </>
  );
}
