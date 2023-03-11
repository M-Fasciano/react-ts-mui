import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";

export default {
  title: "Components/Atoms/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  displayEmpty: true,
  options: [
    {
      key: 1,
      value: "Value 1",
    },
    {
      key: 2,
      value: "Value 2",
    },
    {
      key: 3,
      value: "Value 3",
    },
    {
      key: 4,
      value: "Value 4",
    },
  ],
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  defaultValue: 1,
  options: [
    {
      key: 1,
      value: "Error",
    },
  ],
};

export const Open = Template.bind({});
Open.args = {
  open: true,
  defaultValue: 1,
  options: [
    {
      key: 1,
      value: "Value 1",
    },
    {
      key: 2,
      value: "Value 2",
    },
    {
      key: 3,
      value: "Value 3",
    },
    {
      key: 4,
      value: "Value 4",
    },
  ],
};
