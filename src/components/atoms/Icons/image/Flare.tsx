import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgFlare = (props: SvgIconProps) => {
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
        d="M6 11H2c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1Zm2.47-3.94-.72-.72a.996.996 0 1 0-1.41 1.41l.71.71c.39.39 1.02.39 1.41 0 .39-.38.39-1.02.01-1.4ZM12 1c-.56 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1Zm5.66 5.35a.996.996 0 0 0-1.41 0l-.71.71a.996.996 0 1 0 1.41 1.41l.71-.71c.38-.39.38-1.03 0-1.41ZM17 12c0 .56.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1Zm-5-3c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3Zm3.53 7.94.71.71a.996.996 0 1 0 1.41-1.41l-.71-.71a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41Zm-9.19.71c.39.39 1.02.39 1.41 0l.71-.71a.996.996 0 1 0-1.41-1.41l-.71.71c-.38.39-.38 1.03 0 1.41ZM12 23c.56 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgFlare;
