import Navlink from "@/components/ui/navlink";
import ThemeToggle from "../ui/theme-toggle";
import LanguageSwitch from "../ui/language-switch";
import { useTranslations } from "next-intl";

export default function NavbarDesktop({
  activeLink,
  handleClick,
}: {
  activeLink: string;
  handleClick: (href: string) => void;
}) {
  const t = useTranslations("Nav");
  return (
    <div className="sm:flex hidden relative justify-center z-10">
      <nav className="flex gap-6">
        <Navlink
          isActive={activeLink === "#about"}
          handleClick={() => handleClick("#about")}
          href="#about"
          text={t("about")}
          color="green"
        />
        <Navlink
          isActive={activeLink === "#projects"}
          handleClick={() => handleClick("#projects")}
          href="#projects"
          text={t("projects")}
          color="blue"
        />
        <Navlink
          isActive={activeLink === "#technology"}
          handleClick={() => handleClick("#technology")}
          href="#technology"
          text={t("technology")}
          color="yellow"
        />
        <Navlink
          isActive={activeLink === "#contact"}
          handleClick={() => handleClick("#contact")}
          href="#contact"
          text={t("contact")}
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
