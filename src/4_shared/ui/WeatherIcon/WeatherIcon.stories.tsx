import type { Meta, StoryObj } from "@storybook/react";
import { WeatherIcon } from "./WeatherIcon";
import { icons } from "./icons";

const meta = {
  component: WeatherIcon,
} satisfies Meta<typeof WeatherIcon>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      {Object.keys(icons).map((icon) => (
        <div className="flex flex-col items-center gap-2" key={icon}>
          <WeatherIcon size={48} icon={icon as keyof typeof icons} />
          <span className="text-sm font-medium">{icon}</span>
        </div>
      ))}
    </div>
  ),
} satisfies Story;
