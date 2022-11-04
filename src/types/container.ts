import { BoxProps } from '@mui/system'

export interface ContainerProps extends BoxProps {
  background?: 'light' | 'dark'
  theme?: any
}