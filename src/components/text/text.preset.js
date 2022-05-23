import { colors } from "../../themes/colors";
import { typography } from "../../themes/typography";

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.white,
};

const BASE_BOLD = {
  fontFamily: typography.primaryBold,
  color: colors.white,
};

const BOLD = {
  fontFamily: typography.antonyMedium,
  color: colors.white,
};

export const presets = {
  default: BASE,
  bold: BOLD,

  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 11,
  },
};
