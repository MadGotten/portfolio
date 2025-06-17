import Link from "next/link";
import { useTranslations } from "next-intl";
import { LinkedinIcon, GithubIcon, MailIcon } from "@/components/svg";

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <div id="contact" className="flex flex-col items-center sm:gap-8 gap-6 pt-24" data-section>
      <h2 className="md:text-5xl sm:text-4xl text-3xl !leading-normal font-semibold w-fit flex gap-2">
        <span className="px-4 rounded bg-pink text-black">{t("heading1")}</span>
        {t("heading2")}
      </h2>
      <div className="flex flex-col items-center sm:gap-8 gap-6">
        <p className="md:text-xl sm:text-lg text-base font-light">{t("text")}</p>
        <div className="flex flex-row gap-8">
          <Link
            href="https://www.linkedin.com/in/marek-stefaniak-288888207/"
            target="_blank"
            className="hover:scale-105 transition-transform"
            rel="noopener noreferrer"
            aria-label={t("linkedInLink")}
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="https://github.com/MadGotten"
            target="_blank"
            className="hover:scale-105 transition-transform"
            rel="noopener noreferrer"
            aria-label={t("githubLink")}
          >
            <GithubIcon />
          </Link>
          <Link
            href="mailto:marekstefaniak16@gmail.com"
            className="hover:scale-105 transition-transform"
            aria-label={t("emailLink")}
          >
            <MailIcon />
          </Link>
        </div>
      </div>
    </div>
  );
}
