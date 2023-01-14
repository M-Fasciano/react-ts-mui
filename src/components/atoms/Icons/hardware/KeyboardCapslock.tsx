import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgKeyboardCapslock = ({
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
      d="m12 8.41 3.89 3.89a.996.996 0 1 0 1.41-1.41L12.71 6.3a.996.996 0 0 0-1.41 0l-4.6 4.59a.996.996 0 1 0 1.41 1.41L12 8.41ZM7 18h10c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgKeyboardCapslock;
