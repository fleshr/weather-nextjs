import { Weather } from "../model/Weather";
import { WeatherResponse } from "../model/WeatherResponse";
import { degreeToDirection } from "./degreeToDirection";

export const weatherDTO = (weather: WeatherResponse): Weather => ({
  cityName: weather.name,
  date: (weather.dt + weather.timezone) * 1000,
  icon: weather.weather[0].icon,
  description: weather.weather[0].description,
  temperature: weather.main.temp,
  feelsLike: weather.main.feels_like,
  windSpeed: weather.wind.speed,
  windDirection: degreeToDirection(weather.wind.deg),
  humidity: weather.main.humidity,
  pressure: weather.main.pressure * 0.75,
});
