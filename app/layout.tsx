import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marek Stefaniak",
  description: "Portfolio website by Marek Stefaniak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} dark:bg-dark dark:text-white bg-white text-black`}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
