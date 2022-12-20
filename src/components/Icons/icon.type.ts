import { SvgIconProps } from '@mui/material'

type IconSizeProp = {
  width?: number
  height?: number
}

export type IconNameProp = { name?: string }

export type IconFillProp = {
  primaryFill?: string
  secondaryFill?: string
  tertiaryFill?: string
}

export type CustomSVGIconProps = SvgIconProps & IconSizeProp & IconFillProp

export type WrappedSVGIconProps = CustomSVGIconProps & IconNameProp