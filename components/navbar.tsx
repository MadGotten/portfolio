"use client";
import { useState, useEffect, useRef } from "react";
import NavbarDesktop from "@/components/navbar-desktop";
import NavbarMobile from "@/components/navbar-mobile";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState<string>("");
  const [scrolling, setScrolling] = useState<boolean>(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const handleClick = (href: string) => {
    setActiveLink(href);
    setScrolling(true);
    setTimeout(() => {
      setScrolling(false);
    }, 700);
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
      // threshold is too big for mobile find workaround
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
    <header className="fixed w-full left-0 top-0 backdrop-blur dark:bg-dark dark:bg-opacity-30 bg-white bg-opacity-30">
      <div className="2xl:container 2xl:left-auto mx-auto p-6">
        <NavbarDesktop activeLink={activeLink} handleClick={handleClick} />
        <NavbarMobile activeLink={activeLink} handleClick={handleClick} />
      </div>
    </header>
  );
}
