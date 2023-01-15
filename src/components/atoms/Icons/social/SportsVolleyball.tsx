import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSportsVolleyball = ({
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
      d="M6 4.01C3.58 5.84 2 8.73 2 12c0 1.46.32 2.85.89 4.11L6 14.31V4.01ZM11 11.42V2.05c-1.06.11-2.07.38-3 .79v10.32l3-1.74ZM12 13.15l-8.11 4.68c.61.84 1.34 1.59 2.18 2.2L15 14.89l-3-1.74ZM13 7.96v3.46l8.11 4.68c.42-.93.7-1.93.82-2.98L13 7.96ZM8.07 21.2c1.21.51 2.53.8 3.93.8 3.34 0 6.29-1.65 8.11-4.16L17 16.04 8.07 21.2ZM21.92 10.81c-.55-4.63-4.26-8.3-8.92-8.76v3.6l8.92 5.16Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgSportsVolleyball;
