import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSettingsEthernet = ({
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
      d="M7 6.12a1 1 0 0 0-1.41.13l-4.24 5.11c-.31.37-.31.91 0 1.28l4.24 5.11a1 1 0 0 0 1.41.13 1 1 0 0 0 .13-1.41L3.42 12l3.71-4.47A1 1 0 0 0 7 6.12ZM7 13h2v-2H7v2Zm10-2h-2v2h2v-2Zm-6 2h2v-2h-2v2Zm6-6.88a1 1 0 0 0-.13 1.41L20.58 12l-3.71 4.47c-.35.43-.29 1.06.13 1.41a1 1 0 0 0 1.41-.13l4.24-5.11c.31-.37.31-.91 0-1.28l-4.24-5.11A1.01 1.01 0 0 0 17 6.12Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgSettingsEthernet;
