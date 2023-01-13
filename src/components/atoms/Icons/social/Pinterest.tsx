import * as React from 'react'
import { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgPinterest = ({
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
    <g clipPath="url(#pinterest_svg__a)">
      <mask
        id="pinterest_svg__b"
        style={{
          maskType: 'alpha',
        }}
        maskUnits="userSpaceOnUse"
        x={6}
        y={4}
        width={13}
        height={16}
      >
        <path d="M6 4h12.575v16H6V4Z" fill="currentColor" />
      </mask>
      <g mask="url(#pinterest_svg__b)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.653 4C10.107 4 8.54 5.043 7.678 5.918 6.611 6.997 6 8.428 6 9.848c0 1.78.745 3.148 1.992 3.656a.656.656 0 0 0 .251.051c.263 0 .472-.171.544-.448.042-.158.14-.549.182-.72.091-.334.017-.496-.18-.729-.362-.427-.529-.932-.529-1.588 0-1.952 1.453-4.026 4.146-4.026 2.137 0 3.464 1.214 3.464 3.17 0 1.233-.265 2.376-.748 3.217-.336.584-.925 1.281-1.83 1.281-.393 0-.745-.16-.966-.442-.21-.264-.279-.606-.194-.964.095-.403.225-.824.35-1.23.23-.742.447-1.444.447-2.003 0-.958-.589-1.601-1.464-1.601-1.114 0-1.985 1.13-1.985 2.573 0 .709.187 1.237.273 1.44L8.62 16.278c-.09.388-.642 3.459.27 3.704.682.184 1.36-.834 2.031-3.053.227-.877.394-1.528.502-1.954.494.476 1.29.799 2.064.799 1.46 0 2.773-.657 3.698-1.85.896-1.158 1.39-2.77 1.39-4.54 0-1.384-.596-2.749-1.631-3.744C15.843 4.582 14.318 4 12.653 4Z"
          fill="currentColor"
        />
      </g>
    </g>
    <defs>
      <clipPath id="pinterest_svg__a">
        <path fill="#fff" transform="translate(6 4)" d="M0 0h12.8v16H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgPinterest
