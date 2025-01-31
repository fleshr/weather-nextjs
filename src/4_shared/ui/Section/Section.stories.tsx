import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "./Section";

const meta = {
  component: Section,
} satisfies Meta<typeof Section>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    className: "px-10 py-5",
    children: "Section",
  },
} satisfies Story;
