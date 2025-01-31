"use client";

import { Map, View } from "ol";
import { Attribution } from "ol/control";
import { Tile } from "ol/layer";
import { transform } from "ol/proj";
import { OSM, XYZ } from "ol/source";
import { FC, useEffect } from "react";

type WeatherMapProps = {
  center: [number, number];
};

export const WeatherMap: FC<WeatherMapProps> = ({ center }) => {
  useEffect(() => {
    const map = new Map({
      target: "map",
      controls: [
        new Attribution({
          className:
            "bg-white/80 opacity-90 py-1 top-1 left-1 absolute text-xs [&>button]:hidden md:top-2 md:left-2 rounded-lg px-2 dark:bg-blue-800 dark:text-white ring-1 ring-black/10 dark:ring-white/10",
        }),
      ],
      interactions: [],
      view: new View({
        center: transform(center, "EPSG:4326", "EPSG:3857"),
        zoom: 8,
      }),
      layers: [
        new Tile({
          source: new OSM({
            attributions: "Map data &copy; OpenStreetMap",
          }),
          className:
            "dark:invert dark:contrast-90 dark:hue-rotate-180 dark:brightness-95",
        }),
        new Tile({
          source: new XYZ({
            url: `https://${process.env.NEXT_PUBLIC_HOST_URL}/api/map/{z}/{x}/{y}`,
            attributions: "Weather data &copy; OpenWeatherMap",
          }),
          opacity: 0.6,
        }),
      ],
    });

    return () => {
      map.setTarget(undefined);
    };
  }, [center]);

  return <div id="map" className="h-full w-full" />;
};
