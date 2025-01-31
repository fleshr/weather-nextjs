import { Forecast } from "@/4_shared/model";
import { FC } from "react";
import { ForecastHourRow } from "../ForecastHourRow/ForecastHourRow";
import { useTranslations } from "next-intl";

type ForecastDayRowProps = {
  forecast: Forecast[0];
};

export const ForecastDayRow: FC<ForecastDayRowProps> = ({
  forecast: { weather, date },
}) => {
  const t = useTranslations("widgets.forecast.dayRow");

  return (
    <div className="grid-cols-[110px_1fr] py-3 md:grid md:gap-5 md:py-5 md:first:pt-4">
      <div className="text-sm md:flex md:flex-col md:gap-1 md:pt-1">
        <span className="font-medium md:text-base">{t("day", { date })}</span>
        <span className="md:hidden">, </span>
        <span className="text-gray-450 max-md:first-letter:lowercase md:first-letter:uppercase dark:text-gray-400">
          {t("weekday", { date })}
        </span>
      </div>
      <div className="space-y-2 max-md:mt-2 md:space-y-3">
        {weather.map((forecast) => (
          <ForecastHourRow key={forecast.date} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};
