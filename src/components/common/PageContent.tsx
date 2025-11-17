"use client";

import { useMemo } from "react";
import NotFoundPage from "@/app/not-found";
import { siteConfig } from "@/config/site.config";
import { usePathname } from "next/navigation";
import createDOMPurify from "dompurify";
import parse from "html-react-parser";

const PageContent = () => {
  const pathname = usePathname();

  const pageContent =
    siteConfig.pagesContent[pathname as keyof typeof siteConfig.pagesContent];

  const DOMPurify = useMemo(() => {
    if (typeof window !== "undefined") {
      return createDOMPurify(window);
    }
    return null;
  }, []);

  const cleanHTML = useMemo(() => {
    return DOMPurify
      ? DOMPurify.sanitize(pageContent.content)
      : pageContent.content;
  }, [DOMPurify, pageContent.content]);

  if (!pageContent) {
    return <NotFoundPage />;
  }

  return <div>{parse(cleanHTML)}</div>;
};

export default PageContent;
