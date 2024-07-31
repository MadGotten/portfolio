"use client";

import { useState, useEffect, useRef } from "react";
import Navlink from "@/components/ui/navlink";
import ThemeToggle from "./ui/theme-toggle";

export default function NavbarDesktop() {
  const [activeLink, setActiveLink] = useState<string>("");
  const [scrolling, setScrolling] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const handleClick = (href: string) => {
    setActiveLink(href);
    setScrolling(true);
    setTimeout(() => {
      setScrolling(false);
    }, 600);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");
    observer.current = new IntersectionObserver(
      (entries) => {
        if (!scrolling) {
          const visibleSection = entries.find(
            (entry) => entry.isIntersecting
          )?.target;
          if (visibleSection) {
            setActiveLink(`#${visibleSection.id}`);
          }
        }
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, [scrolling]);

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
