import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Link from "./Link";

export default {
  title: "components/atoms/Link",
  component: Link,
  args: {
    children: "Link",
  },
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => {
  return <Link {...args} />;
};

export const Basic = Template.bind({});
Basic.args = {
  href: "#",
};

export const Action = Template.bind({});
Action.args = {
  onClick: () => alert("Link Clicked"),
};
