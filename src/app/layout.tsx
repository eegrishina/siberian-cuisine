import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <main className="layout-main flex flex-col w-full justify-start items-center">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
