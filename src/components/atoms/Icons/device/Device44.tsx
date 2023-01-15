import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDevice44 = ({
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
      d="M21 3.41c0-.89-1.08-1.34-1.71-.71l-6.6 6.6L21 17.61V3.41Zm.44 17.47L5.62 5.06a.996.996 0 1 0-1.41 1.41l5.66 5.66-7.16 7.16c-.63.63-.19 1.71.7 1.71h15.32l1.29 1.29c.39.39 1.02.39 1.41 0 .4-.39.4-1.02.01-1.41Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgDevice44;
