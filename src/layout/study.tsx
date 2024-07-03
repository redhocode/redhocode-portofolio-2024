import { HoverEffect } from "@/components/ui/card-hover-effect"
import { useTranslations } from "next-intl";
export default function Study() {
    const t = useTranslations("Study")
    const study = [
      {
        title: t("major-1"),
        description: t("campus-1"),
        year: t("year-1"),
        link: "#",
      },
      {
        title: t("major-2"),
        year: t("year-2"),
        description: t("campus-2"),
        link: "#",
      },
    ];
    return (
      <>
        <div className="w-full flex ">
          <HoverEffect items={study} />
        </div>
      </>
    );
}