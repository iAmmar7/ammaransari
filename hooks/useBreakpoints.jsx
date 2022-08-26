import useDimensions from './useDimensions';
import { THEME_BREAKPOINTS } from '../lib/constants';

function useBreakpoints() {
  const { width } = useDimensions();

  return {
    sm: width && width <= THEME_BREAKPOINTS.sm,
    md: width && width > THEME_BREAKPOINTS.sm && width <= THEME_BREAKPOINTS.md,
    lg: width && width > THEME_BREAKPOINTS.md && width <= THEME_BREAKPOINTS.lg,
    xl: width && width > THEME_BREAKPOINTS.xl && width <= THEME_BREAKPOINTS.xl,
    '2xl': width && width > THEME_BREAKPOINTS.xl && width < THEME_BREAKPOINTS['2xl'],
    '3xl': width && width > THEME_BREAKPOINTS.xl,
  };
}

export default useBreakpoints;
