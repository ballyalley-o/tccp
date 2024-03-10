import { Theme } from '@mui/material/styles'

export default function Link(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        underline: 'none',
        variant: 'hover',
      },
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          textDecoration: 'none',
        },
      },
    },
  }
}
