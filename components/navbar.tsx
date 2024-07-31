import Navlink from "@/components/ui/navlink";
import ThemeToggle from "./ui/theme-toggle";
import NavbarMobile from "@/components/navbar-mobile";

const NavbarDesktop = () => {
  return (
    <div className="sm:flex hidden relative justify-center">
      <nav className="flex gap-6">
        <Navlink href="#about" text="About" color="green" />
        <Navlink href="#projects" text="Projects" color="blue" />
        <Navlink href="#technology" text="Technology" color="yellow" />
        <Navlink href="#contact" text="Contact" color="pink" />
      </nav>
      <div className="absolute right-0 flex gap-6">
        <button className="underline underline-offset-4 text-base font-medium">
          PL
        </button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <header className="fixed w-full left-0 top-0 backdrop-blur dark:bg-dark dark:bg-opacity-30 bg-white bg-opacity-30">
      <div className="2xl:container 2xl:left-auto mx-auto p-6">
        <NavbarDesktop />
        <NavbarMobile />
      </div>
    </header>
  );
}
