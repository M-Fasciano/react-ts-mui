import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBeenhere = ({
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
      d="M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66l7.57 5.04c.34.22.77.22 1.11 0l7.56-5.04c.53-.36.88-.97.88-1.66V3c0-1.1-.9-2-2-2Zm-.7 6.7-7.59 7.59a.996.996 0 0 1-1.41 0L5.71 11.7a.996.996 0 1 1 1.41-1.41L10 13.17l6.88-6.88a.996.996 0 0 1 1.41 0c.39.39.4 1.02.01 1.41Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgBeenhere;
