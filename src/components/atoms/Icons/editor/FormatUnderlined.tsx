import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFormatUnderlined = ({
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
      d="M12.79 16.95c3.03-.39 5.21-3.11 5.21-6.16V4.25a1.25 1.25 0 0 0-2.5 0v6.65c0 1.67-1.13 3.19-2.77 3.52A3.494 3.494 0 0 1 8.5 11V4.25a1.25 1.25 0 0 0-2.5 0V11c0 3.57 3.13 6.42 6.79 5.95ZM5 20c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgFormatUnderlined;