"use client";
import { useState, useEffect, useRef } from "react";
import NavbarDesktop from "@/components/navbar/navbar-desktop";
import NavbarMobile from "@/components/navbar/navbar-mobile";

export default function Navbar({
  about,
  projects,
  technology,
  contact,
}: {
  about: string;
  projects: string;
  technology: string;
  contact: string;
}) {
  const [activeLink, setActiveLink] = useState<string>("#home");
  const [scrolling, setScrolling] = useState<boolean>(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | number>(0);

  const handleClick = (href: string) => {
    setActiveLink(href);
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

        const inView = offsets.find(
          (section) =>
            section &&
            section.top <= window.innerHeight / 1.8 &&
            section.bottom >= window.innerHeight / 1.8
        );
        if (inView && activeLink !== `#${inView.id}`) {
          setActiveLink(`#${inView.id}`);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeLink, scrolling]);

  return (
    <header className="fixed w-full left-0 top-0 backdrop-blur z-10 dark:bg-dark dark:bg-opacity-30 bg-white bg-opacity-30">
      <div className="2xl:container 2xl:left-auto mx-auto p-6">
        <NavbarDesktop
          about={about}
          projects={projects}
          technology={technology}
          contact={contact}
          activeLink={activeLink}
          handleClick={handleClick}
        />
        <NavbarMobile
          about={about}
          projects={projects}
          technology={technology}
          contact={contact}
          activeLink={activeLink}
          handleClick={handleClick}
        />
      </div>
    </header>
  );
}
