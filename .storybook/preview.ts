import "@/1_app/styles";
import { withLayoutStyles, withTheme } from "@/4_shared/lib";
import type { Preview } from "@storybook/react";
import { nextIntl } from "./next-intl";
import { viewports } from "./viewports";
import { initialize, mswLoader } from "msw-storybook-addon";

initialize();

const preview: Preview = {
  initialGlobals: {
    locale: "ru",
    locales: {
      ru: "Русский",
      en: "English",
    },
  },
  parameters: {
    nextIntl,
    viewport: { viewports },
    nextjs: { appDirectory: true },
  },
  loaders: [mswLoader],
  decorators: [withTheme, withLayoutStyles],
};

export default preview;
