import { ComponentStory, ComponentMeta } from "@storybook/react";
import Textarea from "./Textarea";

export default {
  title: "components/atoms/TexArea",
  component: Textarea,
  args: {
    defaultValue: "Test value",
    className: "textarea",
    minRows: 7,
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => {
  return <Textarea {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { defaultValue: "" };

export const BasicFilled = Template.bind({});
BasicFilled.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Error = Template.bind({});
Error.args = {
  error: true,
  className: "textarea textarea--error",
};
