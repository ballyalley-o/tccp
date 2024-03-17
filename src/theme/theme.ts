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
      dark: '#1e1e1f',
    },
    secondary: {
      light: '#fff5f8',
      main: '#FFD500',
      dark: '#e62958',
    },
    warning: {
      light: '#fff3e0',
      main: '#ffc071',
      dark: '#ffb25e',
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
      primary: '#172b4d',
      secondary: '#6b778c',
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
})

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightRegular,
  fontFamily: 'Poppins, sans-serif',
}

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: '#f4f6f2',
      placeholder: grey[200],
      light: '#f5f5f5',
      main: '#d4d3d3',
      dark: '#D9D9D9',
    },
    common: {
      light: '#D3D3D3',
      main: '#D9D9D9',
      dark: '#1e1e1f',
      black: '#000000',
      white: '#FFFFFF',
    },
    mode: 'light',
    backgroundImage: ASSET.PATTERN_BG,
  },
  shape: {
    borderRadius: 2,
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
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
