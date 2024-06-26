import { createTheme } from '@mui/material/styles'
import { blue, green, grey, red } from '@mui/material/colors'
import { Theme } from '@mui/material/styles'
import ComponentOverride from './override'
import { ASSET } from 'config'
import { KEY } from 'constant'

export const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error']

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#D3D3D3',
      main: '#000009',
      dark: '#1E1E1f'
    },
    secondary: {
      light: '#FFF5F8',
      main: '#FFD500',
      dark: '#E62958'
    },
    warning: {
      light: '#FFF3E0',
      main: '#FFC071',
      dark: '#FFB25E'
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700]
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700]
    },
    text: {
      primary: '#172B4D',
      secondary: '#6B778C'
    }
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400
  },
  shape: {
    borderRadius: 2
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none'
          }
        }
      }
    }
  }
})

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightRegular,
  fontFamily: 'Abel, Source Sans Pro, sans-serif'
}

const BRAND = {
  primary: '#000009',
  secondary: '#FFD500',
  warning: '#FFC071',
  error: red[500],
  success: green[500]
}

export const GREY = {
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

export const COMMON = {
  light: '#F2EED8',
  main: '#D9D9D9',
  yellow: '#FFD500',
  blue: blue[500],
  red: red[500],
  green: green[500],
  dark: '#1E1E1F',
  grey: GREY,
  black: '#000000',
  white: '#F2EED8'
}

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: '#F4F6F2',
      placeholder: grey[200],
      light: '#F2EED8',
      main: '#D4D3D3',
      dark: '#D9D9D9'
    },
    common: COMMON,
    brand: BRAND,
    mode: KEY.LIGHT,
    backgroundImage: ASSET.PATTERN_BG
  },
  shape: {
    borderRadius: 2
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h0: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 80
    },
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18
    },
    h7: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 15
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18
    },
    overline0: {
      ...rawTheme.typography.overline,
      fontSize: 10,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    overline: {
      ...rawTheme.typography.overline,
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    overline1: {
      ...rawTheme.typography.overline,
      fontSize: 14,
      textTransform: 'uppercase'
    },
    overline2: {
      ...rawTheme.typography.overline,
      fontSize: 16,
      textTransform: 'uppercase'
    },
    body0: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 20,
      textTransform: 'uppercase'
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14
    }
  }
}

ComponentOverride(theme as ThemeType)

export type ThemeType = typeof theme & Theme

export default theme
