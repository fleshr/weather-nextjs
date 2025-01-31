import { cn } from "@/4_shared/lib";
import { useTranslations } from "next-intl";
import { FC } from "react";

type ForecastHeaderProps = {
  className?: string;
};

export const ForecastHeader: FC<ForecastHeaderProps> = ({ className }) => {
  const t = useTranslations("widgets.forecast.header");

  return (
    <div
      className={cn(
        "text-gray-450 grid grid-cols-[65fr_90fr_295fr_80fr_80fr_80fr] items-center gap-5 text-center text-sm font-medium max-md:hidden md:grid-cols-[65fr_90fr_295fr_80fr] lg:grid-cols-[65fr_90fr_295fr_80fr_80fr] xl:grid-cols-[65fr_90fr_295fr_80fr_80fr_80fr] 2xl:grid-cols-[65fr_90fr_295fr_80fr_80fr_80fr_80fr] dark:text-gray-400",
        className,
      )}
    >
      <div />
      <div>{t("temperature")}</div>
      <div />
      <div>{t("wind")}</div>
      <div className="max-2xl:hidden">{t("humidity")}</div>
      <div className="max-xl:hidden">{t("pressure")}</div>
      <div className="max-lg:hidden">{t("feelsLike")}</div>
    </div>
  );
};
