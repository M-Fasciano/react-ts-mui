import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLocalPizza = ({
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
      d="M12 2C9.01 2 6.28 3.08 4.17 4.88c-.71.61-.86 1.65-.4 2.46l7.36 13.11c.38.68 1.36.68 1.74 0l7.36-13.11c.46-.81.31-1.86-.4-2.46C17.73 3.09 14.99 2 12 2ZM7 7c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Zm5 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgLocalPizza;
