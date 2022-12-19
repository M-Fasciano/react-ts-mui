import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import WistiaReactPlayer from "./WistiaReactPlayer";

export default {
  title: "Components/Atoms/Video",
  component: WistiaReactPlayer,
} as ComponentMeta<typeof WistiaReactPlayer>;

const Template: ComponentStory<typeof WistiaReactPlayer> = (args) => {
  return <WistiaReactPlayer {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  videoId: "bq6epni33s",
};
