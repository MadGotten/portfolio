import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { setRequestLocale } from "next-intl/server";
import { useMessages, NextIntlClientProvider } from "next-intl";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Marek Stefaniak",
  icons: {
    icon: "/favicon.ico",
  },
  authors: [{ name: "Marek Stefaniak" }],
  description: "Portfolio website by Marek Stefaniak",
  keywords: [
    "Marek Stefaniak",
    "Portfolio",
    "Backend Developer",
    "Software Engineer",
    "Python",
    "Django",
    "FastAPI",
  ],
  openGraph: {
    title: "Marek Stefaniak",
    description: "Portfolio website by Marek Stefaniak",
    url: "https://madgotten.me",
    images: [
      {
        url: "https://www.madgotten.me/logo.png",
        width: 256,
        height: 256,
        alt: "Marek Stefaniak Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
  setRequestLocale(locale);
  const messages = useMessages();

  // Current impl for selecting client translations
  // TODO: change this when tree shaking is implemented in next-intl
  const pickedMessages = {
    Nav: messages["Nav"],
  };

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${poppins.className} dark:bg-dark dark:text-white bg-white text-black`}>
        <NextIntlClientProvider messages={pickedMessages} locale={locale}>
          <ThemeProvider attribute="class">{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
