import React from "react";
import { StyledBox } from "./Box.style";

export type BoxThemeProps = "light" | "dark";

type BoxProps = {
  withBorder?: boolean;
  variant?: BoxThemeProps;
  children: React.ReactNode;
};

function Box(props: BoxProps) {
  const { withBorder = false, variant = "light", children } = props;
  return (
    <StyledBox withBorder={withBorder} variant={variant}>
      {children}
    </StyledBox>
  );
}

export default Box;
