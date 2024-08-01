import Navlink from "@/components/ui/navlink";
import ThemeToggle from "./ui/theme-toggle";

export default function NavbarDesktop({
  activeLink,
  handleClick,
}: {
  activeLink: string;
  handleClick: (href: string) => void;
}) {
  return (
    <div className="sm:flex hidden relative justify-center z-10">
      <nav className="flex gap-6">
        <Navlink
          isActive={activeLink === "#about"}
          handleClick={() => handleClick("#about")}
          href="#about"
          text="About"
          color="green"
        />
        <Navlink
          isActive={activeLink === "#projects"}
          handleClick={() => handleClick("#projects")}
          href="#projects"
          text="Projects"
          color="blue"
        />
        <Navlink
          isActive={activeLink === "#technology"}
          handleClick={() => handleClick("#technology")}
          href="#technology"
          text="Technology"
          color="yellow"
        />
        <Navlink
          isActive={activeLink === "#contact"}
          handleClick={() => handleClick("#contact")}
          href="#contact"
          text="Contact"
          color="pink"
        />
      </nav>
      <div className="absolute right-0 flex gap-6">
        <button className="underline underline-offset-4 text-base font-medium">
          PL
        </button>
        <ThemeToggle />
      </div>
    </div>
  );
}
