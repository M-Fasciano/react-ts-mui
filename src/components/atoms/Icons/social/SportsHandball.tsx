import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgSportsHandball = (props: SvgIconProps) => {
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
        d="M14.27 6c-.55.95-.22 2.18.73 2.73.95.55 2.18.22 2.73-.73.55-.95.22-2.18-.73-2.73-.95-.55-2.18-.22-2.73.73Z"
        fill="#000"
        fillOpacity={0.54}
      />
      <path
        d="m15.84 10.41-2.6-1.5a5.024 5.024 0 0 1-2.18-6.07.991.991 0 0 0-.43-1.21c-.53-.3-1.22-.07-1.43.5-.95 2.51-.35 5.35 1.46 7.27l-4.65 8.05c-.28.48-.11 1.09.37 1.37s1.09.11 1.37-.37l1-1.73 1.73 1-2.5 4.33c-.28.48-.11 1.09.37 1.37s1.09.11 1.37-.37l5.79-10.02a5.03 5.03 0 0 1 .66 4.72.999.999 0 0 0 1.87.7c.97-2.62.41-5.84-2.2-8.04ZM12.75 3.8c.72.41 1.63.17 2.05-.55.41-.72.17-1.63-.55-2.05a1.501 1.501 0 0 0-1.5 2.6Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgSportsHandball;
