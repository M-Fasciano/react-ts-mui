import React from "react";
import { StyledSecondaryButton } from "./SecondaryButton.style";
import { ButtonProps } from "../Button/Button";

function SecondaryButton(props: ButtonProps) {
  const { children, variant = "contained", color, ...rest } = props;
  return (
    <StyledSecondaryButton color="success" variant={variant} {...rest}>
      {children}
    </StyledSecondaryButton>
  );
}

export default SecondaryButton;
