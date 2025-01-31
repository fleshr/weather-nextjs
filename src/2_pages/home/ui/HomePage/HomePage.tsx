import { Container, Section } from "@/4_shared/ui";
import { Weather } from "@/3_widgets/weather";
import { Footer } from "@/3_widgets/footer";
import { Forecast } from "@/3_widgets/forecast";
import { Header } from "@/3_widgets/header";
import { WeatherMap } from "@/3_widgets/weather-map";
import { FC } from "react";
import {
  Weather as WeatherType,
  Forecast as ForecastType,
} from "@/4_shared/model";
import Link from "next/link";

type HomePageProps = {
  lat: number;
  lon: number;
  weather: WeatherType;
  forecast: ForecastType;
};

export const HomePage: FC<HomePageProps> = ({
  lat,
  lon,
  weather,
  forecast,
}) => {
  return (
    <>
      <Header />
      <Container>
        <div className="md:my-3 md:grid md:grid-cols-2 md:gap-3">
          <Link
            target="_blank"
            href={`https://www.windy.com/-Rain-thunder-rain?rain,${lat},${lon},9`}
            className="block max-md:h-41.5 md:relative md:order-2 md:overflow-hidden md:rounded-2xl md:after:absolute md:after:inset-0 md:after:rounded-2xl md:after:inset-ring-1 md:after:inset-ring-black/10 md:dark:after:inset-ring-white/10"
          >
            <WeatherMap center={[lon, lat]} />
          </Link>
          <Section className="relative px-8 py-4 max-md:-mt-4 md:order-1 md:py-5">
            <Weather weather={weather} />
          </Section>
        </div>
        <Section position="bottom" className="px-4 pt-6 pb-1 md:px-7.5 md:pt-5">
          <Forecast forecast={forecast} />
        </Section>
        <Footer className="py-4 md:px-7.5 md:py-6" />
      </Container>
    </>
  );
};
