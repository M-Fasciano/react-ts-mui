import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSubway = ({
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
      d="M8.5 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM15.5 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      fill="#000"
      fillOpacity={0.54}
    />
    <path
      d="M7.01 9h10v5h-10V9ZM17.8 2.8C16 2.09 13.86 2 12 2c-1.86 0-4 .09-5.8.8C3.53 3.84 2 6.05 2 8.86V22h20V8.86c0-2.81-1.53-5.02-4.2-6.06Zm.2 12.7c0 1.54-1.16 2.79-2.65 2.96l1.15 1.16V20h-1.67l-1.5-1.5h-2.66L9.17 20H7.5v-.38l1.15-1.16A2.979 2.979 0 0 1 6 15.5V9c0-2.63 3-3 6-3s6 .37 6 3v6.5Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgSubway;
