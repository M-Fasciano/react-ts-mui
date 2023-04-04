import React from "react";
import Box from "../../atoms/Box";
import PrimaryButton from "../../atoms/PrimaryButton";
import { Divider, Typography } from "@mui/material";
import {
  StyledAlert,
  StyledBadge,
  StyledBoxBody,
  StyledBoxHeader,
  StyledBoxHeaderBodyLeft,
  StyledBoxHeaderBodyRight,
  StyledBoxInner,
  StyledBoxRow,
  StyledImage,
  StyledImageWrapper,
  StyledStatus,
} from "./OrderCard.style";
import useBreakpoints from "../../../hooks/useBreakpoints";
import { StatusMap } from "../../../utils/orderStatus";

export interface OrderCardProps {
  orderNumber: string;
  id: string;
  status: StatusMap;
  date: string;
  link: React.ReactNode;
  total: string;
  quantity: number;
  thumbnail: string;
  buttons: React.ReactElement<typeof PrimaryButton>[];
  children?: React.ReactNode;
}

const OrderCard = (props: OrderCardProps) => {
  const {
    orderNumber,
    id,
    status,
    date,
    link,
    total,
    quantity,
    thumbnail,
    buttons,
    children,
  } = props;

  const { isDesktop } = useBreakpoints();

  const renderOrderCard = (
    <Box variant="light" withBorder>
      <StyledBoxInner>
        <StyledBoxHeader>
          <StyledBoxHeaderBodyLeft>
            <StyledImageWrapper>
              {quantity > 1 ? (
                <StyledBadge badgeContent={`+${quantity}`}>
                  <StyledImage src={thumbnail} alt={id} />
                </StyledBadge>
              ) : (
                <StyledImage src={thumbnail} alt={id} />
              )}
            </StyledImageWrapper>
            <Typography variant="h6">
              {orderNumber} {id}
            </Typography>
          </StyledBoxHeaderBodyLeft>
          {isDesktop ? (
            <StyledBoxHeaderBodyRight>
              {buttons.map((button) => {
                return button;
              })}
            </StyledBoxHeaderBodyRight>
          ) : null}
        </StyledBoxHeader>

        {isDesktop && children ? children : <Divider />}

        <StyledBoxBody>
          <StyledBoxRow>
            <Typography variant="body1">Date</Typography>
            <Typography variant="body1">{date}</Typography>
          </StyledBoxRow>
          <StyledBoxRow>
            <Typography variant="body1">Status</Typography>
            <StyledStatus variant="button" statusColor={status.color}>
              {status.label}
            </StyledStatus>
          </StyledBoxRow>
          <StyledBoxRow>
            <Typography variant="body1">Reminder</Typography>
            <Typography variant="body1">
              {date} {link}
            </Typography>
          </StyledBoxRow>
          <StyledBoxRow>
            <Typography variant="subtitle1">Total</Typography>
            <Typography variant="subtitle1">{total}</Typography>
          </StyledBoxRow>
        </StyledBoxBody>

        {!isDesktop && children ? <StyledAlert>{children}</StyledAlert> : null}

        {!isDesktop ? (
          <StyledBoxHeaderBodyRight>
            {buttons.map((button) => {
              return button;
            })}
          </StyledBoxHeaderBodyRight>
        ) : null}
      </StyledBoxInner>
    </Box>
  );

  return renderOrderCard;
};

export default OrderCard;
