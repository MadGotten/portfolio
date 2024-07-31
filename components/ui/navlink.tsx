import Link from "next/link";

export default function Navlink({
  text,
  href,
  color = "green",
  isActive,
  handleClick,
}: {
  text: string;
  href: string;
  color: string;
  isActive: boolean;
  handleClick: () => void;
}) {
  const variant: { [key: string]: string } = {
    green: "bg-green",
    blue: "bg-blue",
    yellow: "bg-yellow",
    pink: "bg-pink",
  };
  const activeStyle = `${variant[color]} text-black scale-110`;
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={`hover:${variant[color]} ${
        isActive ? activeStyle : ""
      } hover:text-black px-1 rounded font-medium transition-transform ease-in-out duration-150 hover:scale-110`}
    >
      {text}
    </Link>
  );
}
