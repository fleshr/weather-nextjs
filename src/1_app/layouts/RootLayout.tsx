import "../styles";
import { FC, ReactNode } from "react";
import { roboto } from "@/4_shared/ui";
import { getMessages, getTranslations } from "next-intl/server";
import { RootProviders } from "../providers";
import { cn } from "@/4_shared/lib";

type RootLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const generateMetadata = async ({ params }: RootLayoutProps) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.home" });

  return { title: t("title") };
};

export const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "bg-gray-50 font-sans text-base text-black antialiased dark:bg-blue-900 dark:text-white",
          roboto.variable,
        )}
      >
        <RootProviders messages={messages}>{children}</RootProviders>
      </body>
    </html>
  );
};
