import * as React from "react";
import { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPhotoAlbum = ({
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
      d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM6 4h5v8l-2.5-1.5L6 12V4Zm.63 14.19 1.99-2.56a.5.5 0 0 1 .78-.01l1.74 2.1 2.6-3.34c.2-.26.6-.26.79.01l2.87 3.82a.5.5 0 0 1-.4.8H7.02c-.41-.01-.65-.49-.39-.82Z"
      fill="#000"
      fillOpacity={0.54}
    />
  </svg>
);
export default SvgPhotoAlbum;
