import { alpha, Theme, Palette } from '@mui/material/styles'

const COLORS: (keyof Palette)[] = [
  'primary',
  'secondary',
  'info',
  'success',
  'warning',
  'error',
]

type CustomColor = {
  light: string
  dark: string
  main: string
}

declare module '@mui/material/styles' {
  interface Palette {
    [color: string]: CustomColor
  }
}

export default function ButtonGroup(theme: Theme) {
  const rootStyle = (ownerState: any) => {
    const inheritColor = ownerState.color === 'inherit'
    const containedVariant = ownerState.variant === 'contained'
    const outlinedVariant = ownerState.variant === 'outlined'
    const textVariant = ownerState.variant === 'text'
    const softVariant = ownerState.variant === 'soft'
    const horizontalOrientation = ownerState.orientation === 'horizontal'
    const verticalOrientation = ownerState.orientation === 'vertical'

    const defaultStyle = {
      '& .MuiButtonGroup-grouped': {
        '&:not(:last-of-type)': {
          ...(!outlinedVariant && {
            borderStyle: 'solid',
            ...(inheritColor && {
              borderColor: alpha(theme.palette.grey[500], 0.32),
            }),
            // HORIZONTAL
            ...(horizontalOrientation && {
              borderWidth: '0px 1px 0px 0px',
            }),
            // VERTICAL
            ...(verticalOrientation && {
              borderWidth: '0px 0px 1px 0px',
            }),
          }),
        },
      },
    }

    const colorStyle = COLORS.map((color) => ({
      '& .MuiButtonGroup-grouped': {
        '&:not(:last-of-type)': {
          ...(!outlinedVariant && {
            ...(ownerState.color === color && {
              // CONTAINED
              ...(containedVariant && {
                borderColor: alpha(theme.palette[color].dark, 0.48),
              }),
              // TEXT
              ...(textVariant && {
                borderColor: alpha(theme.palette[color].main, 0.48),
              }),
              // SOFT
              ...(softVariant && {
                borderColor: alpha(theme.palette[color].dark, 0.24),
              }),
            }),
          }),
        },
      },
    }))

    const disabledState = {
      '& .MuiButtonGroup-grouped.Mui-disabled': {
        '&:not(:last-of-type)': {
          borderColor: theme.palette.action.disabledBackground,
        },
      },
    }

    return [...colorStyle, defaultStyle, disabledState]
  }

  return {
    MuiButtonGroup: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: ({ ownerState }: any) => rootStyle(ownerState),
      },
    },
  }
}
