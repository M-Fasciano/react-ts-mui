import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgHomeWork = ({
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
      d="M20 3h-8c-.55 0-1 .45-1 1v1.61l.01.01 5 4.5c.63.56.99 1.38.99 2.23V13h2v2h-2v2h2v2h-2v2h3c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1Zm-5 4h-2V5h2v2Zm4 4h-2V9h2v2Zm0-4h-2V5h2v2Z"
      fill="#000"
      fillOpacity={0.54}
    />
    <path
      d="M15 20v-7.65a1 1 0 0 0-.33-.74l-5-4.5A.96.96 0 0 0 9 6.85c-.24 0-.48.09-.67.26l-5 4.5a.97.97 0 0 0-.33.74V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-4h4v4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgHomeWork;
