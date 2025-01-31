import { WeatherIcons } from "@/4_shared/model";
import Image from "next/image";
import { FC } from "react";
import { icons } from "./icons";

type WeatherIconProps = {
  className?: string;
  size?: number;
  icon?: WeatherIcons;
};

export const WeatherIcon: FC<WeatherIconProps> = ({
  className,
  size = 16,
  icon = "01d",
}) => {
  return (
    <Image
      className={className}
      src={icons[icon]}
      width={size}
      height={size}
      alt=""
    />
  );
};
