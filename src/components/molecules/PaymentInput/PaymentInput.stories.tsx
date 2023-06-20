import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PaymentInput from "./PaymentInput";

const testCards = {
  visa: ["4111 1111 1111 1111"],
  mastercard: [
    "2222 4200 0000 1113",
    "2222 6300 0000 1125",
    "5555 5555 5555 4444",
  ],
  amex: ["3782 8224 6310 005"],
  discover: ["6011 0009 9803 4767"],
  maestro: [
    "5033 9619 8909 17",
    "5868 2416 0825 5333 38",
    "6759 4111 0000 0008",
    "6759 5600 4500 5727 054",
    "5641 8211 1116 6669",
  ],
};

export default {
  title: "components/molecules/Inputs/Payment Input",
  component: PaymentInput,
  args: {
    defaultValue: testCards.visa[0],
  },
  argTypes: {
    value: { control: false },
    id: { control: false },
    name: { control: false },
    defaultValue: { control: false },
  },
} as ComponentMeta<typeof PaymentInput>;

const Template: ComponentStory<typeof PaymentInput> = (args) => {
  return <PaymentInput {...args} />;
};

export const Basic = Template.bind({});
Basic.args = { defaultValue: null };

export const BasicFilled = Template.bind({});
BasicFilled.args = {};

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };

export const Error = Template.bind({});
Error.args = {
  error: true,
};

export const ErrorWithMessage = Template.bind({});
ErrorWithMessage.args = {
  error: true,
  helperText: "This is an ERROR message",
};

export const WithHelperMessage = Template.bind({});
WithHelperMessage.args = {
  helperText: "This is a helper message",
};

export const Visa = Template.bind({});
Visa.args = { defaultValue: testCards.visa[0] };

export const MasterCard = Template.bind({});
MasterCard.args = { defaultValue: testCards.mastercard[0] };

export const Maestro = Template.bind({});
Maestro.args = { defaultValue: testCards.maestro[0] };

export const Amex = Template.bind({});
Amex.args = { defaultValue: testCards.amex[0] };

export const Discover = Template.bind({});
Discover.args = { defaultValue: testCards.discover[0] };
