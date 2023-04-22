import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgChangeHistory = (props: SvgIconProps) => {
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
        d="M12 7.77 18.39 18H5.61L12 7.77Zm-.85-2.41-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 0 0 .85-1.53l-8.2-13.11a1 1 0 0 0-1.7 0Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgChangeHistory;
