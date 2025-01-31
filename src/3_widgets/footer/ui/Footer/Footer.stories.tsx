import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";
import { withThemeProvider } from "@/4_shared/lib";

const meta = {
  component: Footer,
  decorators: [withThemeProvider],
} satisfies Meta<typeof Footer>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
