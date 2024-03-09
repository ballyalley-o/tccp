import { Theme as MuiTheme } from '@mui/material/styles'

function Card(theme: MuiTheme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          borderRadius: Number(theme.shape.borderRadius) * 2,
          zIndex: 0,
          boxShadow: 'none',
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: {
          variant: 'body2',
          marginTop: theme.spacing(0.5),
        },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
          ShadowRoot: {
            boxShadow: '0 0 0 0',
          },
        },
      },
    },
  }
}

export default Card
