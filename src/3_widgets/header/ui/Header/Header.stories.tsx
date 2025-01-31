import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";
import { http, HttpResponse } from "msw";
import { geolocationResponseMock } from "@/4_shared/mocks";

const meta = {
  component: Header,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Header>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get("http://localhost:6006/api/geo", () => {
          return HttpResponse.json(geolocationResponseMock);
        }),
      ],
    },
  },
} satisfies Story;
