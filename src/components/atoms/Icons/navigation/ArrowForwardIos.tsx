import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgArrowForwardIos = ({
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
      d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98a1.25 1.25 0 0 0-1.77 0 1.25 1.25 0 0 0 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgArrowForwardIos;