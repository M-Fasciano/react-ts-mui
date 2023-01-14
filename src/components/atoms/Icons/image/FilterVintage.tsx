import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFilterVintage = ({
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
      d="M18.7 12.4c-.28-.16-.57-.29-.86-.4.29-.11.58-.24.86-.4a6.012 6.012 0 0 0 3-5.19 6.007 6.007 0 0 0-6 0c-.28.16-.54.35-.78.54.05-.31.08-.63.08-.95 0-2.22-1.21-4.15-3-5.19C10.21 1.85 9 3.78 9 6c0 .32.03.64.08.95-.24-.2-.5-.39-.78-.55a6.008 6.008 0 0 0-6 0 5.97 5.97 0 0 0 3 5.19c.28.16.57.29.86.4-.29.11-.58.24-.86.4a6.012 6.012 0 0 0-3 5.19 6.007 6.007 0 0 0 6 0c.28-.16.54-.35.78-.54-.05.32-.08.64-.08.96 0 2.22 1.21 4.15 3 5.19 1.79-1.04 3-2.97 3-5.19 0-.32-.03-.64-.08-.95.24.2.5.38.78.54a6.008 6.008 0 0 0 6 0 6.012 6.012 0 0 0-3-5.19ZM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgFilterVintage;
