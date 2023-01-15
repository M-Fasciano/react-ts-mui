import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBorderInner = ({
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
      d="M3 21h2v-2H3v2Zm4 0h2v-2H7v2ZM5 7H3v2h2V7ZM3 17h2v-2H3v2ZM9 3H7v2h2V3ZM5 3H3v2h2V3Zm12 0h-2v2h2V3Zm2 6h2V7h-2v2Zm0-6v2h2V3h-2Zm-4 18h2v-2h-2v2ZM12 3c-.55 0-1 .45-1 1v7H4c-.55 0-1 .45-1 1s.45 1 1 1h7v7c0 .55.45 1 1 1s1-.45 1-1v-7h7c.55 0 1-.45 1-1s-.45-1-1-1h-7V4c0-.55-.45-1-1-1Zm7 18h2v-2h-2v2Zm0-4h2v-2h-2v2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgBorderInner;
