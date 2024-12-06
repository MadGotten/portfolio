"use client";
import { useState, useEffect } from "react";
import Navlink from "../ui/navlink";
import Link from "next/link";
import ThemeToggle from "../ui/theme-toggle";
import LanguageSwitch from "../ui/language-switch";
import { HomeIcon, MenuIcon } from "@/components/svg";

export default function NavbarMobile({
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
        <Link href="#home">
          <HomeIcon />
        </Link>
        <button onClick={toggleMenu}>
          <MenuIcon />
        </button>
      </div>
      {(isMenuOpen || isAnimating) && (
        <nav className="flex flex-col items-center gap-6 p-4">
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
          <div className="flex gap-6">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </nav>
      )}
    </div>
  );
}
