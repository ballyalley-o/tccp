import { Theme, alpha } from '@mui/material'

const COLORS = ['primary', 'secondary', 'info', 'success', 'warning', 'error']

export default function Progress(theme: Theme) {
  const rootStyle = (ownerState: any) => {
    const bufferVariant = ownerState.variant === 'buffer'

    const defaultStyle = {
      borderRadius: 4,
      '& .MuiLinearProgress-bar': {
        borderRadius: 4,
      },
      ...(bufferVariant && {
        backgroundColor: 'transparent',
      }),
    }

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        backgroundColor: alpha(theme.palette[color].main, 0.24),
      }),
    }))

    return [...colorStyle, defaultStyle]
  }

  return {
    MuiLinearProgress: {
      styleOverrides: {
        root: ({ ownerState }: any) => rootStyle(ownerState),
      },
    },
  }
}
