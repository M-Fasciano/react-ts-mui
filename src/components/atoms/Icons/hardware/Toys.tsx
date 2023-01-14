import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgToys = ({
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
      d="M12 12c0-3 2.5-5.5 5.5-5.5 2.57 0 4.77 1.83 5.35 4.24.15.64-.32 1.26-.97 1.26H12Zm0 0c0 3-2.5 5.5-5.5 5.5-2.57 0-4.77-1.83-5.35-4.24-.15-.64.32-1.26.97-1.26H12Zm0 0c-3 0-5.5-2.5-5.5-5.5 0-2.57 1.83-4.77 4.24-5.35.64-.15 1.26.32 1.26.97V12Zm0 0c3 0 5.5 2.5 5.5 5.5 0 2.57-1.83 4.77-4.24 5.35-.64.15-1.26-.32-1.26-.97V12Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgToys;
