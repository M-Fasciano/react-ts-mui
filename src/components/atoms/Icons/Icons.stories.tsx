import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import styled from "styled-components";
import * as ActionIcons from "./action/index";
import * as AlertIcons from "./alert/index";
import * as AvIcons from "./av/index";
import * as CommunicationIcons from "./communication/index";
import * as ContentIcons from "./content/index";
import * as DeviceIcons from "./device/index";
import * as EditorIcons from "./editor/index";
import * as FileIcons from "./file/index";
import * as HardwareIcons from "./hardware/index";
import * as ImageIcons from "./image/index";
import * as MapsIcons from "./maps/index";
import * as NavigationIcons from "./navigation/index";
import * as NotificationIcons from "./notification/index";
import * as PlacesIcons from "./places/index";
import * as SocialIcons from "./social/index";
import * as ToggleIcons from "./toggle/index";
import IconWrapper from "./Icons";
import { Typography } from "@mui/material";

const StyledIcon = styled("div")`
  align-items: center;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 0;
  width: 100%;
`;

const StyledWrapper = styled("div")`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(6, 1fr);
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
const alertIconsData = Object.values(AlertIcons);
const avIconsData = Object.values(AvIcons);
const communicationIconsData = Object.values(CommunicationIcons);
const contentIconsData = Object.values(ContentIcons);
const deviceIconsData = Object.values(DeviceIcons);
const editorIconsData = Object.values(EditorIcons);
const fileIconsData = Object.values(FileIcons);
const hardwareIconsData = Object.values(HardwareIcons);
const imageIconsData = Object.values(ImageIcons);
const mapsIconsData = Object.values(MapsIcons);
const navigationIconsData = Object.values(NavigationIcons);
const notificationIconsData = Object.values(NotificationIcons);
const placesIconsData = Object.values(PlacesIcons);
const socialIconsData = Object.values(SocialIcons);
const toggleIconsData = Object.values(ToggleIcons);

console.log({ actionIconsData });

const renderIconList: Function = (data: any[]): JSX.Element[] => {
  return data.map((Icon) => (
    <StyledIcon>
      <Typography variant="caption">{Icon.name.replace("Svg", "")}</Typography>
      <Icon sx={{ fontSize: 24 }} />
    </StyledIcon>
  ));
};

const TemplateAction: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(actionIconsData);

const TemplateAlert: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(alertIconsData);

const TemplateAv: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(avIconsData);

const TemplateCommunication: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(communicationIconsData);

const TemplateContent: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(contentIconsData);

const TemplateDevice: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(deviceIconsData);

const TemplateEditor: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(editorIconsData);

const TemplateFile: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(fileIconsData);

const TemplateHardware: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(hardwareIconsData);

const TemplateImage: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(imageIconsData);

const TemplateMaps: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(mapsIconsData);

const TemplateNavigation: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(navigationIconsData);

const TemplateNotification: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(notificationIconsData);

const TemplatePlaces: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(placesIconsData);

const TemplateSocial: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(socialIconsData);

const TemplateToggle: ComponentStory<typeof IconWrapper> = () =>
  renderIconList(toggleIconsData);

export const Action = TemplateAction.bind({});
export const Alert = TemplateAlert.bind({});
export const Av = TemplateAv.bind({});
export const Communication = TemplateCommunication.bind({});
export const Content = TemplateContent.bind({});
export const Device = TemplateDevice.bind({});
export const Editor = TemplateEditor.bind({});
export const File = TemplateFile.bind({});
export const Hardware = TemplateHardware.bind({});
export const Image = TemplateImage.bind({});
export const Maps = TemplateMaps.bind({});
export const Navigation = TemplateNavigation.bind({});
export const Notification = TemplateNotification.bind({});
export const Places = TemplatePlaces.bind({});
export const Social = TemplateSocial.bind({});
export const Toggle = TemplateToggle.bind({});
