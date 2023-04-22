import React from "react";
import styled from "styled-components";
import OrderCard from "../molecules/OrderCard";
import PrimaryButton from "../atoms/PrimaryButton";
import { Link } from "@mui/material";
import { StatusMap } from "../../utils/orderStatus";
import { ordersData } from "../../mocks/ordersData";
import Alert from "../molecules/Alert";

const StyledWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem;
`;

type OrderDataProps = {
  id: string;
  status: StatusMap;
  date: string;
  link: string;
  total: string;
  quantity: number;
  thumbnail: string;
  reOrder: boolean | null;
  children?: React.ReactNode;
};

const renderOrder = (props: OrderDataProps) => {
  const { status } = props;
  const children: any[] = [];

  if (status.label === "Created") {
    children.push(
      <Alert
        severity={"info"}
        message={
          <>
            To change your order, contact us via live chat or call us on{" "}
            <Link href="tel:02077685000">020 7768 5000</Link>
          </>
        }
      />
    );
  }

  return children;
};

const renderButtons = (props: OrderDataProps) => {
  const { reOrder } = props;
  const buttons: any[] = [];

  buttons.push(
    <PrimaryButton to="" variant="text">
      View Order
    </PrimaryButton>
  );

  if (reOrder) {
    buttons.push(<PrimaryButton to="">Reorder in 3 Clicks</PrimaryButton>);
  }

  return buttons;
};

function Orders() {
  return (
    <StyledWrapper>
      {ordersData.map((order) => {
        const { link, ...rest } = order;
        return (
          <OrderCard
            orderNumber={"Order no."}
            link={<Link href={link}>Edit</Link>}
            buttons={renderButtons(order)}
            {...rest}
          >
            {renderOrder(order)}
          </OrderCard>
        );
      })}
    </StyledWrapper>
  );
}

export default Orders;
