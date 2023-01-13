import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const IconWrapper = ({ children, ...props }: SvgIconProps) => {
  return <SvgIcon {...props}>{children}</SvgIcon>;
};

export default IconWrapper;
