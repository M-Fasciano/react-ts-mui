import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgFlipCameraIos = (props: SvgIconProps) => {
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
        d="M20 5h-3.17l-1.24-1.35A1.99 1.99 0 0 0 14.12 3H9.88c-.56 0-1.1.24-1.48.65L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm-6.33 12.7c-.52.19-1.08.3-1.67.3-2.76 0-5-2.24-5-5H5l2.5-2.5L10 13H8c0 2.21 1.79 4 4 4 .46 0 .91-.08 1.32-.23a.498.498 0 1 1 .35.93Zm2.83-2.2L14 13h2c0-2.21-1.79-4-4-4-.46 0-.91.08-1.32.23a.498.498 0 1 1-.35-.93c.52-.19 1.08-.3 1.67-.3 2.76 0 5 2.24 5 5h2l-2.5 2.5Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgFlipCameraIos;
