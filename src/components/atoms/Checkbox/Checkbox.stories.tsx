import { ComponentStory, ComponentMeta } from "@storybook/react";
import Checkbox from "./Checkbox";

export default {
  title: "components/atoms/Checkbox",
  component: Checkbox,
  args: {},
} as ComponentMeta<typeof Checkbox>;
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = { checked: true };

export const Unchecked = Template.bind({});
Unchecked.args = { checked: false };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const CheckedDisabled = Template.bind({});
CheckedDisabled.args = { checked: true, disabled: true };

export const Error = Template.bind({});
Error.args = { error: true };
