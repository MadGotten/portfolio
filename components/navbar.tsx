import NavbarDesktop from "@/components/navbar-desktop";
import NavbarMobile from "@/components/navbar-mobile";

export default function Navbar() {
  return (
    <header className="fixed w-full left-0 top-0 backdrop-blur dark:bg-dark dark:bg-opacity-30 bg-white bg-opacity-30">
      <div className="2xl:container 2xl:left-auto mx-auto p-6">
        <NavbarDesktop />
        <NavbarMobile />
      </div>
    </header>
  );
}
