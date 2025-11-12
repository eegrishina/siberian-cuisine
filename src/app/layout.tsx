import type { Metadata } from "next";
import { Raleway, Merriweather } from "next/font/google";
import "./globals.css";
import { Providers } from "@/providers/Providers";
import { siteConfig } from "@/config/site.config";
import Header from "@/components/UI/layout/Header";
import Footer from "@/components/UI/layout/Footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth/auth";
import AppLoader from "@/hoc/app-loader";
import Title from "@/components/UI/layout/Title";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html
      lang="ru"
      className={`${raleway.variable} ${merriweather.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <SessionProvider session={session}>
            <AppLoader>
              <Header />
              <Title />
              <main className="layout-main flex flex-col w-max-[1024px] mx-auto px-[24px] justify-start items-center">
                {children}
              </main>
              <Footer />
            </AppLoader>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}
