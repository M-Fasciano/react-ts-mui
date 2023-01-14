import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgEmojiSymbols = ({
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
      d="M10 5H4c-.55 0-1 .45-1 1s.45 1 1 1h2v3c0 .55.45 1 1 1s1-.45 1-1V7h2c.55 0 1-.45 1-1s-.45-1-1-1ZM10 2H4c-.55 0-1 .45-1 1s.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1ZM20.89 13.11a.996.996 0 0 0-1.41 0l-6.36 6.36a.996.996 0 1 0 1.41 1.41l6.36-6.36a.996.996 0 0 0 0-1.41ZM14.5 16a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15.5 11A2.5 2.5 0 0 0 18 8.5V4h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1v3.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5ZM10.45 18.09a.996.996 0 1 0-1.41-1.41l-.71.71-.71-.71.35-.35a2.499 2.499 0 0 0-1.77-4.27 2.499 2.499 0 0 0-1.77 4.27l.35.35-1.06 1.06c-.98.98-.98 2.56 0 3.54.5.48 1.14.72 1.78.72.64 0 1.28-.24 1.77-.73l1.06-1.06.71.71a.996.996 0 1 0 1.41-1.41l-.71-.71.71-.71Zm-4.6-3.89a.5.5 0 0 1 .35-.15.5.5 0 0 1 .35.15c.19.2.19.51 0 .71l-.35.35-.35-.36a.5.5 0 0 1-.15-.35.5.5 0 0 1 .15-.35Zm0 5.65a.5.5 0 0 1-.35.15.5.5 0 0 1-.35-.15.5.5 0 0 1-.15-.35.5.5 0 0 1 .15-.35l1.06-1.06.71.71-1.07 1.05Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgEmojiSymbols;