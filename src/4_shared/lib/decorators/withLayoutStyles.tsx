import { roboto } from "@/4_shared/ui";
import { Decorator } from "@storybook/react";

export const withLayoutStyles: Decorator = (Story) => (
  <div
    className={`${roboto.variable} bg-gray-50 font-sans text-base text-black antialiased dark:bg-blue-900 dark:text-white`}
  >
    <Story />
  </div>
);
