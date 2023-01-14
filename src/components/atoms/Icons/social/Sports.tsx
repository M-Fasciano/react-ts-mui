import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSports = ({
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
      d="M21 6h-9.77c-1.66 0-3.22.66-4.36 1.73C6.54 6.73 5.61 6 4.5 6a2.5 2.5 0 0 0 0 5c.21 0 .41-.03.61-.08-.05.25-.09.51-.1.78a6.006 6.006 0 0 0 6.68 6.27c2.55-.28 4.68-2.26 5.19-4.77.15-.71.15-1.4.06-2.06-.09-.6.38-1.13.99-1.13h2.76C21.56 10 22 9.55 22 9V7c0-.55-.45-1-1-1ZM4.5 9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5Zm6.5 6c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3Z"
      fill="#000"
      fillOpacity={0.54}
    />
    <path
      d="M11 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgSports;