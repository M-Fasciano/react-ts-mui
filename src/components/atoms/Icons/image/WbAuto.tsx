import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgWbAuto = (props: SvgIconProps) => {
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
        d="M6.85 12.65h2.3L8 9l-1.15 3.65ZM22.72 7c-.42 0-.77.3-.85.7l-1.07 5.59-1.31-5.51c-.11-.46-.52-.78-.99-.78s-.88.32-.98.78l-1.31 5.51-1.07-5.59c-.08-.4-.44-.7-.85-.7-.01 0-.03.01-.04.01A7.998 7.998 0 0 0 0 12c0 4.42 3.58 8 8 8 3.17 0 5.9-1.85 7.2-4.52a1.104 1.104 0 0 0 2.01-.32L18.5 9.9l1.29 5.26c.12.49.57.84 1.07.84.52 0 .96-.36 1.08-.86l1.61-7.08A.859.859 0 0 0 22.72 7Zm-11.79 9c-.38 0-.72-.24-.84-.6L9.6 14H6.4l-.49 1.4c-.13.36-.46.6-.84.6a.888.888 0 0 1-.84-1.19l2.44-6.86C6.87 7.38 7.4 7 8 7c.6 0 1.13.38 1.34.94l2.44 6.86c.2.59-.23 1.2-.85 1.2Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgWbAuto;
