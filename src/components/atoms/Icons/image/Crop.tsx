import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgCrop = (props: SvgIconProps) => {
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
        d="M17 15h2V7c0-1.1-.9-2-2-2H9v2h7c.55 0 1 .45 1 1v7Zm-9 2c-.55 0-1-.45-1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v3H2c-.55 0-1 .45-1 1s.45 1 1 1h3v10c0 1.1.9 2 2 2h10v3c0 .55.45 1 1 1s1-.45 1-1v-3h3c.55 0 1-.45 1-1s-.45-1-1-1H8Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgCrop;
