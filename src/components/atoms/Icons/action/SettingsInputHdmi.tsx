import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgSettingsInputHdmi = (props: SvgIconProps) => {
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
        d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-.55 0-1 .45-1 1v4.7c0 .2.06.39.17.55L8 19v2c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2l2.83-5.75a.99.99 0 0 0 .17-.55V8c0-.55-.45-1-1-1Zm-2 0h-2V5.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V7h-2V5.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V7H8V4h8v3Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgSettingsInputHdmi;
