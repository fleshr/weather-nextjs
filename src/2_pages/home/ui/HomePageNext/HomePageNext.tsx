import { FC } from "react";
import { getLocationFromSearchParams } from "../../lib/getLocationFromSearchParams";
import { HomePage } from "../HomePage/HomePage";
import { getWeatherAndForecast } from "../../lib/getWeatherAndForecast";

type HomePageNextProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ lat?: string | string[]; lon?: string | string[] }>;
};

export const HomePageNext: FC<HomePageNextProps> = async ({
  params,
  searchParams,
}) => {
  const { locale } = await params;
  const { lat, lon } = await getLocationFromSearchParams(searchParams);
  const { weather, forecast } = await getWeatherAndForecast(lat, lon, locale);

  return <HomePage lat={lat} lon={lon} weather={weather} forecast={forecast} />;
};
