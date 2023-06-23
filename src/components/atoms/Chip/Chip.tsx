import React from "react";
import { StyledChip } from "./Chip.style";

export interface ChipProps {
  key: number;
  option: string;
  disabled?: boolean;
  onClick?: () => void;
  onDelete?: () => void;
  isActive?: boolean;
}

function Chip(props: ChipProps) {
  const { option, disabled, onClick, onDelete, isActive } = props;

  return (
    <StyledChip
      key={option}
      label={option}
      onClick={onClick ? onClick : undefined}
      onDelete={onDelete ? onDelete : undefined}
      className={isActive ? "selected" : undefined}
      disabled={disabled}
    />
  );
}

export default Chip;
