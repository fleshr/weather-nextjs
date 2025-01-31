import { FC } from "react";
import { Weather as WeatherType } from "@/4_shared/model";
import { useTranslations } from "next-intl";
import { WeatherIcon } from "@/4_shared/ui";

type WeatherProps = {
  weather: WeatherType;
};

export const Weather: FC<WeatherProps> = ({
  weather: {
    cityName,
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
  const t = useTranslations("widgets.currentWeather");

  return (
    <div className="flex flex-col items-center gap-4 font-medium">
      <div className="flex flex-col items-center gap-1">
        <h2 className="md:text-lg">{cityName}</h2>
        <span className="text-sm">{t("date", { date })}</span>
      </div>
      <div className="flex items-center gap-4">
        <WeatherIcon icon={icon} size={60} className="md:size-21" />
        <span className="text-5xl md:text-7xl">
          {t("temperature", { temperature })}
        </span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="first-letter:uppercase md:text-lg">{description}</span>
        <span className="text-sm">{t("feelsLike", { feelsLike })}</span>
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
        <span>{t("wind", { windSpeed, windDirection })}</span>
        <span>{t("humidity", { humidity })}</span>
        <span>{t("pressure", { pressure })}</span>
      </div>
    </div>
  );
};
