import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgChangeHistory = ({
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
      d="M12 7.77 18.39 18H5.61L12 7.77Zm-.85-2.41-8.2 13.11c-.41.67.07 1.53.85 1.53h16.4a1 1 0 0 0 .85-1.53l-8.2-13.11a1 1 0 0 0-1.7 0Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgChangeHistory;
