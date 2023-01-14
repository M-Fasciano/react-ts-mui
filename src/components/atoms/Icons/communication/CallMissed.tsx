import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCallMissed = ({
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
      d="M18.89 7.7 12 14.59 6.41 9H10c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1s1-.45 1-1v-3.59l6.29 6.29c.39.39 1.02.39 1.41 0l7.59-7.59a.996.996 0 0 0 0-1.41c-.38-.38-1.02-.38-1.4 0Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgCallMissed;
