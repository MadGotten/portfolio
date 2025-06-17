import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { GithubSmallIcon } from "@/components/svg";

type ProjectCardProps = {
  project: {
    name: string;
    src: StaticImageData;
    website: string;
    github: string;
    stack: string[];
  };
  t: any;
};

const ProjectCard = ({ project, t }: ProjectCardProps) => {
  return (
    <div className="flex gap-4 p-4 flex-col justify-between border border-light min-w-[270px] max-w-[340px] xl:max-w-[362px] rounded-lg relative">
      <div className="absolute -top-4 -right-4">
        <div className="relative flex flex-row-reverse justify-end items-center gap-2">
          <button className="w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-yellow text-black flex justify-center items-center peer">
            <span className="font-medium select-none">!</span>
          </button>
          <div className="-left-8 top-0 bg-yellow text-black w-fit text-nowrap text-sm px-2 leading-loose rounded-[10px] pointer-events-none select-none opacity-0 peer-hover:opacity-100  transition-opacity">
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
        <p className="text-sm">{t(`${project.name}.body`)}</p>
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
  );
};

export default ProjectCard;
