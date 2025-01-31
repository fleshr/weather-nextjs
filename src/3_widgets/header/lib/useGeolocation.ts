import { fetchGeolocations } from "@/4_shared/api";
import { geolocationDTO } from "@/4_shared/lib";
import useSWR from "swr";

export const useGeolocation = (query: string, locale: "ru" | "en") => {
  const { data, error, isLoading } = useSWR(query || null, fetchGeolocations);

  return {
    data: data ? geolocationDTO(data, locale) : undefined,
    error,
    isLoading,
  };
};
