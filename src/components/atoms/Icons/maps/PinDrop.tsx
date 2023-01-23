import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgPinDrop = (props: SvgIconProps) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 20h12c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1Zm6-13c-1.1 0-2 .9-2 2s.9 2 2 2a2 2 0 0 0 0-4Zm0-5c3.27 0 7 2.46 7 7.15 0 2.98-2.13 6.12-6.39 9.39-.36.28-.86.28-1.22 0C7.13 15.26 5 12.13 5 9.15 5 4.46 8.73 2 12 2Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgPinDrop;
