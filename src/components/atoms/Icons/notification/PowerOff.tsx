import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPowerOff = ({
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
      d="M18 13.66V8.99c0-1-1.01-2-2-1.99V4c0-.55-.45-1-1-1s-1 .45-1 1v3h-3.88l7.63 7.63c.15-.3.25-.63.25-.97ZM10 4c0-.55-.45-1-1-1s-1 .45-1 1v.88l2 2V4Zm10.15 15.86-7.66-7.66-5.1-5.1-2.56-2.56a.996.996 0 1 0-1.41 1.41l2.63 2.63c-.03.13-.05.27-.05.41v4.66c0 .53.21 1.04.58 1.41L9.5 18v2c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-2l.48-.48 3.76 3.76c.39.39 1.02.39 1.41 0 .39-.39.39-1.03 0-1.42Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgPowerOff;
