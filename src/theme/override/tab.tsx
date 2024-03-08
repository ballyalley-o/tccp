import { Theme } from '@mui/material/styles'

export default function Tabs(theme: Theme) {
  return {
    MuiTabs: {
      defaultProps: {
        textColor: 'inherit',
        allowScrollButtonsMobile: true,
        variant: 'scrollable',
      },
      styleOverrides: {
        scrollButtons: {
          width: 48,
          borderRadius: '50%',
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
        iconPosition: 'start',
      },
      styleOverrides: {
        root: ({ ownerState }: any) => ({
          padding: 0,
          opacity: 1,
          minWidth: 48,
          fontWeight: theme.typography.fontWeightMedium,
          '&:not(:last-of-type)': {
            marginRight: theme.spacing(3),
            [theme.breakpoints.up('sm')]: {
              marginRight: theme.spacing(5),
            },
          },
          '&:not(.Mui-selected)': {
            color: theme.palette.text.secondary,
          },
          ...((ownerState.iconPosition === 'start' ||
            ownerState.iconPosition === 'end') && {
            minHeight: 48,
          }),
        }),
      },
    },
  }
}
