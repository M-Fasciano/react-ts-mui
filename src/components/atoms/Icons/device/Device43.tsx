import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDevice43 = ({
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
      d="M20 6.83V19c0 .55-.45 1-1 1H6.83L20 6.83Zm.29-3.12L3.71 20.29c-.63.63-.19 1.71.7 1.71H20c1.1 0 2-.9 2-2V4.41c0-.89-1.08-1.33-1.71-.7Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgDevice43;
