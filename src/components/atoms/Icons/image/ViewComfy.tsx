import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgViewComfy = ({
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
      d="M3 9h4V5H5c-1.1 0-2 .9-2 2v2Zm0 5h4v-4H3v4Zm5 0h4v-4H8v4Zm5 0h4v-4h-4v4ZM8 9h4V5H8v4Zm5-4v4h4V5h-4Zm5 9h4v-4h-4v4ZM5 19h2v-4H3v2c0 1.1.9 2 2 2Zm3 0h4v-4H8v4Zm5 0h4v-4h-4v4Zm5 0h2c1.1 0 2-.9 2-2v-2h-4v4Zm0-14v4h4V7c0-1.1-.9-2-2-2h-2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgViewComfy;
