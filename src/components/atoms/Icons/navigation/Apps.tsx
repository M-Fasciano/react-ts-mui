import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgApps = (props: SvgIconProps) => {
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
        d="M4 8h4V4H4v4Zm6 12h4v-4h-4v4Zm-6 0h4v-4H4v4Zm0-6h4v-4H4v4Zm6 0h4v-4h-4v4Zm6-10v4h4V4h-4Zm-6 4h4V4h-4v4Zm6 6h4v-4h-4v4Zm0 6h4v-4h-4v4Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgApps;
