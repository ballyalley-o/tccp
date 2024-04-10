import { useTheme } from '@mui/material/styles'
import { GlobalStyles } from '@mui/material'
import { KEY } from 'constant'

export default function StyledNotistack() {
  const theme = useTheme()

  const isLight = theme.palette.mode === KEY.LIGHT

  const inputGlobalStyles = (
    <GlobalStyles
      styles={{
        '#root': {
          '.SnackbarContent-root': {
            width: '100%',
            padding: theme.spacing(1),
            margin: theme.spacing(0.25, 0),
            borderRadius: theme.shape.borderRadius,
            color: isLight ? theme.palette.common.white : theme.palette.grey[800],
            backgroundColor: isLight ? theme.palette.grey[900] : theme.palette.common.white,
            '&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantWarning, &.SnackbarItem-variantInfo': {
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.paper
            },
            [theme.breakpoints.up('md')]: {
              minWidth: 240
            }
          },
          '.SnackbarItem-message': {
            padding: '0 !important',
            fontWeight: theme.typography.fontWeightMedium
          },
          '.SnackbarItem-action': {
            marginRight: 0,
            color: theme.palette.action.active,

            '& svg': {
              width: 20,
              height: 20
            }
          }
        }
      }}
    />
  )

  return inputGlobalStyles
}
