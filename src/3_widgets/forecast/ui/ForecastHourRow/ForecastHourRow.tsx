import { Forecast } from "@/4_shared/model";
import { WeatherIcon } from "@/4_shared/ui";
import { useTranslations } from "next-intl";
import { FC } from "react";

type ForecastHourRowProps = {
  forecast: Forecast[0]["weather"][0];
};

export const ForecastHourRow: FC<ForecastHourRowProps> = ({
  forecast: {
    date,
    icon,
    description,
    temperature,
    feelsLike,
    windSpeed,
    windDirection,
    humidity,
    pressure,
  },
}) => {
  const t = useTranslations("widgets.forecast.hourRow");
  const wind = t.rich("wind", {
    units: (chunks) => <span className="md:hidden">{chunks}</span>,
    windSpeed,
    windDirection,
  });

  return (
    <div className="grid grid-cols-[minmax(max-content,_2fr)_1.625rem_1fr_minmax(max-content,_2fr)] items-center gap-3 md:grid md:grid-cols-[65fr_90fr_295fr_80fr] md:gap-5 lg:grid-cols-[65fr_90fr_295fr_80fr_80fr] xl:grid-cols-[65fr_90fr_295fr_80fr_80fr_80fr] 2xl:grid-cols-[65fr_90fr_295fr_80fr_80fr_80fr_80fr]">
      <div className="md:order-1 md:text-center">{t("time", { date })}</div>
      <div className="flex items-center gap-2.5 md:order-3">
        <WeatherIcon icon={icon} size={26} className="md:size-7" />
        <span className="first-letter:uppercase max-md:hidden">
          {description}
        </span>
      </div>
      <div className="font-medium md:order-2 md:text-center">
        {t("temperature", { temperature })}
      </div>
      <div className="text-right md:order-3 md:text-center">{wind}</div>
      <div className="max-2xl:hidden md:order-5 md:text-center">
        {t("humidity", { humidity })}
      </div>
      <div className="max-xl:hidden md:order-6 md:text-center">
        {t("pressure", { pressure })}
      </div>
      <div className="max-lg:hidden md:order-7 md:text-center">
        {t("feelsLike", { feelsLike })}
      </div>
    </div>
  );
};
