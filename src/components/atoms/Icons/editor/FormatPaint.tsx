import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgFormatPaint = ({
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
      d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4h-9c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h7c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1h-2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgFormatPaint;
