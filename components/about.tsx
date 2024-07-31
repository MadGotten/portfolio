import Image from "next/image";
import profilePic from "@/public/Marek.webp";

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center gap-8 pt-24">
      <h2 className="md:text-5xl sm:text-4xl text-3xl !leading-normal font-semibold w-fit flex gap-2">
        <span className="px-4 rounded bg-green text-black">About</span> Me
      </h2>
      <div className="flex md:flex-row flex-col items-center gap-6">
        <div className="flex gap-4 flex-col items-center md:items-start">
          <p className="sm:text-xl text-base font-light leading-normal max-w-[580px]">
            Hello! I&apos;m Marek. I’m a 4th year engineering student in
            Computer Science at Uniwersytet Merito. I develop applications in
            Python and Node.js, primarly focusing on backend. However, I aspire
            to become a full-stack developer in the future ✨
          </p>
          <button className="flex bg-green gap-1 p-2 text-black rounded text-base w-fit">
            Download CV{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 12.5V15.8333C18 16.2754 17.8244 16.6993 17.5118 17.0118C17.1993 17.3244 16.7754 17.5 16.3333 17.5H4.66667C4.22464 17.5 3.80072 17.3244 3.48816 17.0118C3.17559 16.6993 3 16.2754 3 15.8333V12.5M6.33333 8.33333L10.5 12.5M10.5 12.5L14.6667 8.33333M10.5 12.5V2.5"
                className="stroke-black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="lg:h-[400px] lg:w-[314px] h-[300px] w-[236px] min-h-[300px] min-w-[236px]">
          <Image
            src={profilePic}
            height={400}
            alt="Picture of the portfolio author"
            className="shadow-[24px_24px_rgb(36,229,102)]"
          />
        </div>
      </div>
    </div>
  );
}
