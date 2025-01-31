import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta = {
  component: Container,
} satisfies Meta<typeof Container>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    children: "Container",
    className: "bg-gray-800 text-white",
  },
} satisfies Story;
