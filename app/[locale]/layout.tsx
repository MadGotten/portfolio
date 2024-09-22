import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { unstable_setRequestLocale } from "next-intl/server";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marek Stefaniak",
  icons: {
    icon: "/favicon.ico",
  },
  description: "Portfolio website by Marek Stefaniak",
};

const locales = ["en", "pl"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${poppins.className} dark:bg-dark dark:text-white bg-white text-black`}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
