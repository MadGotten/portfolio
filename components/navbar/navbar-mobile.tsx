"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import NavLinks from "@/components/navbar/nav-links";
import ThemeToggle from "@/components/ui/theme-toggle";
import LanguageSwitch from "@/components/ui/language-switch";
import { HomeIcon, MenuIcon } from "@/components/svg";

export default function NavbarMobile({
  activeLink,
  handleClick,
}: {
  activeLink: string;
  handleClick: (sectionId: string) => void;
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
        <Link href="/" aria-label="Home">
          <HomeIcon />
        </Link>
        <button onClick={toggleMenu} aria-label="Menu">
          <MenuIcon />
        </button>
      </div>
      {(isMenuOpen || isAnimating) && (
        <nav className="flex flex-col items-center gap-6 p-4">
          <NavLinks activeLink={activeLink} handleClick={handleClick} />
          <div className="flex gap-6">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </nav>
      )}
    </div>
  );
}
