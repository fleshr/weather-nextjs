import { z } from "zod";
import { WeatherIconsSchema } from "./WeatherIcons";

export const WeatherSchema = z.object({
  cityName: z.string(),
  date: z.number(),
  icon: WeatherIconsSchema,
  description: z.string(),
  temperature: z.number(),
  feelsLike: z.number(),
  windSpeed: z.number(),
  windDirection: z.enum(["N", "NE", "E", "SE", "S", "SW", "W", "NW"]),
  humidity: z.number(),
  pressure: z.number(),
});

export type Weather = z.infer<typeof WeatherSchema>;
