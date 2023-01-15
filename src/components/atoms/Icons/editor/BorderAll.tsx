import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderAll = ({
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
      d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2Zm8 14H6c-.55 0-1-.45-1-1v-5h5c.55 0 1 .45 1 1v5Zm-1-8H5V6c0-.55.45-1 1-1h5v5c0 .55-.45 1-1 1Zm8 8h-5v-5c0-.55.45-1 1-1h5v5c0 .55-.45 1-1 1Zm1-8h-5c-.55 0-1-.45-1-1V5h5c.55 0 1 .45 1 1v5Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgBorderAll;
