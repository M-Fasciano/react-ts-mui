import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNightsStay = ({
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
      d="M11.1 12.08c-2-3.88-.92-7.36.07-9.27.19-.36-.12-.77-.53-.72-5.02.68-8.86 5.07-8.65 10.32.01 0 .01 0 .01.01.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15A4.01 4.01 0 0 1 11 18c0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5a10 10 0 0 0 7.76-3.69c.26-.32.04-.79-.37-.82-2.49-.13-6.28-1.53-8.28-5.42Z"
      fill="#000"
      fillOpacity={0.54}
    />
    <path
      d="M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgNightsStay;
