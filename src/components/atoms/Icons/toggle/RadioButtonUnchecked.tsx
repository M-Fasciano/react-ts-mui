import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgRadioButtonUnchecked = (props: SvgIconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgRadioButtonUnchecked;
