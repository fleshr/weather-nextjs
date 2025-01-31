import type { Meta, StoryObj } from "@storybook/react";
import { SearchLink } from "./SearchLink";

const meta = {
  component: SearchLink,
} satisfies Meta<typeof SearchLink>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    href: "/",
    title: "Link",
  },
} satisfies Story;
