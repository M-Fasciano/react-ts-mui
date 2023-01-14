import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDesktopMac = ({
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
      d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-1.63 2.45c-.44.66.03 1.55.83 1.55h5.6c.8 0 1.28-.89.83-1.55L14 18h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm0 12H3V5c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v9Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgDesktopMac;
