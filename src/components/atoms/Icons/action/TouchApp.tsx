import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTouchApp = ({
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
      d="M8.79 9.24V5.5a2.5 2.5 0 0 1 5 0v3.74c1.21-.81 2-2.18 2-3.74 0-2.49-2.01-4.5-4.5-4.5s-4.5 2.01-4.5 4.5c0 1.56.79 2.93 2 3.74Zm5.5 2.47c-.28-.14-.58-.21-.89-.21h-.61v-6c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v10.74l-3.44-.72c-.37-.08-.76.04-1.03.31-.43.44-.43 1.14 0 1.58l4.01 4.01c.38.37.89.58 1.42.58h6.1c1 0 1.84-.73 1.98-1.72l.63-4.47c.12-.85-.32-1.69-1.09-2.07l-4.08-2.03Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgTouchApp;
