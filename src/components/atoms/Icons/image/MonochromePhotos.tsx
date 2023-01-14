import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgMonochromePhotos = ({
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
      d="M20 5h-3.2l-1.2-1.34c-.38-.42-.92-.66-1.49-.66H9.89c-.57 0-1.11.24-1.49.66L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2Zm0 13c0 .55-.45 1-1 1h-7v-1c-2.8 0-5-2.2-5-5s2.2-5 5-5V7h7c.55 0 1 .45 1 1v10Zm-3-5c0-2.8-2.2-5-5-5v1.8c1.8 0 3.2 1.4 3.2 3.2 0 1.8-1.4 3.2-3.2 3.2V18c2.8 0 5-2.2 5-5Zm-8.2 0c0 1.8 1.4 3.2 3.2 3.2V9.8c-1.8 0-3.2 1.4-3.2 3.2Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgMonochromePhotos;