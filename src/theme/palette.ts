import { alpha } from '@mui/material/styles'
import { KEY } from 'constant'

const BRAND = {
  background: '#63738114',
  title: '#FFF'
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
  900: '#161C24'
}

const PRIMARY = {
  lighter: '#0940B2',
  light: '#0940B2',
  main: '#0940B2',
  dark: '#10079F',
  darker: '#10079F',
  contrastText: '#FFF'
}

const COMMON = {
  common: { black: '#000', white: '#F4F6F2' },
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
    disabledOpacity: 0.48
  },
  background: BRAND.background
}

export default function palettee(mode: KEY.LIGHT | KEY.DARK = KEY.DARK) {
  const text = {
    primary: mode === KEY.DARK ? GREY[0] : GREY[900],
    secondary: GREY[500],
    disabled: GREY[600]
  }

  const background = {
    paper: mode === 'dark' ? GREY[800] : GREY[100],
    default: mode === 'dark' ? GREY[900] : '#fff',
    neutral: alpha(GREY[500], 0.16)
  }

  return {
    ...COMMON,
    mode: KEY.DARK,
    text,
    background,
    action: {
      ...COMMON.action,
      active: GREY[500]
    }
  }
}
