import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgRvHookup = (props: SvgIconProps) => {
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
        d="M21 17h-1v-6c0-1.1-.9-2-2-2H7v-.74c0-.46-.56-.7-.89-.37L4.37 9.63c-.2.2-.2.53 0 .74l1.74 1.74c.33.33.89.1.89-.37V11h4v3H5c-.55 0-1 .45-1 1v2c0 1.1.9 2 2 2h2c0 1.66 1.34 3 3 3s3-1.34 3-3h7c.55 0 1-.45 1-1s-.45-1-1-1Zm-10 3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm7-6h-4v-3h3c.55 0 1 .45 1 1v2Zm-8-8h7v.74c0 .46.56.7.89.37l1.74-1.74c.2-.2.2-.53 0-.74l-1.74-1.74a.52.52 0 0 0-.89.37V4h-7c-.55 0-1 .45-1 1s.45 1 1 1Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgRvHookup;
