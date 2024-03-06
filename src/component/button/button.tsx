import { ElementType } from 'react'
import { experimentalStyled as styled } from '@mui/material/styles'
import MuiButton, { ButtonProps } from '@mui/material/Button'

const ButtonRoot = styled(MuiButton)(({ theme, size }) => ({
  borderRadius: 0,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: theme.typography.h1.fontFamily,
  padding: theme.spacing(2, 4),
  fontSize: theme.typography.pxToRem(14),
  boxShadow: 'none',
  '&:active, &:focus': {
    boxShadow: 'none',
  },
  '&:hover': {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.secondary.main,
  },
  ...(size === 'small' && {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  }),
  ...(size === 'large' && {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  }),
}))

function Button<C extends ElementType>(
  props: ButtonProps<C, { component?: C }>
) {
  return <ButtonRoot {...props} />
}

export default Button
