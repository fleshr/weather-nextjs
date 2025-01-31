import type { Meta, StoryObj } from "@storybook/react";
import { ForecastDayRow } from "./ForecastDayRow";
import { forecastMock } from "@/4_shared/mocks";

const meta = {
  component: ForecastDayRow,
} satisfies Meta<typeof ForecastDayRow>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: { forecast: forecastMock[0] },
} satisfies Story;
