import { z } from "zod";
import { WeatherSchema } from "./Weather";

export const ForecastSchema = z.array(
  z.object({
    date: z.number(),
    weather: z.array(WeatherSchema.omit({ cityName: true })),
  }),
);

export type Forecast = z.infer<typeof ForecastSchema>;
