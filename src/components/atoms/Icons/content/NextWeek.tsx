import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgNextWeek = ({
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
      d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2ZM10 5h4v2h-4V5Zm.5 13a.7.7 0 0 1 0-1l2.5-2.5-2.5-2.5a.7.7 0 0 1 0-1 .7.7 0 0 1 1 0l3.15 3.15c.2.2.2.51 0 .71L11.5 18a.7.7 0 0 1-1 0Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgNextWeek;