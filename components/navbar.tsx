import Navlink from "@/components/ui/navlink";
import NavbarMobile from "@/components/navbar-mobile";

const NavbarDesktop = () => {
  return (
    <div className="sm:flex hidden relative justify-center">
      <nav className="flex gap-6">
        <Navlink text="About" color="green" />
        <Navlink text="Projects" color="blue" />
        <Navlink text="Technology" color="yellow" />
        <Navlink text="Contact" color="pink" />
      </nav>
      <div className="absolute right-0 flex gap-6">
        <button className="underline underline-offset-4 text-base">PL</button>
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z"
              stroke="#D9D9D9"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <div className="2xl:container 2xl:left-auto mx-auto fixed w-full left-0 top-0 p-6">
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  );
}
