import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Technology from "@/components/technology";
import Contact from "@/components/contact";
import { unstable_setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const nav = useTranslations("Nav");
  return (
    <main className="2xl:container mx-auto px-4 sm:px-6 2xl:p-0 relative">
      <Navbar
        about={nav("about")}
        projects={nav("projects")}
        technology={nav("technology")}
        contact={nav("contact")}
      />
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
