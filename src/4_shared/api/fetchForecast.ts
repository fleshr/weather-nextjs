import { ForecastResponse } from "@/4_shared/model";

export const fetchForecast = async (
  lat: number,
  lon: number,
  locale: string,
): Promise<ForecastResponse> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${process.env.OWM_API_KEY}&lat=${lat}&lon=${lon}&lang=${locale}`,
  );
  const data = await res.json();
  return data;
};
