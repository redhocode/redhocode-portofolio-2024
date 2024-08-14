"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import { DownloadIcon } from "lucide-react";
export function MovingButtonCV() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-700 text-black dark:text-white border-neutral-200 dark:border-slate-800 py-2"
      >
        <Link
          href="https://drive.google.com/file/d/1-4mZnWj0La0f2lpaOLJfJ3FhqXkKgcpS/view?usp=sharing"
          target="_blank"
        >
          <div className="flex flex-row gap-1">
            <DownloadIcon className="w-4 h-4 animate-bounce" />
            <span className="text-sm">Download CV</span>
          </div>
        </Link>
      </Button>
    </div>
  );
}
