import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string
  titleId?: string
}
const SvgFacebook = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.576 20h-7.68A.875.875 0 0 1 4 19.104V4.896C4 4.384 4.384 4 4.896 4h14.208c.512 0 .896.384.896.896v14.208a.875.875 0 0 1-.896.896h-4.096v-6.208h2.048l.32-2.432h-2.368V9.824c0-.704.192-1.152 1.216-1.152h1.28V6.496c-.192 0-.96-.128-1.856-.128-1.856 0-3.136 1.152-3.136 3.2v1.792H10.4v2.432h2.112c.064 0 .064 6.208.064 6.208Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgFacebook
