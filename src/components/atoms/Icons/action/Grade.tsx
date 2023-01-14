import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgGrade = ({
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
      d="m12 17.27 5.17 3.12c.38.23.85-.11.75-.54l-1.37-5.88 4.56-3.95c.33-.29.16-.84-.29-.88l-6.01-.51-2.35-5.54a.498.498 0 0 0-.92 0L9.19 8.63l-6.01.51a.5.5 0 0 0-.28.88l4.56 3.95-1.37 5.88c-.1.43.37.77.75.54L12 17.27Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgGrade;
