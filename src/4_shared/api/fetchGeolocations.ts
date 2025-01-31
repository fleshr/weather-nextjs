import { GeolocationResponse } from "@/4_shared/model";

export const fetchGeolocations = async (
  query: string,
): Promise<GeolocationResponse> => {
  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_HOST_URL}/api/geo?q=${query}`,
  );
  const data = await response.json();
  return data;
};
