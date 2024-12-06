import Image from "next/image";
import profilePic from "@/public/Marek.webp";
import { useTranslations } from "next-intl";
import { DownloadIcon } from "@/components/svg";

export default function About() {
  const about = useTranslations("About");
  return (
    <div id="about" className="flex flex-col items-center gap-8 pt-24" data-section>
      <h2 className="md:text-5xl sm:text-4xl text-3xl !leading-normal font-semibold w-fit flex gap-2">
        <span className="px-4 rounded bg-green text-black">{about("heading1")}</span>
        {about("heading2")}
      </h2>
      <div className="flex md:flex-row flex-col items-center gap-6">
        <div className="flex gap-4 flex-col items-center md:items-start">
          <p className="sm:text-xl text-base font-light leading-normal max-w-[580px]">
            {about.rich("paragraph", {
              underscore: (chunks) => <u>{chunks}</u>,
            })}
          </p>
          <button className="flex bg-green hover:bg-dark-green transition-colors gap-1 p-2 text-black rounded text-base w-fit">
            {about("download")}
            <DownloadIcon />
          </button>
        </div>
        <div className="lg:h-[400px] lg:w-[300px] lg:max-h-[400px] lg:max-w-[300px] max-h-[300px] max-w-[236px] xs:h-[300px] xs:w-[236px] xs:min-h-[300px] xs:min-w-[236px] mr-6 lg:mr-0">
          <Image
            src={profilePic}
            height={400}
            quality="85"
            alt="Picture of the portfolio author"
            className="shadow-[24px_24px_rgb(36,229,102)]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
