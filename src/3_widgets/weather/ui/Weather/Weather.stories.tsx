import type { Meta, StoryObj } from "@storybook/react";
import { Weather } from "./Weather";
import { weatherMock } from "@/4_shared/mocks";

const meta = {
  component: Weather,
} satisfies Meta<typeof Weather>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: { weather: weatherMock },
} satisfies Story;
