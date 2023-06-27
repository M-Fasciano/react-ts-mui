import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DynamicColumns from "./DynamicColumns";

const childGenerator = (num: number) =>
  Array.from({ length: num }, (_, i) => <div key={i}>Child {i + 1}</div>);

export default {
  title: "Components/layouts/Dynamic Columns",
  component: DynamicColumns,
  args: {},
  argTypes: {
    columnWidths: {
      control: false,
    },
    children: { control: false },
  },
} as ComponentMeta<typeof DynamicColumns>;

const Template: ComponentStory<typeof DynamicColumns> = (args) => (
  <DynamicColumns {...args} />
);

export const TwoEqual = Template.bind({});
TwoEqual.args = {
  columnWidths: [50, 50],
  children: childGenerator(2),
};

export const ThreeEqual = Template.bind({});
ThreeEqual.args = {
  columnWidths: [30, 30, 30],
  children: childGenerator(3),
};

export const LeftSidebar = Template.bind({});
LeftSidebar.args = {
  columnWidths: [20, 80],
  children: childGenerator(2),
};

export const RightSidebar = Template.bind({});
RightSidebar.args = {
  columnWidths: [80, 20],
  children: childGenerator(2),
};
