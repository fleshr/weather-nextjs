import { GeolocationResponse } from "../model";

const singleItem: GeolocationResponse[0] = {
  name: "Moscow",
  country: "RU",
  local_names: {
    ru: "Москва",
    en: "Moscow",
  },
  lat: 55.7504461,
  lon: 37.6174943,
};

export const geolocationResponseMock: GeolocationResponse =
  Array(5).fill(singleItem);
