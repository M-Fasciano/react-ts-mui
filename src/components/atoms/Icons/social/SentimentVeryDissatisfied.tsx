import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSentimentVeryDissatisfied = ({
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
      d="M12 13.5c-2.03 0-3.8 1.11-4.75 2.75-.19.33.06.75.44.75h8.62c.38 0 .63-.42.44-.75A5.489 5.489 0 0 0 12 13.5Zm-3.65-2.03.53-.53.53.53c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-.53-.53.53-.53c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0l-.53.53-.53-.53a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.53.53-.53.53c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0ZM11.99 2C6.47 2 2 6.47 2 12s4.47 10 9.99 10C17.51 22 22 17.53 22 12S17.52 2 11.99 2ZM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8Zm3.65-11.71-.53.53-.53-.53a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l.53.53-.53.53c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l.53-.53.53.53c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-.53-.53.53-.53c.29-.29.29-.77 0-1.06a.754.754 0 0 0-1.06 0Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgSentimentVeryDissatisfied;
