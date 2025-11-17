"use client";

import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";

const Title = () => {
  const pathname = usePathname();
  const pageTitle =
    siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent] ||
    siteConfig.title;

  return (
    <div className="w-full flex justify-center my-6">
      <h1 className="text-3xl font-bold">{pageTitle.title}</h1>
    </div>
  );
};

export default Title;
