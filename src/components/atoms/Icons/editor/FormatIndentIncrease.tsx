import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgFormatIndentIncrease = (props: SvgIconProps) => {
  const { ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        d="M4 21h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1ZM3 9.21v5.59c0 .45.54.67.85.35l2.79-2.79c.2-.2.2-.51 0-.71l-2.79-2.8a.5.5 0 0 0-.85.36ZM12 17h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1ZM3 4c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1Zm9 5h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1Zm0 4h8c.55 0 1-.45 1-1s-.45-1-1-1h-8c-.55 0-1 .45-1 1s.45 1 1 1Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgFormatIndentIncrease;
