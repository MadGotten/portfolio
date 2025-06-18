"use client";
import { useState, useEffect } from "react";
import Navlink from "../ui/navlink";
import Link from "next/link";
import ThemeToggle from "../ui/theme-toggle";
import LanguageSwitch from "../ui/language-switch";
import { HomeIcon, MenuIcon } from "@/components/svg";
import { useTranslations } from "next-intl";

export default function NavbarMobile({
  activeLink,
  handleClick,
}: {
  activeLink: string;
  handleClick: (href: string) => void;
}) {
  const t = useTranslations("Nav");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsAnimating(true);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);

  return (
    <div
      className="sm:hidden relative flex flex-col overflow-hidden transition-[height] duration-300 ease-in-out"
      style={{ height: isMenuOpen ? "272px" : "24px" }}
    >
      <div className="flex justify-between">
        <Link href="#home" aria-label="Home">
          <HomeIcon />
        </Link>
        <button onClick={toggleMenu} aria-label="Menu">
          <MenuIcon />
        </button>
      </div>
      {(isMenuOpen || isAnimating) && (
        <nav className="flex flex-col items-center gap-6 p-4">
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
          <div className="flex gap-6">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </nav>
      )}
    </div>
  );
}
