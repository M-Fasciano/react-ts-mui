import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgAirlineSeatLegroomNormal = (props: SvgIconProps) => {
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
        d="M5 12V4c0-.55-.45-1-1-1s-1 .45-1 1v8c0 2.76 2.24 5 5 5h5c.55 0 1-.45 1-1s-.45-1-1-1H8c-1.66 0-3-1.34-3-3Zm15.5 6H19v-7c0-1.1-.9-2-2-2h-5V3H6v8c0 1.65 1.35 3 3 3h7v5c0 1.1.9 2 2 2h2.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgAirlineSeatLegroomNormal;
