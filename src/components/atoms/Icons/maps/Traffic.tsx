import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTraffic = ({
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
      d="M19.96 10.59a.514.514 0 0 0-.5-.59H17V8.86a4.01 4.01 0 0 0 2.96-3.27.514.514 0 0 0-.5-.59H17V4c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 0 0 7 8.86V10H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 0 0 7 13.86V15H4.54c-.31 0-.54.28-.5.59A4.01 4.01 0 0 0 7 18.86V20c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1.14a4.01 4.01 0 0 0 2.96-3.27.514.514 0 0 0-.5-.59H17v-1.14a4.01 4.01 0 0 0 2.96-3.27ZM12 19a2 2 0 1 1-.001-3.999 2 2 0 0 1 0 3.999Zm0-5a2 2 0 1 1-.001-3.999 2 2 0 0 1 0 3.999Zm0-5a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 1 1 0 4Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgTraffic;
