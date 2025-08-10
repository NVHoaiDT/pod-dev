export const LIGHT_COLORS: Record<string, string> = {
   '--color-text': '#0d0d0d',
   '--color-primary-100': '#e0e0ff',
   '--color-primary-300': '#8c8cff',
   '--color-primary-500': '#6666ff',
   '--color-primary-700': '#2a2aff',
   '--color-primary-900': '#141466',
   '--color-primary-contrast': '#ffffff',

   '--color-secondary-500': '#ff00b7',
   '--color-decorative-100': '#fff8e0',
   '--color-decorative-200': '#fff2e0',
   '--color-decorative-300': '#ffebd1',
   '--color-decorative-500': '#ffd966',
   '--color-decorative-600': '#ffcc33',
   '--color-decorative-700': '#ffbf00',
   '--color-decorative-800': '#a68500',
   '--color-decorative-900': '#806600',

   '--color-gray-0': '#ffffff',
   '--color-gray-100': '#f1f3f5',
   '--color-gray-200': '#e9ecef',
   '--color-gray-300': '#dee2e6',
   '--color-gray-400': '#ced4da',
   '--color-gray-500': '#adb5bd',
   '--color-gray-600': '#868e96',
   '--color-gray-700': '#495057',
   '--color-gray-800': '#343a40',
   '--color-gray-900': '#212529',
   '--color-gray-1000': '#000000',
};

export const DARK_COLORS: Record<string, string> = {
   '--color-text': '#ffffff',
   '--color-text-secondary': '#bfbec1',

   '--color-primary-100': '#fff2e0',
   '--color-primary-300': '#ffd966',
   '--color-primary-500': '#ffbf00',
   '--color-primary-700': '#b38c00',
   '--color-primary-900': '#806600',
   '--color-primary-contrast': '#000000',

   '--color-secondary-500': '#ff00b7',
   '--color-decorative-100': '#0a0710',
   '--color-decorative-200': '#1a1226',
   '--color-decorative-300': '#261b38',
   '--color-decorative-500': '#4c366e',
   '--color-decorative-600': '#664c99',
   '--color-decorative-700': '#8066c2',
   '--color-decorative-800': '#a88fdf',
   '--color-decorative-900': '#d1bbf6',

   '--color-gray-0': '#000000',
   '--color-gray-100': '#212529',
   '--color-gray-200': '#343a40',
   '--color-gray-300': '#495057',
   '--color-gray-400': '#868e96',
   '--color-gray-500': '#adb5bd',
   '--color-gray-600': '#ced4da',
   '--color-gray-700': '#dee2e6',
   '--color-gray-800': '#e9ecef',
   '--color-gray-900': '#f1f3f5',
   '--color-gray-1000': '#ffffff',

   '--corlor-gray-gradient':
      'linear-gradient(232deg, rgba(23, 28, 35, 0.41) 0%, rgba(19, 22, 28, 0.70) 100%)',
};

// Add in semantic / special colors
LIGHT_COLORS['--color-primary'] = LIGHT_COLORS['--color-primary-500'];
LIGHT_COLORS['--color-secondary'] =
   LIGHT_COLORS['--color-secondary-500'];

LIGHT_COLORS['--color-selection-text'] = 'black';
LIGHT_COLORS['--color-selection-background'] =
   LIGHT_COLORS['--color-decorative-700'];

LIGHT_COLORS['--color-backdrop'] =
   LIGHT_COLORS['--color-decorative-500'];

LIGHT_COLORS['--color-backdrop-highlight'] =
   LIGHT_COLORS['--color-decorative-300'];

LIGHT_COLORS['--color-page-background'] =
   LIGHT_COLORS['--color-decorative-100'];

LIGHT_COLORS['--color-page-border'] = 'transparent';
LIGHT_COLORS['--color-card-background'] =
   LIGHT_COLORS['--color-gray-0'];
LIGHT_COLORS['--color-card-border'] = 'transparent';

DARK_COLORS['--color-primary'] = DARK_COLORS['--color-primary-500'];

DARK_COLORS['--color-secondary'] =
   DARK_COLORS['--color-secondary-500'];

DARK_COLORS['--color-selection-text'] = 'white';

DARK_COLORS['--color-backdrop'] = '#15171C';

DARK_COLORS['--color-backdrop-highlight'] =
   DARK_COLORS['--color-decorative-500'];

DARK_COLORS['--color-page-background'] = 'transparent';

DARK_COLORS['--color-page-border'] = 'hsl(256deg 30% 50% / 0.2)';

DARK_COLORS['--color-card-background'] =
   DARK_COLORS['--color-backdrop'];

DARK_COLORS['--color-card-border'] = '#454545';

DARK_COLORS['color-hover-background'] =
   'linear-gradient(232deg, rgba(28, 28, 35, 0.41) 0%, rgba(19, 22, 28, 0.70) 100%)';

export const LIGHT_SHADOWS = {
   '--shadow-page': `
    0px 1px 2px hsl(50deg 60% 50% / 0.25),
    0px 3px 6px hsl(50deg 60% 50% / 0.25),
    0px 9px 18px hsl(50deg 60% 50% / 0.25),
    0px 18px 36px hsl(50deg 60% 50% / 0.25),
    0px 54px 108px hsl(50deg 60% 50% / 0.25)
  `,
   '--shadow-card': `
    0px 1px 2px hsl(50deg 20% 50% / 0.2),
    0px 2px 4px hsl(50deg 20% 50% / 0.2),
    0px 4px 8px hsl(50deg 20% 50% / 0.2),
    0px 8px 16px hsl(50deg 20% 50% / 0.2)
  `,
};
export const DARK_SHADOWS = {
   '--shadow-page': 'none',
   '--shadow-card': 'none',
};

export const FONT = {
   '--font-family': 'Manrope, sans-serif',
   '--font-secondary': 'Inter, sans-serif',
};

export const LIGHT_TOKENS = {
   ...LIGHT_COLORS,
   ...LIGHT_SHADOWS,
   ...FONT,
};

export const DARK_TOKENS = {
   ...DARK_COLORS,
   ...DARK_SHADOWS,
   ...FONT,
};
