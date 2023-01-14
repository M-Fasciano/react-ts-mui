import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDirectionsBoat = ({
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
      d="M20 21c-1.29 0-2.58-.41-3.74-1.14-.16-.1-.37-.1-.53 0-2.31 1.47-5.16 1.47-7.47 0-.16-.1-.37-.1-.53 0C6.58 20.59 5.29 21 4 21H3c-.55 0-1 .45-1 1s.45 1 1 1h1c1.38 0 2.74-.35 4-.99a8.753 8.753 0 0 0 8 0c1.26.65 2.62.99 4 .99h1c.55 0 1-.45 1-1s-.45-1-1-1h-1ZM3.95 19H4c1.42 0 2.7-.7 3.66-1.64.19-.18.5-.18.69 0C9.3 18.3 10.58 19 12 19s2.7-.7 3.66-1.64c.19-.19.49-.19.69 0C17.3 18.3 18.58 19 20 19h.05l1.89-6.68c.08-.26.06-.54-.06-.78a.997.997 0 0 0-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V2c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v2H6c-1.1 0-2 .9-2 2v4.62l-1.29.42a1.007 1.007 0 0 0-.66 1.28L3.95 19ZM7 6h10c.55 0 1 .45 1 1v2.97L12.62 8.2c-.41-.13-.84-.13-1.25 0L6 9.97V7c0-.55.45-1 1-1Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgDirectionsBoat;
