import { Forecast as ForecastType } from "@/4_shared/model";
import { FC } from "react";
import { ForecastHeader } from "../ForecastHeader/ForecastHeader";
import { ForecastDayRow } from "../ForecastDayRow/ForecastDayRow";
import { useTranslations } from "next-intl";

type ForecastProps = {
  forecast: ForecastType;
};

export const Forecast: FC<ForecastProps> = ({ forecast }) => {
  const t = useTranslations("widgets.forecast");

  return (
    <div className="relative">
      <h2 className="font-medium md:absolute md:top-1 md:text-lg">
        {t("title")}
      </h2>
      <ForecastHeader className="ml-32.5" />
      <div className="divide-y-1 divide-black/10 dark:divide-white/10">
        {forecast.map((forecast) => (
          <ForecastDayRow key={forecast.date} forecast={forecast} />
        ))}
      </div>
    </div>
  );
};
