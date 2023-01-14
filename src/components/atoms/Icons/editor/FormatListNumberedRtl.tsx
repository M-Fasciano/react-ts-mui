import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFormatListNumberedRtl = ({
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
      d="M20.5 16h-2c-.28 0-.5.22-.5.5s.22.5.5.5H20v.5h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h.5v.5h-1.5c-.28 0-.5.22-.5.5s.22.5.5.5h2c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5Zm-2-11h.5v2.5c0 .28.22.5.5.5s.5-.22.5-.5v-3c0-.28-.22-.5-.5-.5h-1c-.28 0-.5.22-.5.5s.22.5.5.5Zm2.5 5.72v-.22c0-.28-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5s.22.5.5.5h1.3l-1.68 1.96a.49.49 0 0 0-.12.32v.22c0 .28.22.5.5.5h2c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-1.3l1.68-1.96a.49.49 0 0 0 .12-.32ZM15 5H3c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1Zm0 12H3c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1Zm0-6H3c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgFormatListNumberedRtl;
