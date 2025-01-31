import type { Meta, StoryObj } from "@storybook/react";
import { WeatherSkeleton } from "./WeatherSkeleton";

const meta = {
  component: WeatherSkeleton,
} satisfies Meta<typeof WeatherSkeleton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
