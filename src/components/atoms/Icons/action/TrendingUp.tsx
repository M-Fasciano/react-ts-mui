import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTrendingUp = ({
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
      d="m16.85 6.85 1.44 1.44-4.88 4.88-3.29-3.29a.996.996 0 0 0-1.41 0l-6 6.01a.996.996 0 1 0 1.41 1.41L9.41 12l3.29 3.29c.39.39 1.02.39 1.41 0l5.59-5.58 1.44 1.44a.5.5 0 0 0 .85-.35V6.5a.48.48 0 0 0-.49-.5h-4.29a.5.5 0 0 0-.36.85Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgTrendingUp;