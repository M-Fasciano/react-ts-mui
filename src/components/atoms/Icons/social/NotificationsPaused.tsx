import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgNotificationsPaused = (props: SvgIconProps) => {
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
        d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2Zm7.29-4.71L18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71ZM14.5 9.33c0 .31-.11.6-.3.84l-2.5 3.03h1.9c.5 0 .9.4.9.9s-.4.9-.9.9h-2.78c-.73 0-1.32-.59-1.32-1.32v-.01c0-.31.11-.6.3-.84l2.5-3.03h-1.9c-.5 0-.9-.4-.9-.9s.4-.9.9-.9h2.78c.73 0 1.32.59 1.32 1.33Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgNotificationsPaused;
