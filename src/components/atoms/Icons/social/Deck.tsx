import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgDeck = (props: SvgIconProps) => {
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
        d="M20.41 9c.49 0 .69-.63.29-.91L13.15 2.8a2 2 0 0 0-2.29 0L3.3 8.09c-.4.28-.2.91.29.91H11v12c0 .55.45 1 1 1s1-.45 1-1V9h7.41Z"
        fill="#000"
        fillOpacity={0.54}
      />
      <path
        d="M8 16H4.9l-.57-3.02a1.003 1.003 0 0 0-1.97.37L3 16.74V21c0 .55.45 1 1 1h.01c.55 0 1-.44 1-.99L5.02 18H7v3c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1ZM20.84 12.18c-.54-.1-1.06.26-1.17.8L19.1 16H16c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-3h1.98l.02 3.01c0 .55.45.99 1 .99s1-.45 1-1v-4.26l.64-3.39c.1-.54-.26-1.07-.8-1.17Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgDeck;
