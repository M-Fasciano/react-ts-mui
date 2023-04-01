import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgWbCloudy = (props: SvgIconProps) => {
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
      <g clipPath="url(#wb-cloudy_svg__a)">
        <path
          d="M19.37 10.04C18.68 6.59 15.65 4 12.01 4c-2.89 0-5.4 1.64-6.65 4.04A5.994 5.994 0 0 0 .01 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96Z"
          fill="currentColor"
          fillOpacity={0.54}
        />
      </g>
      <defs>
        <clipPath id="wb-cloudy_svg__a">
          <path fill="#fff" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
export default SvgWbCloudy;
