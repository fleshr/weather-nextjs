import type { Meta, StoryObj } from "@storybook/react";
import { SearchBar } from "./SearchBar";
import { fn } from "@storybook/test";
import { useArgs } from "@storybook/preview-api";

const meta = {
  component: SearchBar,
} satisfies Meta<typeof SearchBar>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    value: "",
    onChange: fn(),
    onLocationClick: fn(),
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs<Story["args"]>();

    const onChange = (value: string) => {
      args.onChange(value);
      updateArgs({ value });
    };

    return <SearchBar {...args} value={value} onChange={onChange} />;
  },
} satisfies Story;
