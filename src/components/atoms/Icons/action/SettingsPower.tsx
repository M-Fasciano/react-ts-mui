import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgSettingsPower = (props: SvgIconProps) => {
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
        d="M7 24h2v-2H7v2Zm4 0h2v-2h-2v2Zm1-22c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1Zm3.94 3.06-.02.02c-.41.41-.36 1.08.08 1.46 1.51 1.34 2.33 3.43 1.88 5.7-.46 2.28-2.29 4.14-4.56 4.62A6.01 6.01 0 0 1 6 11c0-1.78.78-3.37 2.01-4.47.43-.39.47-1.04.07-1.45l-.02-.02a.991.991 0 0 0-1.36-.04c-2.01 1.77-3.12 4.53-2.56 7.52.59 3.15 3.11 5.7 6.26 6.31 5.12.99 9.6-2.9 9.6-7.85 0-2.38-1.05-4.52-2.71-5.99a.99.99 0 0 0-1.35.05ZM15 24h2v-2h-2v2Z"
        fill="#000"
        fillOpacity={0.54}
      />
    </SvgIcon>
  );
};
export default SvgSettingsPower;
