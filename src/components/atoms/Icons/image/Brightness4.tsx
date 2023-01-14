import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgBrightness4 = ({
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
      d="M22.6 11.29 20 8.69V5c0-.55-.45-1-1-1h-3.69l-2.6-2.6a.996.996 0 0 0-1.41 0L8.69 4H5c-.55 0-1 .45-1 1v3.69l-2.6 2.6a.996.996 0 0 0 0 1.41L4 15.3V19c0 .55.45 1 1 1h3.69l2.6 2.6c.39.39 1.02.39 1.41 0l2.6-2.6H19c.55 0 1-.45 1-1v-3.69l2.6-2.6c.39-.39.39-1.03 0-1.42Zm-4.68 1.69a5.997 5.997 0 0 1-3.88 4.66c-1.21.43-2.41.45-3.5.18-.41-.1-.48-.65-.13-.9A5.954 5.954 0 0 0 13 12a5.97 5.97 0 0 0-2.58-4.92c-.35-.24-.29-.79.13-.9 1.09-.27 2.29-.25 3.5.18 2.02.72 3.54 2.54 3.88 4.66.05.33.07.66.07.98-.01.32-.03.65-.08.98Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgBrightness4;
