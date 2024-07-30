import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Technology from "@/components/technology";

export default function Home() {
  return (
    <main className="2xl:container mx-auto px-6 2xl:p-0 relative">
      <Navbar />
      <Hero />
      <div className="h-[20vh]" />
      <About />
      <div className="h-[25vh]" />
      <Projects />
      <div className="h-[25vh]" />
      <Technology />
    </main>
  );
}
