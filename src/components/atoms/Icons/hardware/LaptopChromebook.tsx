import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgLaptopChromebook = (props: SvgIconProps) => {
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
        d="M23 18h-1V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13H1c-.55 0-1 .45-1 1s.45 1 1 1h22c.55 0 1-.45 1-1s-.45-1-1-1Zm-9.5 0h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5Zm6.5-3H4V6c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v9Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgLaptopChromebook;
