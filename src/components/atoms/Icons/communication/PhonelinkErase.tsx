import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhonelinkErase = ({
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
      d="M12.5 7.7a.7.7 0 0 0-1 0L8 11.2 4.5 7.7a.7.7 0 0 0-1 0 .7.7 0 0 0 0 1L7 12.2l-3.5 3.5a.7.7 0 0 0 0 1 .7.7 0 0 0 1 0L8 13.2l3.5 3.5a.7.7 0 0 0 1 0 .7.7 0 0 0 0-1L9 12.2l3.5-3.5a.7.7 0 0 0 0-1ZM19 1H9c-1.1 0-2 .9-2 2v2c0 .55.45 1 1 1s1-.45 1-1V4h10v16H9v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgPhonelinkErase;
