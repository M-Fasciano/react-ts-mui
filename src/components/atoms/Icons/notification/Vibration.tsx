import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgVibration = ({
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
      d="M1 15c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1Zm3 2c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1Zm18-7v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1s-1 .45-1 1Zm-2 7c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v8c0 .55.45 1 1 1ZM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5ZM16 19H8V5h8v14Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgVibration;
