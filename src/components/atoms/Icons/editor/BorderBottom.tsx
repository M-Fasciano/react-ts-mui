import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgBorderBottom = (props: SvgIconProps) => {
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
        d="M9 11H7v2h2v-2Zm4 4h-2v2h2v-2ZM9 3H7v2h2V3Zm4 8h-2v2h2v-2ZM5 3H3v2h2V3Zm8 4h-2v2h2V7Zm4 4h-2v2h2v-2Zm-4-8h-2v2h2V3Zm4 0h-2v2h2V3Zm2 10h2v-2h-2v2Zm0 4h2v-2h-2v2ZM5 7H3v2h2V7Zm14-4v2h2V3h-2Zm0 6h2V7h-2v2ZM5 11H3v2h2v-2ZM4 21h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1Zm1-6H3v2h2v-2Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgBorderBottom;
