"use client";
import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function SelectLanguage() {
  const t = useTranslations("Language");
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1]; // Extract the current locale from the URL

  const [selectedLanguage, setSelectedLanguage] =
    React.useState<string>(currentLocale);

  const onSelectChange = (value: string) => {
    setSelectedLanguage(value);
    router.replace(`/${value}`);
  };

  const getLanguageLabel = (locale: string) => {
    switch (locale) {
      case "id":
        return "Indonesian";
      case "en":
        return "English";
      default:
        return t("title"); // Default placeholder if no language is selected
    }
  };

  return (
    <Select onValueChange={onSelectChange} value={selectedLanguage}>
      <SelectTrigger className="w-[180px] md:w-[120px]">
        <SelectValue>{getLanguageLabel(selectedLanguage)}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{t("lang")}</SelectLabel>
          <SelectItem value="id">{t("id")}</SelectItem>
          <SelectItem value="en">{t("en")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
