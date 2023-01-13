import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgTiktok = ({
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
      d="M15.192 4.609 14.806 4H12.47v5.482l-.008 5.354c.004.04.008.084.008.124a2.435 2.435 0 1 1-2.436-2.435c.279 0 .55.052.8.14V9.99a4.786 4.786 0 0 0-.8-.068A5.048 5.048 0 0 0 5 14.963 5.043 5.043 0 0 0 10.038 20a5.043 5.043 0 0 0 5.038-5.036v-6.37c1.007 1.007 2.309 1.99 3.75 2.304V8.165c-1.565-.692-3.12-2.737-3.634-3.556Z"
      fill="currentColor"
    />
  </svg>
)
export default SvgTiktok
