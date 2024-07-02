"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export function MovingButtonCV() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-700 text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        <Link href="https://replay.dropbox.com/share/MaHv5VGYPIvG9d8x" target="_blank">
        
          Download CV
        </Link>
      </Button>
    </div>
  );
}
