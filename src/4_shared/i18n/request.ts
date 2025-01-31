import { getRequestConfig } from "next-intl/server";
import { config, locales, defaultLocale } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale as (typeof locales)[number])) {
    locale = defaultLocale;
  }

  return {
    ...config,
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
