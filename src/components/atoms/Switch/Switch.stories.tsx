import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Switch from "./Switch";

export default {
  title: "components/atoms/Switch",
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = { checked: true };

export const UnChecked = Template.bind({});
UnChecked.args = { checked: false };

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = { disabled: true, checked: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
