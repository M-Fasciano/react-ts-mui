import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FormLabel from "./FormLabel";

export default {
  title: "components/atoms/Form Label",
  component: FormLabel,
} as ComponentMeta<typeof FormLabel>;

const Template: ComponentStory<typeof FormLabel> = (args) => (
  <FormLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Label",
};

export const Error = Template.bind({});
Error.args = {
  children: "Label",
  error: true,
};

export const Required = Template.bind({});
Required.args = {
  children: "Label",
  required: true,
};
