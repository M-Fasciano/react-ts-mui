import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPregnantWoman = ({
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
      d="M9 4c0-1.11.89-2 2-2 1.11 0 2 .89 2 2 0 1.11-.89 2-2 2-1.11 0-2-.89-2-2Zm7 9a3.285 3.285 0 0 0-2-3c0-1.71-1.42-3.08-3.16-3C9.22 7.09 8 8.54 8 10.16V16c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V17h2c.55 0 1-.45 1-1v-3Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgPregnantWoman;
