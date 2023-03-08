import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgDevice30 = (props: SvgIconProps) => {
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
        d="M19 1H9c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V4h10v16H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2ZM7.01 13.47l-1.92-1.92a.9.9 0 0 0-1.27 0 .9.9 0 0 0 0 1.27l2.47 2.47c.39.39 1.02.39 1.41 0l5.85-5.85a.9.9 0 0 0 0-1.27.9.9 0 0 0-1.27 0l-5.27 5.3Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgDevice30;
