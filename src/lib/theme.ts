type ThemeMode = 'light' | 'dark';

type ThemePalette = {
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  popover: string;
  popoverForeground: string;
  card: string;
  cardForeground: string;
  border: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  ring: string;
  overlay: string;
  info: string;
  warning: string;
  error: string;
  success: string;
  idea: string;
  diffRemove: string;
  diffRemoveSymbol: string;
  diffAdd: string;
  diffAddSymbol: string;
  surfaceRaised: string;
  surfaceSunken: string;
  textSecondary: string;
  shadowOverlay: string;
  heroGlow: string;
};

const sharedTokens = {
  radiusControl: '8px',
  radiusCard: '12px',
  radiusPanel: '16px',
  radiusPill: '999px',
  easeOut: 'cubic-bezier(0.23, 1, 0.32, 1)',
  easeInOut: 'cubic-bezier(0.77, 0, 0.175, 1)',
  durationFast: '150ms',
  durationStandard: '200ms',
  contentWidth: '72ch',
} as const;

export const clubiqDocsTheme = {
  light: {
    background: '#f8fafc',
    foreground: '#1f2937',
    muted: '#f4f7fb',
    mutedForeground: '#4b5563',
    popover: '#ffffff',
    popoverForeground: '#1f2937',
    card: '#ffffff',
    cardForeground: '#1f2937',
    border: '#e5e7eb',
    primary: '#dc2626',
    primaryForeground: '#ffffff',
    secondary: '#f1f5f9',
    secondaryForeground: '#1f2937',
    accent: '#fde8e7',
    accentForeground: '#991b1b',
    ring: '#dc2626',
    overlay: 'rgba(11, 14, 20, 0.16)',
    info: '#0288d1',
    warning: '#d97706',
    error: '#e53e3e',
    success: '#16a34a',
    idea: '#ea580c',
    diffRemove: 'rgba(229, 62, 62, 0.12)',
    diffRemoveSymbol: '#c62828',
    diffAdd: 'rgba(22, 163, 74, 0.12)',
    diffAddSymbol: '#15803d',
    surfaceRaised: '#ffffff',
    surfaceSunken: '#f1f5f9',
    textSecondary: '#4b5563',
    shadowOverlay: '0 12px 32px rgba(16, 24, 40, 0.12), 0 4px 8px rgba(16, 24, 40, 0.08)',
    heroGlow: 'color-mix(in oklab, #dc2626 8%, transparent)',
  },
  dark: {
    background: '#0b0e14',
    foreground: '#f3f4f6',
    muted: '#141922',
    mutedForeground: '#a3acba',
    popover: '#171b24',
    popoverForeground: '#f3f4f6',
    card: '#12151c',
    cardForeground: '#f3f4f6',
    border: '#232936',
    primary: '#ef4444',
    primaryForeground: '#ffffff',
    secondary: '#171b24',
    secondaryForeground: '#f3f4f6',
    accent: '#24151c',
    accentForeground: '#fecaca',
    ring: '#ef4444',
    overlay: 'rgba(0, 0, 0, 0.48)',
    info: '#38bdf8',
    warning: '#f59e0b',
    error: '#f87171',
    success: '#4ade80',
    idea: '#fb923c',
    diffRemove: 'rgba(248, 113, 113, 0.16)',
    diffRemoveSymbol: '#fca5a5',
    diffAdd: 'rgba(74, 222, 128, 0.14)',
    diffAddSymbol: '#86efac',
    surfaceRaised: '#171b24',
    surfaceSunken: '#0b0e14',
    textSecondary: '#a3acba',
    shadowOverlay: '0 18px 40px rgba(0, 0, 0, 0.48), 0 6px 14px rgba(0, 0, 0, 0.32)',
    heroGlow: 'color-mix(in oklab, #ef4444 10%, transparent)',
  },
} as const satisfies Record<ThemeMode, ThemePalette>;

type ThemeColorEntry = {
  media: '(prefers-color-scheme: light)' | '(prefers-color-scheme: dark)';
  color: string;
};

export const themeColorMeta: ThemeColorEntry[] = [
  {
    media: '(prefers-color-scheme: light)',
    color: clubiqDocsTheme.light.background,
  },
  {
    media: '(prefers-color-scheme: dark)',
    color: clubiqDocsTheme.dark.background,
  },
];

function toCssVariables(tokens: ThemePalette): string {
  const vars: Record<string, string> = {
    '--color-fd-background': tokens.background,
    '--color-fd-foreground': tokens.foreground,
    '--color-fd-muted': tokens.muted,
    '--color-fd-muted-foreground': tokens.mutedForeground,
    '--color-fd-popover': tokens.popover,
    '--color-fd-popover-foreground': tokens.popoverForeground,
    '--color-fd-card': tokens.card,
    '--color-fd-card-foreground': tokens.cardForeground,
    '--color-fd-border': tokens.border,
    '--color-fd-primary': tokens.primary,
    '--color-fd-primary-foreground': tokens.primaryForeground,
    '--color-fd-secondary': tokens.secondary,
    '--color-fd-secondary-foreground': tokens.secondaryForeground,
    '--color-fd-accent': tokens.accent,
    '--color-fd-accent-foreground': tokens.accentForeground,
    '--color-fd-ring': tokens.ring,
    '--color-fd-overlay': tokens.overlay,
    '--color-fd-info': tokens.info,
    '--color-fd-warning': tokens.warning,
    '--color-fd-error': tokens.error,
    '--color-fd-success': tokens.success,
    '--color-fd-idea': tokens.idea,
    '--color-fd-diff-remove': tokens.diffRemove,
    '--color-fd-diff-remove-symbol': tokens.diffRemoveSymbol,
    '--color-fd-diff-add': tokens.diffAdd,
    '--color-fd-diff-add-symbol': tokens.diffAddSymbol,
    '--clubiq-surface-raised': tokens.surfaceRaised,
    '--clubiq-surface-sunken': tokens.surfaceSunken,
    '--clubiq-text-secondary': tokens.textSecondary,
    '--clubiq-shadow-overlay': tokens.shadowOverlay,
    '--clubiq-hero-glow': tokens.heroGlow,
    '--clubiq-radius-control': sharedTokens.radiusControl,
    '--clubiq-radius-card': sharedTokens.radiusCard,
    '--clubiq-radius-panel': sharedTokens.radiusPanel,
    '--clubiq-radius-pill': sharedTokens.radiusPill,
    '--clubiq-ease-out': sharedTokens.easeOut,
    '--clubiq-ease-in-out': sharedTokens.easeInOut,
    '--clubiq-duration-fast': sharedTokens.durationFast,
    '--clubiq-duration-standard': sharedTokens.durationStandard,
    '--clubiq-content-width': sharedTokens.contentWidth,
  };

  return Object.entries(vars)
    .map(([name, value]) => `${name}:${value};`)
    .join('');
}

export function getClubIQThemeStyleText(): string {
  return [
    `:root{${toCssVariables(clubiqDocsTheme.light)}}`,
    `.dark{${toCssVariables(clubiqDocsTheme.dark)}}`,
    `.dark #nd-sidebar{--color-fd-muted:${clubiqDocsTheme.dark.secondary};--color-fd-secondary:${clubiqDocsTheme.dark.surfaceRaised};--color-fd-muted-foreground:${clubiqDocsTheme.dark.mutedForeground};}`,
  ].join('\n');
}
