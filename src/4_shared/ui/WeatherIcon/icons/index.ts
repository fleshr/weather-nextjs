import { type StaticImageData } from "next/image";
import { type WeatherIcons } from "@/4_shared/model";
import icon01d from "./01d.png";
import icon01n from "./01n.png";
import icon02d from "./02d.png";
import icon02n from "./02n.png";
import icon03d from "./03d.png";
import icon03n from "./03n.png";
import icon04d from "./04d.png";
import icon09d from "./09d.png";
import icon10d from "./10d.png";
import icon10n from "./10n.png";
import icon11d from "./11d.png";
import icon13d from "./13d.png";
import icon50d from "./50d.png";

export const icons: Record<WeatherIcons, StaticImageData> = {
  "01d": icon01d,
  "01n": icon01n,
  "02d": icon02d,
  "02n": icon02n,
  "03d": icon03d,
  "03n": icon03n,
  "04d": icon04d,
  "04n": icon04d,
  "09d": icon09d,
  "09n": icon09d,
  "10d": icon10d,
  "10n": icon10n,
  "11d": icon11d,
  "11n": icon11d,
  "13d": icon13d,
  "13n": icon13d,
  "50d": icon50d,
  "50n": icon50d,
};
