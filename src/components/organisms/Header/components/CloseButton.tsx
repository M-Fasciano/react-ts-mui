import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { StyledClodeButton } from "../Header.styles";

interface CloseButtonProps {
  handleMenuClick: () => void;
}

function CloseButton({ handleMenuClick }: CloseButtonProps) {
  return (
    <StyledClodeButton
      color="inherit"
      aria-label="close drawer"
      onClick={handleMenuClick}
      edge="start"
    >
      <CloseIcon />
    </StyledClodeButton>
  );
}

export default CloseButton;
