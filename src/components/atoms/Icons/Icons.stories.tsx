import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import * as ActionIcons from "./action/index";
import * as SocialIcons from "./social/index";
import IconWrapper from "./Icons";

const StyledWrapper = styled("div")`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  padding: 3rem;
`;

export default {
  title: "Components/Atoms/Icons",
  component: IconWrapper,
  decorators: [
    (Story) => (
      <StyledWrapper>
        <Story />
      </StyledWrapper>
    ),
  ],
} as ComponentMeta<typeof IconWrapper>;

const actionIconsData = Object.values(ActionIcons);
const socialIconsData = Object.values(SocialIcons);

const renderIconList: Function = (data: any[]): JSX.Element[] => {
  return data.map((Icon) => <Icon height={24} width={24} />);
};

const TemplateSocial: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(socialIconsData);

const TemplateAction: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(actionIconsData);

export const Action = TemplateAction.bind({});
export const Social = TemplateSocial.bind({});
