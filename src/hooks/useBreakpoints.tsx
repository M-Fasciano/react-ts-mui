import { useTheme, useMediaQuery } from "@mui/material";

const useBreakpoints = () => {
  const theme = useTheme();

  return {
    isViewportWidthUnder426: useMediaQuery(theme.breakpoints.down(426)), // < 426
    isMobile: !useMediaQuery(theme.breakpoints.up("sm")), // < 768
    isTablet: useMediaQuery(theme.breakpoints.between("sm", "md")), // > 768 and < 1024
    isDesktop: useMediaQuery(theme.breakpoints.up("md")), // >= 1024
    isViewportWidthAbove1440: useMediaQuery(theme.breakpoints.up(1440)), // >= 1440
  };
};

export default useBreakpoints;
