import Navlink from "@/components/ui/navlink";
import ThemeToggle from "./ui/theme-toggle";
import LanguageSwitch from "./ui/language-switch";

export default function NavbarDesktop({
  about,
  projects,
  technology,
  contact,
  activeLink,
  handleClick,
}: {
  about: string;
  projects: string;
  technology: string;
  contact: string;
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
          text={about}
          color="green"
        />
        <Navlink
          isActive={activeLink === "#projects"}
          handleClick={() => handleClick("#projects")}
          href="#projects"
          text={projects}
          color="blue"
        />
        <Navlink
          isActive={activeLink === "#technology"}
          handleClick={() => handleClick("#technology")}
          href="#technology"
          text={technology}
          color="yellow"
        />
        <Navlink
          isActive={activeLink === "#contact"}
          handleClick={() => handleClick("#contact")}
          href="#contact"
          text={contact}
          color="pink"
        />
      </nav>
      <div className="absolute right-0 flex gap-6">
        <LanguageSwitch />
        <ThemeToggle />
      </div>
    </div>
  );
}
