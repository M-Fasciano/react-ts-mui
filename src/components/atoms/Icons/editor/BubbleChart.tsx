import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBubbleChart = ({
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
      d="M7.2 17.6a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4ZM14.8 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM15.2 13.6a4.8 4.8 0 1 0 0-9.6 4.8 4.8 0 0 0 0 9.6Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgBubbleChart;
