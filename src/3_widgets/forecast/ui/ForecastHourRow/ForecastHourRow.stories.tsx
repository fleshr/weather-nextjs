import type { Meta, StoryObj } from "@storybook/react";
import { ForecastHourRow } from "./ForecastHourRow";
import { forecastMock } from "@/4_shared/mocks";

const meta = {
  component: ForecastHourRow,
} satisfies Meta<typeof ForecastHourRow>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: { forecast: forecastMock[0].weather[0] },
} satisfies Story;
