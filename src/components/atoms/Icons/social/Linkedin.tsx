import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLinkedin = ({
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
    <g clipPath="url(#linkedin_svg__a)">
      <path
        d="M19.7 19h-3.21v-5.123c0-1.286-.464-2.165-1.626-2.165-.887 0-1.414.592-1.647 1.164-.084.205-.106.489-.106.776V19H9.9s.043-8.677 0-9.575h3.21v1.357l-.02.03h.02v-.03c.428-.651 1.188-1.582 2.894-1.582 2.113 0 3.696 1.369 3.696 4.31V19ZM6.76 5C5.698 5 5 5.756 5 6.75c0 .972.676 1.75 1.72 1.75h.02c1.085 0 1.76-.778 1.76-1.75C8.479 5.756 7.825 5 6.76 5ZM5 19h3.5V9.9H5V19Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="linkedin_svg__a">
        <path fill="#fff" transform="translate(5 5)" d="M0 0h14.7v14H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgLinkedin
