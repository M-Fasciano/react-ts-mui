import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEditAttributes = ({
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
      d="M17.63 7H6.37C3.96 7 2 9.24 2 12s1.96 5 4.37 5h11.26c2.41 0 4.37-2.24 4.37-5s-1.96-5-4.37-5Zm-6.52 3.6L7.6 14.11a.485.485 0 0 1-.7 0l-1.86-1.86c-.2-.2-.2-.51 0-.71.2-.2.51-.2.71 0l1.51 1.51 3.16-3.16c.2-.2.51-.2.71 0 .2.2.17.51-.02.71Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgEditAttributes;
