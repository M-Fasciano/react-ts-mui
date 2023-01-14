import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSwapVerticalCircle = ({
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
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM6.5 9l3.15-3.15c.2-.2.51-.2.71 0L13.5 9H11v4H9V9H6.5Zm7.85 9.15c-.2.2-.51.2-.71 0L10.5 15H13v-4h2v4h2.5l-3.15 3.15Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgSwapVerticalCircle;
