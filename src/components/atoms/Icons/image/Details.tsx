import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgDetails = ({
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
      d="m3.84 5.49 7.29 12.96c.38.68 1.36.68 1.74 0l7.29-12.96A.998.998 0 0 0 19.29 4H4.71c-.76 0-1.25.82-.87 1.49ZM6.38 6h11.25L12 16 6.38 6Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgDetails;
