import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDeviceUnknown = ({
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
      d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2Zm0 18H7V5h10v14Zm-6-3h2v2h-2v-2Zm-1.48-5.81h.13c.33 0 .59-.23.7-.54.24-.69.91-1.21 1.66-1.21.93 0 1.75.82 1.75 1.75 0 1.32-1.49 1.55-2.23 2.82h-.01c-.08.14-.14.29-.2.45-.01.02-.02.03-.02.05-.01.02-.01.04-.01.05-.1.31-.16.66-.16 1.08h1.76c0-.25.04-.47.12-.67.54-1.47 2.77-1.86 2.48-4.18-.19-1.55-1.43-2.84-2.98-3.04-1.77-.23-3.29.78-3.81 2.3-.2.56.23 1.14.82 1.14Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgDeviceUnknown;