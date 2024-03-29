import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgTagFaces = (props: SvgIconProps) => {
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
        d="M12.01 2C6.49 2 2.02 6.48 2.02 12s4.47 10 9.99 10c5.53 0 10.01-4.48 10.01-10S17.54 2 12.01 2Zm.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.35 8 15.52 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5Zm-7 0c.83 0 1.5-.67 1.5-1.5S9.35 8 8.52 8s-1.5.67-1.5 1.5.67 1.5 1.5 1.5Zm3.5 6.5c2.03 0 3.8-1.11 4.75-2.75a.503.503 0 0 0-.44-.75H7.71c-.38 0-.63.42-.44.75a5.489 5.489 0 0 0 4.75 2.75Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgTagFaces;
