import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading from "./Heading";

export default {
  title: "components/atoms/Heading",
  component: Heading,
  args: {
    children: "Heading",
    level: 1,
  },
  argTypes: {
    level: { control: { type: "radio", options: [1, 2, 3, 4, 5, 6] } },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const H1 = Template.bind({});
H1.args = { level: 1 };

export const H2 = Template.bind({});
H2.args = { level: 2 };

export const H3 = Template.bind({});
H3.args = { level: 3 };

export const H4 = Template.bind({});
H4.args = { level: 4 };

export const H5 = Template.bind({});
H5.args = { level: 5 };

export const H6 = Template.bind({});
H6.args = { level: 6 };
