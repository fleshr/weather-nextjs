import type { Meta, StoryObj } from "@storybook/react";
import { HomePage } from "./HomePage";
import { withThemeProvider } from "@/4_shared/lib";
import { forecastMock, weatherMock } from "@/4_shared/mocks";

const meta = {
  component: HomePage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withThemeProvider],
} satisfies Meta<typeof HomePage>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    lat: 55.7504461,
    lon: 37.6174943,
    weather: weatherMock,
    forecast: forecastMock,
  },
} satisfies Story;
