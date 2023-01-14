import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgScatterPlot = ({
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
      d="M7 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM11 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16.6 20.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgScatterPlot;
