import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PrimaryButton from "./PrimaryButton";
import { IconFace } from "../Icons/action";

export default {
  title: "components/atoms/Buttons/Primary Button",
  component: PrimaryButton,
  args: {
    children: "Primary Button",
  },
  argTypes: {
    variant: {
      control: { type: "select", options: ["contained", "outlined", "text"] },
    },
    size: {
      control: { type: "radio", options: ["small", "medium"] },
    },
    disabled: {
      control: { type: "boolean" },
    },
    children: { control: "text" },
    icon: {
      table: {
        disable: true,
      },
    },
    onClick: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof PrimaryButton>;

const DemoIcon = () => <IconFace />;

const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <PrimaryButton {...args} />
);

//  Button Variants
export const Basic = Template.bind({});
Basic.args = {};

export const BasicDisabled = Template.bind({});
BasicDisabled.args = { disabled: true };

export const BasicWithIcon = Template.bind({});
BasicWithIcon.args = { icon: <DemoIcon /> };

export const BasicWithIconDisabled = Template.bind({});
BasicWithIconDisabled.args = { disabled: true, icon: <DemoIcon /> };

export const Outlined = Template.bind({});
Outlined.args = { variant: "outlined" };

export const OutlinedDisabled = Template.bind({});
OutlinedDisabled.args = { variant: "outlined", disabled: true };

export const OutlinedWithIcon = Template.bind({});
OutlinedWithIcon.args = { variant: "outlined", icon: <DemoIcon /> };

export const OutlinedWithIconDisabled = Template.bind({});
OutlinedWithIconDisabled.args = {
  variant: "outlined",
  disabled: true,
  icon: <DemoIcon />,
};

export const Text = Template.bind({});
Text.args = { variant: "text" };

export const TextDisabled = Template.bind({});
TextDisabled.args = { variant: "text", disabled: true };

export const TextWithIcon = Template.bind({});
TextWithIcon.args = { variant: "text", icon: <DemoIcon /> };

export const TextWithIconDisabled = Template.bind({});
TextWithIconDisabled.args = {
  variant: "text",
  disabled: true,
  icon: <DemoIcon />,
};

// Button Sizes
export const Small = Template.bind({});
Small.args = { size: "small" };

export const SmallDisabled = Template.bind({});
SmallDisabled.args = { size: "small", disabled: true };

export const SmallWithIcon = Template.bind({});
SmallWithIcon.args = { size: "small", icon: <DemoIcon /> };

export const SmallWithIconDisabled = Template.bind({});
SmallWithIconDisabled.args = {
  size: "small",
  disabled: true,
  icon: <DemoIcon />,
};

export const Medium = Template.bind({});
Medium.args = { size: "medium" };

export const MediumDisabled = Template.bind({});
MediumDisabled.args = { size: "medium", disabled: true };

export const MediumWithIcon = Template.bind({});
MediumWithIcon.args = { size: "medium", icon: <DemoIcon /> };

export const MediumWithIconDisabled = Template.bind({});
MediumWithIconDisabled.args = {
  size: "medium",
  disabled: true,
  icon: <DemoIcon />,
};
