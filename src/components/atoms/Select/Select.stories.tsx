import React from "react";
import { useArgs } from "@storybook/client-api";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";
import { MenuItem, SelectChangeEvent } from "@mui/material";

const generateOptions = (options: number) =>
  [...Array(options).keys()].map((i) => ({
    value: `Value ${i + 1}`,
    key: i + 1,
  }));

export default {
  title: "Components/Atoms/Select",
  argTypes: {
    name: {
      control: false,
    },
    options: {
      control: false,
    },
    multiple: {
      control: false,
    },
    displayEmpty: {
      control: false,
    },
  },
  component: Select,
} as ComponentMeta<typeof Select>;

type OptionType = {
  key: React.Key | null | undefined;
  value:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
};

const Template: ComponentStory<typeof Select> = (args) => {
  const { options } = args;
  const [, updateArgs] = useArgs();
  const handleOnChange = (
    _event: SelectChangeEvent<unknown>,
    _child: React.ReactNode
  ) => {
    updateArgs({ value: _event.target.value });
  };
  return (
    <Select onChange={handleOnChange} {...args}>
      {options?.map((option: OptionType) => (
        <MenuItem key={option.key} value={option.key || ""}>
          {option.value}
        </MenuItem>
      ))}
    </Select>
  );
};

export const Default = Template.bind({});
Default.args = {
  displayEmpty: true,
  options: generateOptions(100),
};

export const Filled = Template.bind({});
Filled.args = {
  defaultValue: 1,
  options: generateOptions(100),
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
  options: generateOptions(100),
};
