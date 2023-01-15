import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgOutlinedFlag = ({
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
      d="m14 6-.72-1.45c-.17-.34-.52-.55-.9-.55H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5l.72 1.45a1 1 0 0 0 .89.55H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-5Zm4 8h-4l-1-2H7V6h5l1 2h5v6Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgOutlinedFlag;
