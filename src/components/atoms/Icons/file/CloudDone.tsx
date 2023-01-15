import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCloudDone = ({
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
      d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96Zm-8.64 6.25a.996.996 0 0 1-1.41 0L7.2 14.2a.996.996 0 1 1 1.41-1.41L10 14.18l4.48-4.48a.996.996 0 1 1 1.41 1.41l-5.18 5.18Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgCloudDone;
