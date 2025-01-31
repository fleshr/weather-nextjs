import { GeolocationResponse, Geolocation } from "../model";

export const geolocationDTO = (
  geolocations: GeolocationResponse,
  locale: "ru" | "en",
): Geolocation[] =>
  geolocations.map((geolocation) => ({
    name: geolocation.local_names?.[locale] || geolocation.name,
    country: geolocation.country,
    lat: geolocation.lat,
    lon: geolocation.lon,
  }));
