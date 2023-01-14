import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmojiPeople = ({
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
      d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#000"
      fillOpacity={0.54}
    />
    <path
      d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54a5.023 5.023 0 0 1-4.92-4.15.998.998 0 0 0-.98-.85c-.61 0-1.09.54-1 1.14A7.037 7.037 0 0 0 9 8.71V21c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V10.05l3.24 3.24a.996.996 0 1 0 1.41-1.41l-3.76-3.77Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgEmojiPeople;
