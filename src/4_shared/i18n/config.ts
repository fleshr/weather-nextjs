import { RequestConfig } from "next-intl/server";

export const locales = ["ru", "en"] as const;

export const defaultLocale = "ru";

export const config: RequestConfig = {
  timeZone: "UTC",
  formats: {
    dateTime: {
      time: {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      },
      day: {
        day: "numeric",
        month: "long",
      },
      weekday: {
        weekday: "long",
      },
    },
    number: {
      wind: {
        maximumFractionDigits: 1,
        trailingZeroDisplay: "auto",
        roundingMode: "floor",
      },
      temp: {
        maximumFractionDigits: 0,
        signDisplay: "exceptZero",
        roundingMode: "floor",
      },
      units: {
        maximumFractionDigits: 0,
        roundingMode: "floor",
      },
    },
  },
};
