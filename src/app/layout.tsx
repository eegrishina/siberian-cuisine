import type { Metadata } from "next";
import { Raleway, Merriweather } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import { siteConfig } from "@/config/site.config";
import Header from "@/components/UI/layout/Header";
import Footer from "@/components/UI/layout/Footer";

export const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
});

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
    <html
      lang="ru"
      className={`${raleway.variable} ${merriweather.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <Header />
          <main className="layout-main flex flex-col w-full justify-start items-center">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
