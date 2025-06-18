"use client";
import { useState, useEffect, useRef } from "react";
import NavbarDesktop from "@/components/navbar/navbar-desktop";
import NavbarMobile from "@/components/navbar/navbar-mobile";

export default function Navbar() {
  const mount = useRef<boolean>(false);
  const [activeLink, setActiveLink] = useState<string>("#home");
  const [scrolling, setScrolling] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | number>(0);

  const handleClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveLink(sectionId);
    setScrolling(true);
    clearTimeout(timeoutRef.current);
    const timeoutId = setTimeout(() => {
      setScrolling(false);
    }, 700);
    timeoutRef.current = timeoutId;
    return () => {
      clearTimeout(timeoutId);
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!scrolling) {
        const sections = ["home", "about", "projects", "technology", "contact"];
        const offsets = sections
          .map((id) => {
            const section = document.getElementById(id);
            if (section) {
              const rect = section.getBoundingClientRect();
              return {
                id,
                top: rect.top,
                bottom: rect.bottom,
              };
            }
            return;
          })
          .filter(Boolean);

        const inView = offsets.find((section) => {
          if (!section) return false;

          // First and last sections must have diffrent window height thresholds
          if (section.id === "about" || section.id === "contact") {
            return (
              section.top <= window.innerHeight / 1.5 && section.bottom >= window.innerHeight / 3
            );
          }

          return (
            section.top <= window.innerHeight / 1.8 && section.bottom >= window.innerHeight / 1.8
          );
        });
        if (inView && activeLink !== inView.id) {
          setActiveLink(inView.id);
        }
      }
    };
    // Set intial active link only on mount
    if (!mount.current) {
      mount.current = true;
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink, scrolling]);

  return (
    <header className="fixed w-full left-0 top-0 backdrop-blur-[10px]  z-10 dark:bg-dark dark:bg-opacity-40 bg-white bg-opacity-40">
      <div className="2xl:container 2xl:left-auto mx-auto p-6">
        <NavbarDesktop activeLink={activeLink} handleClick={handleClick} />
        <NavbarMobile activeLink={activeLink} handleClick={handleClick} />
      </div>
    </header>
  );
}
