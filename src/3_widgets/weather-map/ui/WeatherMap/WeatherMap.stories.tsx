import type { Meta, StoryObj } from "@storybook/react";
import { WeatherMap } from "./WeatherMap";

const meta = {
  component: WeatherMap,
} satisfies Meta<typeof WeatherMap>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    center: [37.6174943, 55.7504461],
  },
  decorators: [
    (Story) => (
      <div style={{ height: 480 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Story;
