"use client";

import { Link, routing, useRouter } from "@/4_shared/i18n";
import { cn } from "@/4_shared/lib";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { useSearchParams } from "next/navigation";
import { FC } from "react";

type FooterProps = {
  className?: string;
};

export const Footer: FC<FooterProps> = ({ className }) => {
  const router = useRouter();
  const locale = useLocale();
  const searchParams = useSearchParams();
  const t = useTranslations("widgets.footer");
  const { themes, setTheme, theme } = useTheme();

  const query = Object.fromEntries(searchParams ?? []);

  return (
    <footer
      className={cn(
        "flex gap-2 text-sm text-gray-600 max-md:flex-col max-md:items-center md:justify-between dark:text-gray-500",
        className,
      )}
    >
      <div className="flex flex-col gap-0.5 max-md:items-center">
        <label>
          <span>{t("themesLabel")}</span>
          <select
            name="theme"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          >
            {themes.map((theme) => (
              <option key={theme} value={theme}>
                {t(`themes.${theme as "light" | "dark" | "system"}`)}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>{t("localesLabel")}</span>
          <select
            name="locale"
            value={locale}
            onChange={(e) =>
              router.push({ pathname: "/", query }, { locale: e.target.value })
            }
          >
            {routing.locales.map((locale) => (
              <option key={locale} value={locale}>
                {t(`locales.${locale}`)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <span>
        {t("sourceCode")}
        <Link className="font-medium" href="https://github.com/fleshr">
          Github
        </Link>
      </span>
    </footer>
  );
};
