import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import OrderCard from "./OrderCard";
import PrimaryButton from "../../atoms/PrimaryButton";
import Alert from "../Alert";
import { Link } from "@mui/material";
import { statusMap } from "../../../utils/orderStatus";

export default {
  title: "Components/molecules/Order Card",
  args: {
    orderNumber: "Order no.",
    id: "123456789",
    thumbnail:
      "https://assets2.davidclulow.com/cdn-record-files/contactlenses/21f6c9af-5969-4ebc-ad5d-af070099e2ac/CVCVBFM03__shad__qt.png?impolicy=DCW_resize&wid=600",
    date: "12/03/2023",
    link: <Link href="#">Edit</Link>,
    total: "£100",
    buttons: [
      <PrimaryButton key="1" variant="text">
        View Order
      </PrimaryButton>,
    ],
    order: 1,
  },
  component: OrderCard,
} as ComponentMeta<typeof OrderCard>;

const Template: ComponentStory<typeof OrderCard> = (args) => (
  <OrderCard {...args} />
);

export const Created = Template.bind({});
Created.args = {
  status: statusMap("M") || statusMap("H"),
  buttons: [
    <PrimaryButton key="1" variant="text">
      View Order
    </PrimaryButton>,
    <PrimaryButton key="2" name="reOrder">
      Reorder in 3 Clicks
    </PrimaryButton>,
  ],
};

export const PendingPayment = Template.bind({});
PendingPayment.args = {
  status: statusMap("A"),
};

export const InProcess = Template.bind({});
InProcess.args = {
  status: statusMap("L"),
};

export const Shipped = Template.bind({});
Shipped.args = {
  status: statusMap("D"),
};

export const Confirmed = Template.bind({});
Confirmed.args = {
  status: statusMap("R"),
  quantity: 2,
};

export const Cancelled = Template.bind({});
Cancelled.args = {
  status: statusMap("X"),
};

export const Delivered = Template.bind({});
Delivered.args = {
  status: statusMap("1"),
  children: (
    <Alert
      severity={"info"}
      message={
        <>
          To change your order, contact us via live chat or call us on{" "}
          <Link href="tel:02077685000">020 7768 5000</Link>
        </>
      }
    />
  ),
};

export const PendindPrescription = Template.bind({});
PendindPrescription.args = {
  status: statusMap("E"),
};
