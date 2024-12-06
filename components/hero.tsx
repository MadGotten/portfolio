import { useTranslations } from "next-intl";

export default function Hero() {
  const home = useTranslations("Home");

  return (
    <section id="home" className="h-svh flex flex-col justify-center items-center" data-section>
      <div>
        <div className="px-1 rounded bg-green text-black w-fit">
          <p className="md:text-xl sm:text-lg text-base font-medium">{home("hello")}</p>
        </div>
        <h1 className="md:text-[4rem] sm:text-5xl text-4xl leading-tight font-semibold">
          Marek Stefaniak
        </h1>
        <div className="flex items-center justify-center gap-2">
          <p className="md:text-3xl sm:text-2xl text-xl font-medium">backend developer</p>
          <svg
            className="md:h-10 md:w-10 sm:h-6 sm:w-6 h-5 w-5 shrink-0"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.6666 30.5L36.6666 20.5L26.6666 10.5M13.3333 10.5L3.33325 20.5L13.3333 30.5"
              className="dark:stroke-white stroke-black"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
