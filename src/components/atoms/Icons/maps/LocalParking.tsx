import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgLocalParking = (props: SvgIconProps) => {
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
        d="M12.79 3H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2s2-.9 2-2v-4h3c3.57 0 6.42-3.13 5.95-6.79C18.56 5.19 15.84 3 12.79 3Zm.41 8H10V7h3.2c1.1 0 2 .9 2 2s-.9 2-2 2Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgLocalParking;
