import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhonelinkOff = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      d="M24 19V9c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v3.61l2 2V10h4v7h-1.61l2.93 2.93c.39-.13.68-.49.68-.93ZM21 6c.55 0 1-.45 1-1s-.45-1-1-1H7.39l2 2H21ZM1.36 2.21a.996.996 0 0 0 0 1.41l1.11 1.11C2.18 5.08 2 5.52 2 6v11h-.5c-.83 0-1.5.67-1.5 1.5S.67 20 1.5 20h16.23l1.64 1.64a.996.996 0 1 0 1.41-1.41L2.77 2.21a.996.996 0 0 0-1.41 0ZM4 17V6.27L14.73 17H4Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgPhonelinkOff;