import type { Meta, StoryObj } from "@storybook/react";
import { Forecast } from "./Forecast";
import { forecastMock } from "@/4_shared/mocks";

const meta = {
  component: Forecast,
} satisfies Meta<typeof Forecast>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: { forecast: forecastMock },
} satisfies Story;
