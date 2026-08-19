import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../constants';

export const lightTheme = {
  mode: 'light',

  colors: {
    primary: COLORS.primary,
    primaryDark: COLORS.primaryDark,
    secondary: COLORS.secondary,

    background: COLORS.gray50,
    surface: COLORS.white,
    card: COLORS.white,

    text: COLORS.gray900,
    textSecondary: COLORS.gray500,

    border: COLORS.gray200,

    success: COLORS.success,
    warning: COLORS.warning,
    error: COLORS.error,
    info: COLORS.info,

    disabled: COLORS.gray300,
  },

  spacing: SPACING,
  borderRadius: BORDER_RADIUS,
  typography: TYPOGRAPHY,
};
