import { alpha } from '@mui/material/styles'
import { KEY } from 'constant'
import { COMMON as COMMON_COLOR } from './theme'

const BRAND = {
  background: '#63738114',
  title: '#FFF'
}

const GREY = {
  0: '#F2EED8',
  100: '#F2EED8',
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
  contrastText: '#F2EED8'
}

const ERROR = {
  lighter: '#FCEBEB',
  light: '#E45D5D',
  main: '#DD3535',
  dark: '#9B2525',
  darker: '#581515',
  contrastText: '#F2EED8'
}

const COMMON = {
  common: COMMON_COLOR,
  primary: PRIMARY,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[300], 0.16),
    disabled: alpha(GREY[300], 0.8),
    disabledBackground: alpha(GREY[400], 0.24),
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
    default: mode === 'dark' ? GREY[900] : 'common.white',
    neutral: mode === 'dark' ? alpha(GREY[500], 0.16) : alpha(GREY[500], 1)
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
