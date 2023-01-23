import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgScatterPlot = (props: SvgIconProps) => {
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
        d="M7 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM11 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16.6 20.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgScatterPlot;
