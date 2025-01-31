import type { Meta, StoryObj } from "@storybook/react";
import { ForecastHeader } from "./ForecastHeader";

const meta = {
  component: ForecastHeader,
} satisfies Meta<typeof ForecastHeader>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
