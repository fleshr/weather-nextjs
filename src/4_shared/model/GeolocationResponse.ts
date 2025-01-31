import z from "zod";

export const GeolocationResponseSchema = z.array(
  z.object({
    name: z.string(),
    local_names: z
      .object({
        ru: z.string().optional(),
        en: z.string().optional(),
      })
      .optional(),
    lat: z.number(),
    lon: z.number(),
    country: z.string(),
    state: z.string().optional(),
  }),
);

export type GeolocationResponse = z.infer<typeof GeolocationResponseSchema>;
