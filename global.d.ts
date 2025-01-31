import en from "@/4_shared/i18n/messages/en.json";

declare global {
  type Messages = typeof en;
  export type IntlMessages = Messages;
}
