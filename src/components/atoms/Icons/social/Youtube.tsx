import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgYoutube = ({
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
    <g clipPath="url(#youtube_svg__a)" fillRule="evenodd" clipRule="evenodd">
      <path
        d="M4.864 6.35A2.215 2.215 0 0 0 3.35 7.874C3 9.22 3 12.006 3 12.006s0 2.796.35 4.12c.2.731.783 1.313 1.514 1.515C6.22 18 11.57 18 11.57 18s5.37 0 6.714-.35a2.13 2.13 0 0 0 1.504-1.515c.36-1.334.36-4.12.36-4.12s.011-2.796-.36-4.141a2.118 2.118 0 0 0-1.504-1.504C16.938 6 11.57 6 11.57 6s-5.36 0-6.705.35Z"
        fill="currentColor"
      />
      <path d="m9.863 9.431 4.459 2.574-4.459 2.564V9.43Z" fill="#F2F3F5" />
    </g>
    <defs>
      <clipPath id="youtube_svg__a">
        <path fill="#fff" transform="translate(3 6)" d="M0 0h17.4v12H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgYoutube
