export default function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center gap-8 pt-24">
      <h2 className="md:text-5xl sm:text-4xl text-3xl !leading-normal font-semibold w-fit flex gap-2">
        <span className="px-4 rounded bg-blue text-black">Projects</span>
      </h2>
      <div className="flex md:flex-row flex-col items-center justify-center gap-8 flex-wrap dark:text-white text-black">
        <div className="flex gap-2 p-4 flex-col border border-light w-[332px] rounded-lg">
          <div className="bg-light w-[300px] h-[160px] rounded-lg"></div>
          <h4 className="text-xl leading-normal font-medium">Idleparts</h4>
          <p className="text-base">
            Strona e-commerce części komputerowych. Pozwala na zamawianie oraz
            zawiera narzędzia administracyjne
          </p>
        </div>
        <div className="flex gap-2 p-4 flex-col border border-light w-[332px] rounded-lg">
          <div className="bg-light w-[300px] h-[160px] rounded-lg"></div>
          <h4 className="text-xl leading-normal font-medium">Idleparts</h4>
          <p className="text-base">
            Strona e-commerce części komputerowych. Pozwala na zamawianie oraz
            zawiera narzędzia administracyjne
          </p>
        </div>
        <div className="flex gap-2 p-4 flex-col border border-light w-[332px] rounded-lg">
          <div className="bg-light w-[300px] h-[160px] rounded-lg"></div>
          <h4 className="text-xl leading-normal font-medium">Idleparts</h4>
          <p className="text-base">
            Strona e-commerce części komputerowych. Pozwala na zamawianie oraz
            zawiera narzędzia administracyjne
          </p>
        </div>
      </div>
      <button className="p-2 rounded bg-blue text-black flex items-center gap-1">
        Show more
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4998 4.16675V15.8334M10.4998 15.8334L16.3332 10.0001M10.4998 15.8334L4.6665 10.0001"
            className="stroke-black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
