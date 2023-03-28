import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from "./Alert";

export default {
  title: "components/molecules/Alert",
  component: Alert,
  args: {
    message: "Type your supporting copy here",
  },
  argTypes: {
    children: { control: false },
    severity: {
      control: {
        type: "radio",
        options: ["info", "success", "error"],
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const DemoTitleText = "Title here";

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const Info = Template.bind({});
Info.args = { severity: "info" };

export const InfoWithTitle = Template.bind({});
InfoWithTitle.args = { severity: "info", title: DemoTitleText };

export const Success = Template.bind({});
Success.args = { severity: "success" };

export const SuccessWithTitle = Template.bind({});
SuccessWithTitle.args = { severity: "success", title: DemoTitleText };

export const Error = Template.bind({});
Error.args = { severity: "error" };

export const ErrorWithTitle = Template.bind({});
ErrorWithTitle.args = { severity: "error", title: DemoTitleText };
