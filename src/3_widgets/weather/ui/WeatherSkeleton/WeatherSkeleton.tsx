import { FC } from "react";

export const WeatherSkeleton: FC = () => {
  return (
    <div className="flex animate-pulse flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-1">
        <div className="h-4.75 w-20 rounded-md bg-gray-500" />
        <div className="h-4 w-27 rounded-md bg-gray-500" />
      </div>
      <div className="flex items-center gap-4">
        <div className="size-15 rounded-full bg-gray-500 md:size-21" />
        <div className="h-12.5 w-15 rounded-md bg-gray-500" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <div className="h-4.75 w-30 rounded-md bg-gray-500" />
        <div className="h-4 w-32.5 rounded-md bg-gray-500" />
      </div>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
        <div className="h-4 w-27.5 rounded-md bg-gray-500" />
        <div className="h-4 w-27.5 rounded-md bg-gray-500" />
        <div className="h-4 w-40 rounded-md bg-gray-500" />
      </div>
    </div>
  );
};
