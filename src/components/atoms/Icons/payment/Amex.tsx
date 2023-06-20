import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgAmex = (props: SvgIconProps) => {
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
      <rect y={4} width={24} height={16} rx={2.5} fill="#1F72CD" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m4.303 9.5-2.245 4.97h2.688l.333-.793h.762l.333.792h2.959v-.604l.264.604h1.53l.264-.617v.617h6.154l.748-.771.7.771 3.161.007-2.252-2.478L21.954 9.5h-3.111l-.729.758-.678-.758H10.74l-.575 1.283L9.578 9.5H6.895v.584L6.597 9.5H4.303Zm.52.706h1.31l1.49 3.37v-3.37h1.435l1.15 2.416 1.06-2.416h1.429v3.565h-.869l-.007-2.794-1.267 2.794h-.778l-1.274-2.794v2.794H6.715l-.34-.799h-1.83l-.339.799h-.958l1.575-3.565Zm12.203 0h-3.534v3.563h3.48l1.12-1.18 1.082 1.18h1.13l-1.643-1.771 1.642-1.792h-1.08l-1.116 1.167-1.08-1.167Zm-11.566.603-.603 1.424h1.206l-.603-1.424Zm8.906.786v-.651h2.205l.962 1.04-1.005 1.047h-2.162v-.71h1.928v-.726h-1.928Z"
        fill="#fff"
      />
    </SvgIcon>
  );
};
export default SvgAmex;
