import NavLinks from "@/components/navbar/nav-links";
import ThemeToggle from "../ui/theme-toggle";
import LanguageSwitch from "../ui/language-switch";

export default function NavbarDesktop({
  activeLink,
  handleClick,
}: {
  activeLink: string;
  handleClick: (sectionId: string) => void;
}) {
  return (
    <div className="sm:flex hidden relative justify-center z-10">
      <nav className="flex gap-6">
        <NavLinks activeLink={activeLink} handleClick={handleClick} />
      </nav>
      <div className="absolute right-0 flex gap-6">
        <LanguageSwitch />
        <ThemeToggle />
      </div>
    </div>
  );
}
