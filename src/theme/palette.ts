import { alpha } from '@mui/material/styles'

// SETUP COLORS
const BRAND = {
  background: '#63738114',
  title: '#FFF',
}

const GREY = {
  0: '#FFFFFF',
  100: '#F4F4F4',
  200: '#F5F5F5',
  300: '#DFDFDF',
  400: '#DFE3E8',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
}

const PRIMARY = {
  lighter: '#0940B2',
  light: '#0940B2',
  main: '#0940B2',
  dark: '#10079F',
  darker: '#10079F',
  contrastText: '#fff',
}

const HOWICKBURNIN = {
  main: '#D1ED18',
}

const COMMON = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  background: BRAND.background,
}

export default function palette() {
  return {
    ...COMMON,
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: GREY[500],
      disabled: GREY[600],
    },
    background: {
      paper: GREY[800],
      default: GREY[900],
      neutral: alpha(GREY[500], 0.16),
    },
    action: {
      ...COMMON.action,
      active: GREY[500],
    },
  }
}
