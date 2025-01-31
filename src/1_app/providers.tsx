import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import { FC, ReactNode } from "react";

type RootProvidersProps = {
  messages: AbstractIntlMessages;
  children: ReactNode;
};

export const RootProviders: FC<RootProvidersProps> = ({
  children,
  messages,
}) => {
  return (
    <ThemeProvider>
      <NextIntlClientProvider messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
};
