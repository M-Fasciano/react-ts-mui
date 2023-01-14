import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTextRotationAngledown = ({
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
      d="M15 20.5v-2.54c0-.45-.54-.67-.85-.35l-.56.56L5.1 9.68a.996.996 0 1 0-1.41 1.41l8.49 8.49-.56.56c-.32.32-.1.86.34.86h2.54c.28 0 .5-.23.5-.5ZM11.25 8.48l3.54 3.54-.67 1.6c-.15.36-.07.77.21 1.05.49.49 1.31.32 1.57-.32l3.61-9.09c.17-.42.07-.91-.25-1.23-.32-.32-.8-.42-1.23-.25l-9.1 3.6a.957.957 0 0 0-.32 1.57c.27.27.68.35 1.04.2l1.6-.67Zm6.59-3.05-2.23 4.87-2.64-2.64 4.87-2.23Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgTextRotationAngledown;