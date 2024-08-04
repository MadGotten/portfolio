import Link from "next/link";
import { useLocale } from "next-intl";

export default function LanguageSwitch() {
  const currentLocale = useLocale();
  return currentLocale == "en" ? (
    <Link
      className="underline underline-offset-4 text-base font-medium"
      href="/pl"
    >
      PL
    </Link>
  ) : (
    <Link
      className="underline underline-offset-4 text-base font-medium"
      href="/en"
    >
      EN
    </Link>
  );
}
