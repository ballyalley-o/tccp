import { Theme, alpha } from '@mui/material/styles'
import { CloseIcon } from './custom-icons'
import { COLORS } from 'theme'

export default function Chip(theme: Theme) {
  const isLight = theme.palette.mode === 'light'

  const rootStyle = (ownerState: any) => {
    const defaultColor = ownerState.color === 'default'
    const filledVariant = ownerState.variant === 'filled'
    const outlinedVariant = ownerState.variant === 'outlined'
    const softVariant = ownerState.variant === 'soft'

    const defaultStyle = {
      ...(defaultColor && {
        '& .MuiChip-avatar': {
          color: theme.palette.text[isLight ? 'secondary' : 'primary'],
          backgroundColor: alpha(theme.palette.grey[500], 0.48),
        },
        // OUTLINED
        ...(outlinedVariant && {
          border: `solid 1px ${alpha(theme.palette.grey[500], 0.32)}`,
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette.text.primary,
          backgroundColor: alpha(theme.palette.grey[500], 0.16),
          '&:hover': {
            backgroundColor: alpha(theme.palette.grey[500], 0.32),
          },
        }),
      }),
    }

    const colorStyle = COLORS.map((color) => ({
      ...(ownerState.color === color && {
        '& .MuiChip-avatar': {
          color: theme.palette[color].light,
          backgroundColor: theme.palette[color].dark,
        },
        // FILLED
        ...(filledVariant && {
          '& .MuiChip-deleteIcon': {
            color: alpha(theme.palette[color].dark, 0.56),
            '&:hover': {
              color: theme.palette[color].dark,
            },
          },
        }),
        // SOFT
        ...(softVariant && {
          color: theme.palette[color][isLight ? 'dark' : 'light'],
          backgroundColor: alpha(theme.palette[color].main, 0.16),
          '&:hover': {
            backgroundColor: alpha(theme.palette[color].main, 0.32),
          },
          '& .MuiChip-deleteIcon': {
            color: alpha(
              theme.palette[color][isLight ? 'dark' : 'light'],
              0.48
            ),
            '&:hover': {
              color: theme.palette[color].dark,
            },
          },
        }),
      }),
    }))

    return [...colorStyle, defaultStyle]
  }

  return {
    MuiChip: {
      defaultProps: {
        deleteIcon: <CloseIcon />,
      },

      styleOverrides: {
        root: ({ ownerState }: any) => rootStyle(ownerState),
      },
    },
  }
}
