import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "pl"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locale && !locales.includes(locale as any)) notFound();

  return {
    locale,
    messages: (await import(`@/locales/${locale}.json`)).default,
  };
});
