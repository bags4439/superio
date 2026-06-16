import { siteConfig } from '@/config/site.config';

/** Injects brand tokens from site.config.ts into CSS custom properties. */
export function applyTheme(): void {
  const { colors, fonts, radii, shadows, layout } = siteConfig.brand;
  const root = document.documentElement;

  const colorEntries: Record<string, string> = {
    '--color-primary': colors.primary,
    '--color-primary-dark': colors.primaryDark,
    '--color-primary-light': colors.primaryLight,
    '--color-secondary': colors.secondary,
    '--color-secondary-dark': colors.secondaryDark,
    '--color-secondary-light': colors.secondaryLight,
    '--color-dark': colors.dark,
    '--color-dark-2': colors.dark2,
    '--color-dark-3': colors.dark3,
    '--color-white': colors.white,
    '--color-off-white': colors.offWhite,
    '--color-surface': colors.surface,
    '--color-border': colors.border,
    '--color-text-primary': colors.textPrimary,
    '--color-text-secondary': colors.textSecondary,
    '--color-text-tertiary': colors.textTertiary,
    '--color-success': colors.success,
    '--color-success-bg': colors.successBg,
  };

  const radiusEntries: Record<string, string> = {
    '--radius-sm': radii.sm,
    '--radius-md': radii.md,
    '--radius-lg': radii.lg,
    '--radius-xl': radii.xl,
    '--radius-2xl': radii['2xl'],
  };

  const shadowEntries: Record<string, string> = {
    '--shadow-sm': shadows.sm,
    '--shadow-md': shadows.md,
    '--shadow-lg': shadows.lg,
    '--shadow-primary': shadows.primary,
    '--shadow-secondary': shadows.secondary,
  };

  const layoutEntries: Record<string, string> = {
    '--font-display': fonts.display,
    '--font-body': fonts.body,
    '--max-width': layout.maxWidth,
    '--section-padding-x': layout.sectionPaddingX,
    '--section-padding-y': layout.sectionPaddingY,
    '--nav-height': layout.navHeight,
  };

  for (const [key, value] of Object.entries({
    ...colorEntries,
    ...radiusEntries,
    ...shadowEntries,
    ...layoutEntries,
  })) {
    root.style.setProperty(key, value);
  }
}

export function getWhatsAppUrl(): string {
  const { whatsapp, whatsappMessage } = siteConfig.contact;
  const digits = whatsapp.replace(/\D/g, '');
  const text = encodeURIComponent(whatsappMessage);
  return `https://wa.me/${digits}?text=${text}`;
}

export function getMailtoUrl(subject = 'Project enquiry'): string {
  const { email } = siteConfig.contact;
  return `mailto:${email}?subject=${encodeURIComponent(subject)}`;
}

export function getContactValue(key: 'email' | 'whatsapp' | 'location' | 'officeHours'): string {
  return siteConfig.contact[key];
}
