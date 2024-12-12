import { useTranslations } from "next-intl";
import Image from "next/image";
import idlepartsSrc from "@/public/idleparts.png";
import socialLifeSrc from "@/public/social-life.png";
import eventioSrc from "@/public/eventio.png";
import Link from "next/link";
import LoadProjects from "@/components/ui/load-projects";
import { GithubSmallIcon } from "@/components/svg";

export default function Projects() {
  const t = useTranslations("Projects");
  const projects = [
    {
      name: "idleparts",
      src: idlepartsSrc,
      website: "https://idleparts.madgotten.pl",
      github: "https://github.com/MadGotten/idleparts",
      stack: ["Express.js", "React.js", "MongoDB"],
    },
    {
      name: "social-life",
      src: socialLifeSrc,
      website: "https://social-life.madgotten.pl",
      github: "https://github.com/MadGotten/Social-Life",
      stack: ["Flask", "HTMX"],
    },
    {
      name: "eventio",
      src: eventioSrc,
      website: "https://eventio.madgotten.pl",
      github: "https://github.com/MadGotten/Eventio",
      stack: ["Django", "HTMX", "Alpine.js", "PostgreSQL"],
    },
  ];

  return (
    <div id="projects" className="flex flex-col items-center gap-8 pt-24" data-section>
      <h2 className="md:text-5xl sm:text-4xl text-3xl !leading-normal font-semibold w-fit flex gap-2">
        <span className="px-4 rounded bg-blue text-black">{t("heading")}</span>
      </h2>
      <div className="flex md:flex-row flex-col items-stretch  justify-center gap-8 flex-wrap dark:text-white text-black">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex gap-4 p-4 flex-col justify-between border border-light min-w-[270px] max-w-[362px] rounded-lg relative"
          >
            <div className="absolute -top-4 -right-4">
              <div className="relative flex flex-row-reverse justify-end items-center gap-2">
                <button className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-orange text-black flex justify-center items-center peer">
                  <span className="font-medium select-none">!</span>
                </button>
                <div className="-left-8 top-0 bg-orange text-black w-fit text-nowrap text-sm px-2 leading-loose rounded-[10px] pointer-events-none select-none opacity-0 peer-hover:opacity-100  transition-opacity">
                  {t("tooltip-hosting")}
                </div>
              </div>
            </div>
            <div className="flex gap-2 flex-col">
              <Link href={project.website} target="_blank">
                <Image
                  src={project.src}
                  alt={t(`${project.name}.imageAlt`)}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                ></Image>
              </Link>
              <Link
                href={project.website}
                target="_blank"
                className="text-xl leading-normal font-medium underline underline-offset-2"
              >
                {t(`${project.name}.title`)}
              </Link>
              <p className="text-base">{t(`${project.name}.body`)}</p>
            </div>
            <div className="flex items-end justify-between gap-6">
              <Link
                href={project.github}
                target="_blank"
                className="w-10 h-10 hover:scale-110 transition-transform flex-shrink-0"
              >
                <GithubSmallIcon />
              </Link>
              <div className="flex flex-row items-center h-full flex-wrap gap-2 justify-end">
                {project.stack.map((tech, i) => {
                  return (
                    <span
                      key={i}
                      className="bg-blue text-sm text-black px-2 rounded-lg leading-6 font-medium"
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      <LoadProjects btnText={t("show-more")} alertText={t("alert-text")} />
    </div>
  );
}
