import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./src/4_shared/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  rewrites: async () => [
    {
      source: "/api/map/:z/:x/:y",
      destination: `https://tile.openweathermap.org/map/precipitation_cls/:z/:x/:y.png?appid=${process.env.OWM_API_KEY}`,
    },
    {
      source: "/api/geo",
      destination: `https://api.openweathermap.org/geo/1.0/direct?limit=5&appid=${process.env.OWM_API_KEY}`,
    },
  ],
};

export default withNextIntl(nextConfig);
