export default function NavlinkItem({
  text,
  color = "green",
  isActive,
  handleClick,
}: {
  text: string;
  color: string;
  isActive: boolean;
  handleClick: () => void;
}) {
  const variantHover: { [key: string]: string } = {
    green: "hover:bg-green",
    blue: "hover:bg-blue",
    yellow: "hover:bg-yellow",
    pink: "hover:bg-pink",
  };
  const variant: { [key: string]: string } = {
    green: "bg-green",
    blue: "bg-blue",
    yellow: "bg-yellow",
    pink: "bg-pink",
  };
  const activeStyle = `${variant[color]} text-black scale-110`;
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${variantHover[color]} ${
        isActive ? activeStyle : ""
      } hover:text-black px-1 rounded font-medium transition-transform ease-in-out duration-150 hover:scale-110`}
      aria-label={text}
    >
      {text}
    </button>
  );
}
