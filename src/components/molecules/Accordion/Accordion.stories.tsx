import { ComponentStory, ComponentMeta } from "@storybook/react";
import Accordion from "./Accordion";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = () => <Accordion />;

export const Default = Template.bind({});
