import { useTranslations } from "next-intl";
import {
  LightningIcon,
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

import TechStack from "@/components/tech-stack";

export default function Technology() {
  const technology = useTranslations("Technology");

  return (
    <div id="technology" className="flex flex-col items-center gap-8 pt-24" data-section>
      <h2 className="md:text-5xl sm:text-4xl text-3xl !leading-normal font-semibold w-fit flex gap-2">
        <span className="px-4 rounded bg-yellow text-black flex gap-2 items-center">
          {technology("heading")}
          <LightningIcon />
        </span>
      </h2>
      <div className="flex flex-col justify-start gap-8 w-full sm:w-fit md:text-xl md:font-medium xs:text-lg text-base font-normal">
        <TechStack.List title={technology("languages")}>
          <TechStack.Item Icon={PythonIcon} name="Python" />
          <TechStack.Item Icon={JavascriptIcon} name="Javascript" />
          <TechStack.Item Icon={PhpIcon} name="PHP" />
          <TechStack.Group>
            <TechStack.Item Icon={HtmlIcon} name="HTML" />
            <TechStack.Item Icon={CssIcon} name="CSS" />
          </TechStack.Group>
          <TechStack.Item Icon={SqlIcon} name="SQL" />
        </TechStack.List>

        <TechStack.List title={technology("frontend")}>
          <TechStack.Group>
            <TechStack.Item Icon={ReactIcon} name="React" />
            <TechStack.Item Icon={NextjsIcon} name="Next.js" />
          </TechStack.Group>
          <TechStack.Item Icon={TailwindIcon} name="TailwindCSS" />
          <TechStack.Item Icon={BootstrapIcon} name="Bootstrap" />
          <TechStack.Item Icon={SassIcon} name="SASS" />
        </TechStack.List>

        <TechStack.List title={technology("backend")}>
          <TechStack.Group>
            <TechStack.Item Icon={DjangoIcon} name="Django" />
            <TechStack.Item Icon={DRFIcon} name="DRF" />
          </TechStack.Group>
          <TechStack.Item Icon={FlaskIcon} name="Flask" />
          <TechStack.Item Icon={ExpressjsIcon} name="Express.js" />
          <TechStack.Item Icon={LaravelIcon} name="Laravel" />
          <TechStack.Item Icon={MongodbIcon} name="MongoDB" />
          <TechStack.Group>
            <TechStack.Item Icon={MysqlIcon} name="MySQL" />
            <TechStack.Item Icon={PostgresqlIcon} name="PostgreSQL" />
          </TechStack.Group>
          <TechStack.Item Icon={FirebaseIcon} name="Firebase" />
        </TechStack.List>

        <TechStack.List title={technology("tools")}>
          <TechStack.Group>
            <TechStack.Item Icon={GitIcon} name="Git" />
            <TechStack.Item Icon={DockerIcon} name="Docker" />
          </TechStack.Group>
        </TechStack.List>
      </div>
    </div>
  );
}
