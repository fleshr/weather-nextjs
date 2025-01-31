import { Forecast } from "../model/Forecast";
import { ForecastResponse } from "../model/ForecastResponse";
import { degreeToDirection } from "./degreeToDirection";

const weatherDTO = (
  weather: ForecastResponse["list"][0],
  timezone: number,
): Forecast[0]["weather"][0] => ({
  date: (weather.dt + timezone) * 1000,
  icon: weather.weather[0].icon,
  description: weather.weather[0].description,
  temperature: weather.main.temp,
  feelsLike: weather.main.feels_like,
  windSpeed: weather.wind.speed,
  windDirection: degreeToDirection(weather.wind.deg),
  humidity: weather.main.humidity,
  pressure: weather.main.pressure * 0.75,
});

export const forecastDTO = (forecast: ForecastResponse): Forecast => {
  return forecast.list.reduce<Forecast>((acc, item) => {
    const date = new Date(
      (item.dt + forecast.city.timezone) * 1000,
    ).setUTCHours(0, 0, 0, 0);
    const weather = weatherDTO(item, forecast.city.timezone);

    if (acc.at(-1)?.date !== date) {
      acc.push({
        date: date,
        weather: [weather],
      });
    } else {
      acc.at(-1)?.weather.push(weather);
    }

    return acc;
  }, []);
};
