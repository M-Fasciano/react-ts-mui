import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgNoSim = (props: SvgIconProps) => {
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
        d="M3.09 4.44a.996.996 0 0 0 0 1.41l2.03 2.03-.12.13V19c0 1.1.9 2 2 2h10c.35 0 .68-.1.97-.26l1.17 1.17a.996.996 0 1 0 1.41-1.41L4.5 4.44a.996.996 0 0 0-1.41 0ZM19 16.11V5c0-1.1-.9-2-2-2h-6.99L7.95 5.06 19 16.11Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgNoSim;
