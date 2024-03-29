import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgVisa = (props: SvgIconProps) => {
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
        d="M22.286 4H1.714C.768 4 0 4.86 0 5.92v12.16C0 19.14.768 20 1.714 20h20.572c.947 0 1.714-.86 1.714-1.92V5.92C24 4.86 23.233 4 22.286 4Z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.286 4.5H1.714C1.095 4.5.5 5.081.5 5.92v12.16c0 .839.595 1.42 1.214 1.42h20.572c.619 0 1.214-.581 1.214-1.42V5.92c0-.839-.595-1.42-1.214-1.42ZM1.714 4h20.572C23.233 4 24 4.86 24 5.92v12.16c0 1.06-.767 1.92-1.714 1.92H1.714C.768 20 0 19.14 0 18.08V5.92C0 4.86.768 4 1.714 4Z"
        fill="#CCCFD9"
      />
      <path
        d="m11.688 9.443-1.091 5.09h-1.32l1.091-5.09h1.32Zm5.553 3.286.695-1.911.4 1.911h-1.095Zm1.473 1.803h1.221l-1.066-5.09h-1.126a.6.6 0 0 0-.562.374l-1.98 4.716h1.385l.276-.76h1.693l.16.76Zm-3.445-1.661c.005-1.343-1.861-1.418-1.849-2.018.004-.182.178-.377.56-.426.189-.024.71-.044 1.301.228l.232-1.08a3.57 3.57 0 0 0-1.235-.225c-1.305 0-2.223.691-2.23 1.682-.008.733.655 1.141 1.154 1.385.516.25.688.41.686.633-.004.341-.411.493-.79.498-.664.01-1.048-.18-1.355-.321l-.24 1.115c.31.141.878.264 1.467.27 1.388 0 2.295-.683 2.299-1.741ZM9.802 9.443l-2.138 5.09H6.269L5.216 10.47c-.064-.25-.12-.342-.313-.447-.318-.172-.842-.333-1.303-.433l.032-.148h2.245c.287 0 .544.19.61.518l.555 2.946 1.374-3.464h1.386Z"
        fill="#1A1F71"
      />
    </SvgIcon>
  );
};
export default SvgVisa;
