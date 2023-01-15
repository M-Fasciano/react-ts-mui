import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwoWheeler = ({
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
      d="M20 11c-.18 0-.36.03-.53.05L17.41 9H19c.55 0 1-.45 1-1v-.38c0-.74-.78-1.23-1.45-.89l-2.28 1.14L13.7 5.3A.976.976 0 0 0 13 5h-3c-.55 0-1 .45-1 1s.45 1 1 1h2.17c.27 0 .52.11.71.29L14.59 9h-3.35c-.16 0-.31.04-.45.11l-3.14 1.57a.99.99 0 0 1-1.15-.19l-1.2-1.2C5.11 9.11 4.85 9 4.59 9H1c-.55 0-1 .45-1 1s.45 1 1 1h3a4 4 0 0 0-3.89 4.94 3.96 3.96 0 0 0 2.95 2.95A4 4 0 0 0 8 15l1.41 1.41c.38.38.89.59 1.42.59h1.01c.72 0 1.38-.38 1.74-1.01l2.91-5.09 1.01 1.01a3.974 3.974 0 0 0-1.38 4.05c.34 1.44 1.51 2.61 2.95 2.94A4.01 4.01 0 0 0 24 15c0-2.21-1.79-4-4-4ZM4 17c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Zm16 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgTwoWheeler;
