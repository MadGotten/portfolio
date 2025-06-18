import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Technology from "@/components/sections/technology";
import Contact from "@/components/sections/contact";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);
  return (
    <main className="2xl:container mx-auto px-6 2xl:p-0 relative">
      <Navbar />
      <Hero />
      <About />
      <div className="h-[20vh]" />
      <Projects />
      <div className="h-[20vh]" />
      <Technology />
      <div className="h-[20vh]" />
      <Contact />
      <div className="h-[25vh]" />
    </main>
  );
}
