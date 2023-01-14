import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgSettingsBrightness = ({
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
      d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2Zm-1 16.01H4c-.55 0-1-.45-1-1V5.99c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12.02c0 .55-.45 1-1 1ZM8.5 16h2l1.15 1.15c.2.2.51.2.71 0L13.5 16h2c.28 0 .5-.22.5-.5v-2l1.15-1.15c.2-.2.2-.51 0-.71L16 10.5v-2c0-.28-.22-.5-.5-.5h-2l-1.15-1.15c-.2-.2-.51-.2-.71 0L10.5 8h-2c-.28 0-.5.22-.5.5v2l-1.15 1.15c-.2.2-.2.51 0 .71L8 13.5v2c0 .28.22.5.5.5ZM12 9c1.66 0 3 1.34 3 3s-1.34 3-3 3V9Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgSettingsBrightness;
