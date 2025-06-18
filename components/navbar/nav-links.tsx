import NavlinkItem from "@/components/ui/navlink";
import { useTranslations } from "next-intl";

export default function NavLinks({
  activeLink,
  handleClick,
}: {
  activeLink: string;
  handleClick: (sectionId: string) => void;
}) {
  const t = useTranslations("Nav");
  return (
    <>
      <NavlinkItem
        isActive={activeLink === "about"}
        handleClick={() => handleClick("about")}
        text={t("about")}
        color="green"
      />
      <NavlinkItem
        isActive={activeLink === "projects"}
        handleClick={() => handleClick("projects")}
        text={t("projects")}
        color="blue"
      />
      <NavlinkItem
        isActive={activeLink === "technology"}
        handleClick={() => handleClick("technology")}
        text={t("technology")}
        color="yellow"
      />
      <NavlinkItem
        isActive={activeLink === "contact"}
        handleClick={() => handleClick("contact")}
        text={t("contact")}
        color="pink"
      />
    </>
  );
}
