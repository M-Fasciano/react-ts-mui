import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgApartment = (props: SvgIconProps) => {
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
        d="M17 11V5c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h5c.55 0 1-.45 1-1v-3h2v3c0 .55.45 1 1 1h5c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2h-2ZM7 19H5v-2h2v2Zm0-4H5v-2h2v2Zm0-4H5V9h2v2Zm4 4H9v-2h2v2Zm0-4H9V9h2v2Zm0-4H9V5h2v2Zm4 8h-2v-2h2v2Zm0-4h-2V9h2v2Zm0-4h-2V5h2v2Zm4 12h-2v-2h2v2Zm0-4h-2v-2h2v2Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgApartment;
