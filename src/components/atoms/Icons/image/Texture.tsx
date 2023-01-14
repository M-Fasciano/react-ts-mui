import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTexture = ({
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
      d="M19.58 3.08 3.15 19.51c.09.34.27.65.51.9.25.24.56.42.9.51L21 4.49c-.19-.69-.73-1.23-1.42-1.41ZM11.95 3l-8.88 8.88v2.83L14.78 3h-2.83ZM5.07 3c-1.1 0-2 .9-2 2v2l4-4h-2Zm14 18c.55 0 1.05-.22 1.41-.59.37-.36.59-.86.59-1.41v-2l-4 4h2Zm-9.71 0h2.83l8.88-8.88V9.29L9.36 21Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgTexture;