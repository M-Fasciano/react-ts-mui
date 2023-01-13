import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTwitter = ({
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
    <g clipPath="url(#twitter_svg__a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.8 6.68c-.616.28-1.288.448-1.96.56.728-.448 1.288-1.12 1.512-1.96-.672.392-1.456.672-2.184.84C17.552 5.392 16.6 5 15.648 5c-1.904 0-3.472 1.568-3.472 3.528 0 .28.056.56.112.784C9.432 9.2 6.856 7.8 5.176 5.672a4.04 4.04 0 0 0-.448 1.792c0 1.176.56 2.296 1.512 2.968-.56 0-1.064-.168-1.568-.448v.056c0 1.736 1.176 3.136 2.744 3.472-.28.056-.616.112-.896.112-.224 0-.448 0-.672-.056a3.554 3.554 0 0 0 3.248 2.464c-1.232.952-2.744 1.512-4.256 1.512-.28 0-.56 0-.84-.056C5.568 18.44 7.416 19 9.264 19c6.328 0 9.8-5.376 9.8-10.08v-.448c.672-.504 1.288-1.12 1.736-1.792Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="twitter_svg__a">
        <path fill="#fff" transform="translate(4 5)" d="M0 0h16.8v14H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgTwitter
