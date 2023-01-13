import { ComponentMeta, ComponentStory } from "@storybook/react";
import * as SocialIcons from "./social/index";
import IconWrapper from "./Icons";

export default {
  title: "Components/Atoms/Icons",
  component: IconWrapper,
} as ComponentMeta<typeof IconWrapper>;

const socialIconsData = Object.values(SocialIcons);

const SocialIconsList: Function = (_: any[]): JSX.Element[] => {
  return socialIconsData.map((Icon) => <Icon height={24} width={24} />);
};

const TemplateSocial: ComponentStory<typeof IconWrapper> = () => (
  <SocialIconsList />
);

export const Social = TemplateSocial.bind({});
