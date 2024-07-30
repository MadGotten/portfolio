export default function Projects() {
  return (
    <div className="flex flex-col items-center gap-6 pt-20">
      <h2 className="md:text-5xl sm:text-4xl text-3xl !leading-normal font-semibold w-fit flex gap-2">
        <span className="px-4 rounded bg-blue text-black">Projects</span>
      </h2>
      <div className="flex md:flex-row flex-col items-center gap-8">
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
      <button className="font-medium px-2 py-1 rounded bg-blue text-black">
        Show more
      </button>
    </div>
  );
}
