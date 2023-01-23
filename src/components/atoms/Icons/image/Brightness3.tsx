import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgBrightness3 = (props: SvgIconProps) => {
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
        d="M18.87 10.37c-.75-4.76-5-8.35-9.82-8.37-.49 0-.97.03-1.44.1-.5.07-.6.73-.14.96A9.97 9.97 0 0 1 13 12c0 3.92-2.25 7.31-5.53 8.95-.45.23-.36.89.14.96.47.06.95.09 1.44.09 4.82-.02 9.07-3.61 9.82-8.37.09-.55.11-1.09.11-1.63 0-.54-.02-1.08-.11-1.63Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgBrightness3;
