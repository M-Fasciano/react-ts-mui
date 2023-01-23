import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgInvertColors = (props: SvgIconProps) => {
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
        d="M6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31l-4.95-4.95a.996.996 0 0 0-1.41 0L6.34 7.93ZM12 19.59c-1.6 0-3.11-.62-4.24-1.76A5.945 5.945 0 0 1 6 13.59c0-1.6.62-3.11 1.76-4.24L12 5.1v14.49Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgInvertColors;
