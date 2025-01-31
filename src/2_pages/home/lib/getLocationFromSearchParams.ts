const DEFAULT_LAT = 55.7504461;
const DEFAULT_LON = 37.6174943;

export const getLocationFromSearchParams = async (
  searchParams: Promise<{ lat?: string | string[]; lon?: string | string[] }>,
) => {
  const params = await searchParams;

  const lat = Number(
    Array.isArray(params.lat) ? params.lat[0] : (params.lat ?? DEFAULT_LAT),
  );
  const lon = Number(
    Array.isArray(params.lon) ? params.lon[0] : (params.lon ?? DEFAULT_LON),
  );

  return { lat, lon };
};
