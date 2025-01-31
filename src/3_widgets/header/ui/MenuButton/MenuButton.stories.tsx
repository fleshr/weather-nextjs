import type { Meta, StoryObj } from "@storybook/react";
import { MenuButton } from "./MenuButton";
import { fn } from "@storybook/test";

const meta = {
  component: MenuButton,
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof MenuButton>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Closed = {
  args: {
    isOpen: false,
  },
} satisfies Story;

export const Opened = {
  args: {
    isOpen: true,
  },
} satisfies Story;
