import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgPanoramaWideAngle = (props: SvgIconProps) => {
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
        d="M12 6c2.45 0 4.71.2 7.29.64A21 21 0 0 1 20 12a21 21 0 0 1-.71 5.36c-2.58.44-4.84.64-7.29.64s-4.71-.2-7.29-.64A21 21 0 0 1 4 12a21 21 0 0 1 .71-5.36C7.29 6.2 9.55 6 12 6Zm0-2c-2.73 0-5.22.24-7.95.72l-.93.16-.25.9C2.29 7.85 2 9.93 2 12c0 2.07.29 4.15.87 6.22l.25.89.93.16c2.73.49 5.22.73 7.95.73 2.73 0 5.22-.24 7.95-.72l.93-.16.25-.89c.58-2.08.87-4.16.87-6.23 0-2.07-.29-4.15-.87-6.22l-.25-.89-.93-.16C17.22 4.24 14.73 4 12 4Z"
        fill="currentColor"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgPanoramaWideAngle;
