import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMouse = ({
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
      d="M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93ZM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4Zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgMouse;
