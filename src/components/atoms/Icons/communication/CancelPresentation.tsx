import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCancelPresentation = ({
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
      d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm0 15c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12Zm-5.71-9.3a.996.996 0 0 0-1.41 0L12 10.59 10.11 8.7a.996.996 0 1 0-1.41 1.41L10.59 12 8.7 13.89a.996.996 0 1 0 1.41 1.41L12 13.41l1.89 1.89a.996.996 0 1 0 1.41-1.41L13.41 12l1.89-1.89c.38-.38.38-1.02-.01-1.41Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgCancelPresentation;