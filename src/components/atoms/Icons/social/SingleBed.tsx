import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSingleBed = ({
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
      d="M18 10V7c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c-1.1 0-2 .9-2 2v5h1.33l.51 1.53c.1.28.36.47.66.47a.7.7 0 0 0 .66-.47L7.67 17h8.67l.51 1.53c.09.28.35.47.65.47a.7.7 0 0 0 .66-.47l.51-1.53H20v-5c0-1.1-.9-2-2-2Zm-7 0H8V8c0-.55.45-1 1-1h2v3Zm5 0h-3V7h2c.55 0 1 .45 1 1v2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgSingleBed;
