import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgHeadsetMic = (props: SvgIconProps) => {
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
        d="M11.4 1.02C6.62 1.33 3 5.52 3 10.31V17c0 1.66 1.34 3 3 3h1c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H5v-1.71C5 6.45 7.96 3.11 11.79 3A6.999 6.999 0 0 1 19 10v2h-2c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h2v1h-6c-.55 0-1 .45-1 1s.45 1 1 1h5c1.66 0 3-1.34 3-3V10c0-5.17-4.36-9.32-9.6-8.98Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgHeadsetMic;
