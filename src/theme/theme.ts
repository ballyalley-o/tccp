import { createTheme } from '@mui/material/styles'
import { green, grey, red } from '@mui/material/colors'
import { Theme } from '@mui/material/styles'
import ComponentOverride from './override'
import { ASSET } from 'config'

export const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error']

const rawTheme = createTheme({
  palette: {
    primary: {
      light: '#D3D3D3',
      main: '#000009',
      dark: '#1E1E1f',
    },
    secondary: {
      light: '#FFF5F8',
      main: '#FFD500',
      dark: '#E62958',
    },
    warning: {
      light: '#FFF3E0',
      main: '#FFC071',
      dark: '#FFB25E',
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
    },
    success: {
      light: green[50],
      main: green[500],
      dark: green[700],
    },
    text: {
      primary: '#172B4D',
      secondary: '#6B778C',
    },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
  },
  shape: {
    borderRadius: 2,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },
})

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightRegular,
  fontFamily: 'Poppins, sans-serif',
}

const BRAND = {
  primary: '#000009',
  secondary: '#FFD500',
  warning: '#FFC071',
  error: red[500],
  success: green[500],
}

const COMMON = {
  light: '#D3D3D3',
  main: '#D9D9D9',
  dark: '#1E1E1F',
  black: '#000000',
  white: '#FFFFFF',
}

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: '#F4F6F2',
      placeholder: grey[200],
      light: '#F5F5F5',
      main: '#D4D3D3',
      dark: '#D9D9D9',
    },
    common: COMMON,
    brand: BRAND,
    mode: 'light',
    backgroundImage: ASSET.PATTERN_BG,
  },
  shape: {
    borderRadius: 2,
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h0: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 80,
    },
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36,
    },
    h5: {
      ...rawTheme.typography.h5,
      fontSize: 20,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18,
    },
    h7: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 15,
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16,
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14,
    },
  },
}

ComponentOverride(theme as ThemeType)

export type ThemeType = typeof theme & Theme

export default theme
