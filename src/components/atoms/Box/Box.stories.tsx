import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "./Box";

export default {
  title: "Components/atoms/Box",
  component: Box,
  args: {
    variant: "light",
    children: "Box Content",
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Base = Template.bind({});
Base.args = {};

export const WithBorder = Template.bind({});
WithBorder.args = {
  variant: "dark",
  withBorder: true,
};
