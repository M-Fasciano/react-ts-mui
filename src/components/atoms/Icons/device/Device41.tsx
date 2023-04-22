import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgDevice41 = (props: SvgIconProps) => {
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
        d="M21 18c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1s-1 .45-1 1v6c0 .55.45 1 1 1Zm-1 4h2v-2h-2v2ZM4.41 22H18V11c0-1.66 1.34-3 3-3h1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgDevice41;
