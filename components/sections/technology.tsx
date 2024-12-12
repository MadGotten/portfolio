import { useTranslations } from "next-intl";
import {
  PythonIcon,
  PhpIcon,
  HtmlIcon,
  CssIcon,
  SqlIcon,
  ReactIcon,
  NextjsIcon,
  TailwindIcon,
  JavascriptIcon,
  BootstrapIcon,
  SassIcon,
  DjangoIcon,
  DRFIcon,
  FlaskIcon,
  ExpressjsIcon,
  LaravelIcon,
  MysqlIcon,
  PostgresqlIcon,
  MongodbIcon,
  FirebaseIcon,
  GitIcon,
  DockerIcon,
} from "@/components/svg";
import TechCategory from "@/components/tech-category";

export default function Technology() {
  const technology = useTranslations("Technology");
  const languages = [
    { Icon: PythonIcon, name: "Python" },
    { Icon: JavascriptIcon, name: "Javascript" },
    { Icon: PhpIcon, name: "PHP" },
    [
      { Icon: HtmlIcon, name: "HTML" },
      { Icon: CssIcon, name: "CSS" },
    ],
    { Icon: SqlIcon, name: "SQL" },
  ];

  const frontend = [
    [
      { Icon: ReactIcon, name: "React" },
      { Icon: NextjsIcon, name: "Next.js" },
    ],
    { Icon: TailwindIcon, name: "TailwindCSS" },
    { Icon: BootstrapIcon, name: "Bootstrap" },
    { Icon: SassIcon, name: "SASS" },
  ];

  const backend = [
    [
      { Icon: DjangoIcon, name: "Django" },
      { Icon: DRFIcon, name: "DRF" },
    ],
    { Icon: FlaskIcon, name: "Flask" },
    { Icon: ExpressjsIcon, name: "Express.js" },
    { Icon: LaravelIcon, name: "Laravel" },
    { Icon: MongodbIcon, name: "MongoDB" },
    [
      { Icon: MysqlIcon, name: "MySQL" },
      { Icon: PostgresqlIcon, name: "PostgreSQL" },
    ],
    { Icon: FirebaseIcon, name: "Firebase" },
  ];

  const tools = [
    [
      { Icon: GitIcon, name: "Git" },
      { Icon: DockerIcon, name: "Docker" },
    ],
  ];
  return (
    <div id="technology" className="flex flex-col items-center gap-8 pt-24" data-section>
      <h2 className="md:text-5xl sm:text-4xl text-3xl !leading-normal font-semibold w-fit flex gap-2">
        <span className="px-4 rounded bg-yellow text-black flex gap-2 items-center">
          {technology("heading")}
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26 4L6 28H24L22 44L42 20H24L26 4Z"
              className="stroke-black"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </h2>
      <div className="flex flex-col justify-start gap-8 w-full sm:w-fit md:text-xl md:font-medium xs:text-lg text-base font-normal">
        <TechCategory title={technology("languages")} items={languages} />
        <TechCategory title={technology("frontend")} items={frontend} />
        <TechCategory title={technology("backend")} items={backend} />
        <TechCategory title={technology("tools")} items={tools} row={true} />
      </div>
    </div>
  );
}
