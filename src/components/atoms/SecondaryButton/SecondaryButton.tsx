import React from "react";
import { StyledSecondaryButton } from "./SecondaryButton.style";
import { ButtonProps } from "../Button/Button";

export interface SecondaryButtonProps extends ButtonProps {}

function SecondaryButton(props: SecondaryButtonProps) {
  const { children, variant = "contained", color, ...rest } = props;
  return (
    <StyledSecondaryButton color="success" variant={variant} {...rest}>
      {children}
    </StyledSecondaryButton>
  );
}

export default SecondaryButton;
