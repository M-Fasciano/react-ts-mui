import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgBorderLeft = (props: SvgIconProps) => {
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
        d="M11 21h2v-2h-2v2Zm0-4h2v-2h-2v2Zm0-12h2V3h-2v2Zm0 4h2V7h-2v2Zm0 4h2v-2h-2v2Zm-4 8h2v-2H7v2ZM7 5h2V3H7v2Zm0 8h2v-2H7v2Zm-3 8c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v16c0 .55.45 1 1 1ZM19 9h2V7h-2v2Zm-4 12h2v-2h-2v2Zm4-4h2v-2h-2v2Zm0-14v2h2V3h-2Zm0 10h2v-2h-2v2Zm0 8h2v-2h-2v2Zm-4-8h2v-2h-2v2Zm0-8h2V3h-2v2Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgBorderLeft;
