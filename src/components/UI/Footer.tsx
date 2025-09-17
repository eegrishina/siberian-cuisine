"use client";

import { siteConfig } from "@/config/site.config";
import { ThemeToggle } from "./ThemeToggle";

export default function Footer() {
  return (
    <footer className="relative layout-footer flex justify-center items-center text-[14px]">
      <div className="flex flex-col items-center gap-1">
        <p>{siteConfig.description}</p>
        <p>© {new Date().getFullYear()}</p>
      </div>
      <ThemeToggle />
    </footer>
  );
}
