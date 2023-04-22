import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgCompare = (props: SvgIconProps) => {
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
        d="M10 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h5v1c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1v1Zm0 15H5l5-6v6Zm9-15h-5v2h4c.55 0 1 .45 1 1v12l-5-6v9h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgCompare;
