import type { Config } from 'tailwindcss';
import { siteConfig } from './src/config/site.config';

const { colors, fonts, radii, shadows } = siteConfig.brand;

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: colors.primary,
          dark: colors.primaryDark,
          light: colors.primaryLight,
        },
        secondary: {
          DEFAULT: colors.secondary,
          dark: colors.secondaryDark,
          light: colors.secondaryLight,
        },
        dark: {
          DEFAULT: colors.dark,
          2: colors.dark2,
          3: colors.dark3,
        },
        surface: colors.surface,
        border: colors.border,
        'text-primary': colors.textPrimary,
        'text-secondary': colors.textSecondary,
        'text-tertiary': colors.textTertiary,
      },
      fontFamily: {
        display: [fonts.display],
        sans: [fonts.body],
      },
      borderRadius: radii,
      boxShadow: shadows,
      maxWidth: {
        site: siteConfig.brand.layout.maxWidth,
      },
    },
  },
  plugins: [],
} satisfies Config;
