import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgIDeal = (props: SvgIconProps) => {
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
      <g clipPath="url(#iDeal_svg__a)">
        <path
          d="M4.05 5.894v12.012c0 .575.47 1.045 1.045 1.045h7.177c5.426 0 7.778-3.037 7.778-7.067 0-4.009-2.352-7.035-7.778-7.035H5.095c-.575 0-1.045.47-1.045 1.045Z"
          fill="#fff"
        />
        <path
          d="M8.854 7.797v8.875h3.863c3.507 0 5.028-1.98 5.028-4.783 0-2.68-1.521-4.761-5.029-4.761H9.524a.67.67 0 0 0-.67.669Z"
          fill="#C06"
        />
        <path
          d="M12.272 17.995h-6.24c-.555 0-1.005-.45-1.005-1.004V6.814c0-.554.45-1.004 1.004-1.004h6.241c5.922 0 6.806 3.811 6.806 6.08 0 3.935-2.42 6.105-6.806 6.105Zm-6.24-11.85a.667.667 0 0 0-.67.67V16.99c0 .371.298.67.67.67h6.24c4.171 0 6.471-2.05 6.471-5.772 0-4.997-4.056-5.744-6.47-5.744H6.03Z"
          fill="currentColor"
        />
        <path
          d="M10.213 10.693c.136 0 .261.02.381.062.12.042.22.11.309.194.083.088.151.198.204.324a1.577 1.577 0 0 1 .016.889c-.043.13-.1.245-.178.34a.863.863 0 0 1-.298.224c-.12.052-.262.083-.424.083h-.915v-2.122h.905v.006Zm-.032 1.73c.068 0 .131-.01.199-.032a.39.39 0 0 0 .167-.11.61.61 0 0 0 .12-.198.828.828 0 0 0 .047-.298c0-.104-.01-.204-.03-.287a.57.57 0 0 0-.105-.22.471.471 0 0 0-.189-.141.77.77 0 0 0-.287-.047h-.335v1.338h.413v-.005ZM13.067 10.693v.392h-1.119v.454h1.03v.361h-1.03v.518h1.145v.392h-1.61v-2.123h1.584v.006ZM14.666 10.693l.795 2.122h-.486l-.162-.47h-.795l-.167.47h-.47l.8-2.122h.485Zm.026 1.301-.266-.779h-.005l-.277.78h.548ZM16.219 10.693v1.73h1.035v.392h-1.5v-2.122h.465Z"
          fill="#fff"
        />
        <path
          d="M7.108 12.731a.977.977 0 1 0 0-1.955.977.977 0 0 0 0 1.955ZM7.845 16.672c-.82 0-1.48-.663-1.48-1.479v-1.155a.742.742 0 1 1 1.485 0v2.634h-.005Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="iDeal_svg__a">
          <path
            fill="#fff"
            transform="translate(4.05 4.849)"
            d="M0 0h16v14.103H0z"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  );
};
export default SvgIDeal;
