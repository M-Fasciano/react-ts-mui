import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Snackbar from "./Snackbar";

const text = "Your changes have been saved.";

export default {
  title: "components/atoms/Snackbar",
  component: Snackbar,
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = (args) => (
  <Snackbar {...args} />
);

export const DefaultBottomLeft = Template.bind({});
DefaultBottomLeft.args = {
  children: <span>{text}</span>,
  open: true,
};

export const DefaultBottomCenter = Template.bind({});
DefaultBottomCenter.args = {
  children: <span>{text}</span>,
  open: true,
  anchorOrigin: { vertical: "bottom", horizontal: "center" },
};

export const DefaultBottomRight = Template.bind({});
DefaultBottomRight.args = {
  children: <span>{text}</span>,
  open: true,
  anchorOrigin: { vertical: "bottom", horizontal: "right" },
};
