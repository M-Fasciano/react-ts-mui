import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSyncProblem = ({
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
      d="M3 12c0 2.21.91 4.2 2.36 5.64l-1.51 1.51a.5.5 0 0 0 .36.85H8.5c.28 0 .5-.22.5-.5v-4.29c0-.45-.54-.67-.85-.35l-1.39 1.39C5.68 15.15 5 13.66 5 12c0-2.39 1.4-4.46 3.43-5.42.34-.16.57-.47.57-.84v-.19c0-.68-.71-1.11-1.32-.82A7.99 7.99 0 0 0 3 12Zm8 5h2v-2h-2v2Zm8.79-13H15.5c-.28 0-.5.22-.5.5v4.29c0 .45.54.67.85.35l1.39-1.39C18.32 8.85 19 10.34 19 12c0 2.39-1.4 4.46-3.43 5.42-.34.16-.57.47-.57.84v.18c0 .68.71 1.11 1.32.82A7.966 7.966 0 0 0 21 12c0-2.21-.91-4.2-2.36-5.64l1.51-1.51a.5.5 0 0 0-.36-.85ZM12 13c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1v4c0 .55.45 1 1 1Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgSyncProblem;