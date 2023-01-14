import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgAmpStories = ({
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
      d="M16 4H8c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1ZM4 6c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1ZM20 6c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgAmpStories;
