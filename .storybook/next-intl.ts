import { config, defaultLocale, en, ru } from "@/4_shared/i18n";

export const nextIntl = {
  ...config,
  defaultLocale,
  messagesByLocale: { ru, en },
};
