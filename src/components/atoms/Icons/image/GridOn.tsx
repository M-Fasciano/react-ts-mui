import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgGridOn = (props: SvgIconProps) => {
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
        d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM8 20H5c-.55 0-1-.45-1-1v-3h4v4Zm0-6H4v-4h4v4Zm0-6H4V5c0-.55.45-1 1-1h3v4Zm6 12h-4v-4h4v4Zm0-6h-4v-4h4v4Zm0-6h-4V4h4v4Zm5 12h-3v-4h4v3c0 .55-.45 1-1 1Zm1-6h-4v-4h4v4Zm0-6h-4V4h3c.55 0 1 .45 1 1v3Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgGridOn;
