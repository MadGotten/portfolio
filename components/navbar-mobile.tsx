"use client";
import { useState } from "react";
import Navlink from "./ui/navlink";
import ThemeToggle from "./ui/theme-toggle";

export default function NavbarMobile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sm:hidden relative flex flex-col">
      <div className="flex justify-between">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 22V12H15V22M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
              className="dark:stroke-white stroke-black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button onClick={toggleMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              className="dark:stroke-white stroke-black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="flex flex-col items-center gap-6 p-4">
          <Navlink text="About" color="green" />
          <Navlink text="Projects" color="blue" />
          <Navlink text="Technology" color="yellow" />
          <Navlink text="Contact" color="pink" />
          <div className="flex gap-6">
            <button className="underline underline-offset-4 text-base font-medium">
              PL
            </button>
            <ThemeToggle />
          </div>
        </nav>
      )}
    </div>
  );
}
