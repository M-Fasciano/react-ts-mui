import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgCallMissed = (props: SvgIconProps) => {
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
        d="M18.89 7.7 12 14.59 6.41 9H10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-3.59l6.29 6.29c.39.39 1.02.39 1.41 0l7.59-7.59a.996.996 0 0 0 0-1.41c-.38-.38-1.02-.38-1.4 0Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgCallMissed;
