import type { Meta, StoryObj } from "@storybook/react";
import { SearchResults } from "./SearchResults";

const items = Array(5).fill({
  name: "Moscow",
  country: "RU",
  lat: 1,
  lon: 1,
});

const meta = {
  component: SearchResults,
} satisfies Meta<typeof SearchResults>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Loading = {
  args: {
    isLoading: true,
  },
} satisfies Story;

export const Empty = {
  args: {
    items: [],
    isLoading: false,
  },
} satisfies Story;

export const Default = {
  args: {
    items,
    isLoading: false,
  },
} satisfies Story;
