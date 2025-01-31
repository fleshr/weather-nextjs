import z from "zod";

export const GeolocationSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  name: z.string(),
  country: z.string(),
});

export type Geolocation = z.infer<typeof GeolocationSchema>;
