import { Theme, styled, alpha } from '@mui/material/styles'
import { CardActionArea } from '@mui/material'
import { ButtonBaseProps } from '@mui/material/ButtonBase'
export { NAV, RADIUS } from 'config'

interface ExtendedCardActionAreaProps extends ButtonBaseProps {
  selected?: boolean
  theme: Theme
}
export const SCard = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== 'selected'
})(({ selected, theme }: ExtendedCardActionAreaProps) => ({
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.text.disabled,
  border: `solid 1px ${alpha(theme.palette.grey[800], 0.22)}`,
  ...(selected && {
    color: theme.palette.primary.main,
    // boxShadow: theme.customShadow.z12,
    borderColor: alpha(theme.palette.grey[800], 0.22)
  })
}))
