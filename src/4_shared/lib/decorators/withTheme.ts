import { withThemeByDataAttribute } from "@storybook/addon-themes";

export const withTheme = withThemeByDataAttribute({
  themes: { light: "light", dark: "dark" },
  defaultTheme: "light",
  attributeName: "data-theme",
});
