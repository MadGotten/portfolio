import { useTranslations } from "next-intl";
import idlepartsSrc from "@/public/idleparts.webp";
import socialLifeSrc from "@/public/social-life.webp";
import eventioSrc from "@/public/eventio.webp";
import tasksyncSrc from "@/public/tasksync.webp";
import petsSrc from "@/public/pets.webp";
import ProjectCard from "@/components/project-card";

export default function Projects() {
  const t = useTranslations("Projects");
  const projects = [
    {
      name: "idleparts",
      src: idlepartsSrc,
      website: "https://idleparts.madgotten.me",
      github: "https://github.com/MadGotten/idleparts",
      stack: ["Express.js", "React", "MongoDB"],
      slowHost: true,
    },
    {
      name: "social-life",
      src: socialLifeSrc,
      website: "https://social-life.madgotten.me",
      github: "https://github.com/MadGotten/Social-Life",
      stack: ["Flask", "HTMX"],
      slowHost: true,
    },
    {
      name: "eventio",
      src: eventioSrc,
      website: "https://eventio.madgotten.me",
      github: "https://github.com/MadGotten/Eventio",
      stack: ["Django", "HTMX", "Alpine.js", "PostgreSQL"],
      slowHost: true,
    },
    {
      name: "tasksync",
      src: tasksyncSrc,
      website: "https://tasksync.madgotten.me",
      github: "https://github.com/MadGotten/Tasksync",
      stack: ["Java", "Spring Boot", "React", "PostgreSQL", "Keycloak"],
    },
    {
      name: "pets",
      src: petsSrc,
      website: "https://github.com/MadGotten/Praca_inzynierska",
      github: "https://github.com/MadGotten/Praca_inzynierska",
      stack: ["Django REST Framework", "React Native", "JWT", "PostgreSQL"],
      containImg: true,
    },
  ];

  return (
    <div id="projects" className="flex flex-col items-center gap-8 pt-24" data-section>
      <h2 className="md:text-5xl sm:text-4xl text-3xl !leading-normal font-semibold w-fit flex gap-2">
        <span className="px-4 rounded bg-blue text-black">{t("heading")}</span>
      </h2>
      <div className="flex items-stretch justify-center dark:text-white text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
