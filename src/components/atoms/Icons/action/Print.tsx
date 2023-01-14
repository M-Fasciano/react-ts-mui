import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPrint = ({
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
      d="M19 8H5c-1.66 0-3 1.34-3 3v4c0 1.1.9 2 2 2h2v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-2h2c1.1 0 2-.9 2-2v-4c0-1.66-1.34-3-3-3Zm-4 11H9c-.55 0-1-.45-1-1v-4h8v4c0 .55-.45 1-1 1Zm4-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Zm-2-9H7c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgPrint;
