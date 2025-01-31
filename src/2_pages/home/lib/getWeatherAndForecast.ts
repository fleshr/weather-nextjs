import { fetchForecast, fetchWeather } from "@/4_shared/api";
import { weatherDTO, forecastDTO } from "@/4_shared/lib";

export const getWeatherAndForecast = async (
  lat: number,
  lon: number,
  locale: string,
) => {
  const [weather, forecast] = await Promise.all([
    fetchWeather(lat, lon, locale),
    fetchForecast(lat, lon, locale),
  ]);

  return {
    weather: weatherDTO(weather),
    forecast: forecastDTO(forecast),
  };
};
