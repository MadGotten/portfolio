export default function Navlink({
  text,
  color = "green",
}: {
  text: string;
  color: string;
}) {
  const variant: { [key: string]: string } = {
    green: "hover:bg-green",
    blue: "hover:bg-blue",
    yellow: "hover:bg-yellow",
    pink: "hover:bg-pink",
  };
  return (
    <a
      href="#"
      className={`${variant[color]} hover:text-black px-1 rounded font-medium transition-transform ease-in-out duration-150 hover:scale-110`}
    >
      {text}
    </a>
  );
}
