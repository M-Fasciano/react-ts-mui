import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgPages = (props: SvgIconProps) => {
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
        d="M3 5v6h5l-.6-2.38c-.18-.74.48-1.4 1.22-1.22L11 8V3H5c-1.1 0-2 .9-2 2Zm5 8H3v6c0 1.1.9 2 2 2h6v-5l-2.38.6c-.73.18-1.4-.48-1.21-1.21L8 13Zm7.38 3.6L13 16v5h6c1.1 0 2-.9 2-2v-6h-5l.6 2.38c.18.74-.48 1.4-1.22 1.22ZM19 3h-6v5l2.38-.6c.73-.18 1.4.48 1.21 1.21L16 11h5V5c0-1.1-.9-2-2-2Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgPages;
