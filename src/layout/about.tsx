import { Boxes } from "@/components/ui/background-boxes";
import HeroImage from "../../public/images/ilustrasi.png";
import Image from "next/image";
import {useTranslations} from "next-intl"
import { MovingButtonCV } from "@/components/CV";
export default function About() {
  const t = useTranslations("About");
  return (
    <section id="about" className=" bg-gray-300 dark:bg-slate-900">
      <div className="relative min-h-screen">
        <video
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          loop
          muted
        >
          <source src="/videos/v.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 opacity-70 dark:bg-slate-900 bg-white"></div>
        <div className="absolute inset-0 text-muted-foreground text-xs p-2">
          Credit Video Raddy Pexels
        </div>
        <div className="absolute inset-0 container flex flex-col mx-auto md:flex-row md:items-center py-5">
          <div className="w-full px-4 md:w-1/2 lg:w-1/2">
            <span className="mb-8">
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white animate-spin"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M8.7 8.7c1.1-1 2.2-2 3.3-2.7m0 0c3.1-2 6-2.6 7.4-1.3 1.8 1.8 0 6.6-4 10.7-4.1 4-8.9 5.8-10.7 4C3.4 18 4 15.2 6 12m6-6C9 4 6 3.3 4.7 4.6c-1.8 1.8 0 6.6 4 10.7M12 6c1.2.7 2.3 1.7 3.4 2.7m2.7 3.4c2 3 2.6 6 1.3 7.3C18 20.7 15 20 12 18m2-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>
            </span>

            <h1 className="text-4xl font-semibold ">{t("title")}</h1>
            <br />
            <p className="text-justify text-xl">
              {t("im")} &nbsp;
              <span className="font-semibold dark:text-slate-50 text-2xl">
                {t("name")}
              </span>
              <br />
              {t("desc")}
            </p>
          </div>

          <div className="w-full px-4 mt-10 md:w-1/2 md:mt-0 lg:w-1/2 hidden md:block">
            <div className="relative">
              <Image
                src={HeroImage}
                alt="Hero"
                height={300}
                width={700}
                className="mx-auto duration-300 cursor-pointer max-w-full right-10"
              />
              <span className="absolute -translate-x-1/2 left-1/2 -z-10 -bottom-5 md:left-1/2">
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  width={500}
                  height={400}
                  className="transition-all duration-300 cursor-pointer"
                >
                  <path
                    fill="currentColor"
                    d="M57.1,-57.4C72.9,-41.3,83.9,-20.7,85,1.1C86.1,22.9,77.4,45.8,61.6,61.4C45.8,77.1,22.9,85.5,0.4,85.2C-22.1,84.8,-44.2,75.5,-59.2,59.8C-74.3,44.2,-82.3,22.1,-82.4,-0.1C-82.4,-22.2,-74.6,-44.4,-59.5,-60.6C-44.4,-76.7,-22.2,-86.7,-0.8,-85.9C20.7,-85.1,41.3,-73.5,57.1,-57.4Z"
                    transform="translate(100 100) "
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
