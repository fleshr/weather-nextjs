import { Decorator } from "@storybook/react";
import { ThemeProvider } from "next-themes";

export const withThemeProvider: Decorator = (Story) => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);
