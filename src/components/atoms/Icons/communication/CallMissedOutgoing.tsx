import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCallMissedOutgoing = ({
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
      d="m3.7 9.11 7.59 7.59c.39.39 1.02.39 1.41 0l6.3-6.3V14c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1s.45 1 1 1h3.59L12 14.59 5.11 7.7a.996.996 0 0 0-1.41 0c-.38.39-.38 1.03 0 1.41Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgCallMissedOutgoing;
