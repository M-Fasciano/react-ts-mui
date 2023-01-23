import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgFeedback = (props: SvgIconProps) => {
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
        d="M20 2H4.01c-1.1 0-2 .9-2 2v18L6 18h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-7 12h-2v-2h2v2Zm0-5c0 .55-.45 1-1 1s-1-.45-1-1V7c0-.55.45-1 1-1s1 .45 1 1v2Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgFeedback;
