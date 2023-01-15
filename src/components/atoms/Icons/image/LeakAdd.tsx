import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLeakAdd = ({
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
      d="M11.05 21c.5 0 .94-.37.99-.87a8.997 8.997 0 0 1 8.08-8.08c.5-.05.88-.48.88-.99 0-.59-.51-1.06-1.1-1-5.19.52-9.32 4.65-9.84 9.83-.06.59.4 1.11.99 1.11ZM18 21h3v-3c-1.66 0-3 1.34-3 3Zm-2.91 0c.49 0 .9-.36.98-.85.36-2.08 2-3.72 4.08-4.08.49-.08.85-.49.85-.98 0-.61-.54-1.09-1.14-1a6.986 6.986 0 0 0-5.77 5.77c-.1.6.39 1.14 1 1.14ZM12.97 3.02c-.5 0-.94.37-.99.87a8.997 8.997 0 0 1-8.08 8.08c-.5.05-.88.48-.88.99 0 .59.51 1.06 1.1 1 5.19-.52 9.32-4.65 9.84-9.83a.998.998 0 0 0-.99-1.11Zm-6.94 0h-3v3c1.66 0 3-1.34 3-3Zm2.91 0c-.49 0-.9.36-.98.85-.36 2.08-2 3.72-4.08 4.08-.49.09-.85.49-.85.99 0 .61.54 1.09 1.14 1a6.986 6.986 0 0 0 5.77-5.77c.09-.61-.4-1.15-1-1.15Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgLeakAdd;
