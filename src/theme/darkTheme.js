import { COLORS, SPACING, BORDER_RADIUS, TYPOGRAPHY } from '../constants';

export const darkTheme = {
  mode: 'dark',

  colors: {
    primary: COLORS.primary,
    primaryDark: COLORS.primaryDark,
    secondary: COLORS.secondary,

    background: COLORS.gray900,
    surface: COLORS.gray800,
    card: COLORS.gray800,

    text: COLORS.white,
    textSecondary: COLORS.gray400,

    border: COLORS.gray700,

    success: COLORS.success,
    warning: COLORS.warning,
    error: COLORS.error,
    info: COLORS.info,

    disabled: COLORS.gray600,
  },

  spacing: SPACING,

  borderRadius: BORDER_RADIUS,

  typography: TYPOGRAPHY,
};
