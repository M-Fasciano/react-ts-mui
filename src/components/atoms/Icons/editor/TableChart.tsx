import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgTableChart = (props: SvgIconProps) => {
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
        d="M10 10.02h5V21h-5V10.02ZM17 21h3c1.1 0 2-.9 2-2v-9h-5v11Zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2ZM3 19c0 1.1.9 2 2 2h3V10H3v9Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgTableChart;
