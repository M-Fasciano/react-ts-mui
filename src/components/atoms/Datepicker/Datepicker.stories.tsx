import { ComponentStory, ComponentMeta } from "@storybook/react";
import DatePicker from "./Datepicker";

export default {
  title: "components/atoms/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  disablePast: true,
  inputFormat: "DD / MM / YYYY",
};
