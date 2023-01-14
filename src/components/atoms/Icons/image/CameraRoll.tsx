import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgCameraRoll = ({
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
      d="M14 5c0-1.1-.9-2-2-2h-1V2c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H4c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2h6c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-6Zm-2 13h-2v-2h2v2Zm0-9h-2V7h2v2Zm4 9h-2v-2h2v2Zm0-9h-2V7h2v2Zm4 9h-2v-2h2v2Zm0-9h-2V7h2v2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgCameraRoll;
