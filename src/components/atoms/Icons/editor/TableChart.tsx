import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTableChart = ({
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
      d="M10 10.02h5V21h-5V10.02ZM17 21h3c1.1 0 2-.9 2-2v-9h-5v11Zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2ZM3 19c0 1.1.9 2 2 2h3V10H3v9Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgTableChart;
