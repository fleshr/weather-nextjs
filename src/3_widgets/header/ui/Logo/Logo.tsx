import { useTranslations } from "next-intl";
import { WeatherIcon } from "@/4_shared/ui";

export const Logo = () => {
  const t = useTranslations("widgets.header");

  return (
    <div className="flex items-center gap-2.5">
      <WeatherIcon icon="02d" size={32} className="md:size-9" />
      <span className="text-lg font-medium md:pt-0.5 md:text-[22px] dark:text-white">
        {t("logoTitle")}
      </span>
    </div>
  );
};
