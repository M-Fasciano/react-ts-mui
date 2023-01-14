import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderStyle = ({
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
      d="M15 21h2v-2h-2v2Zm4 0h2v-2h-2v2ZM7 21h2v-2H7v2Zm4 0h2v-2h-2v2Zm8-4h2v-2h-2v2Zm0-4h2v-2h-2v2ZM3 5v15c0 .55.45 1 1 1s1-.45 1-1V6c0-.55.45-1 1-1h14c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.1 0-2 .9-2 2Zm16 4h2V7h-2v2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgBorderStyle;
