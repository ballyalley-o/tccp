import { styled } from '@mui/material/styles'
import { Button } from '@mui/material'

export const SRegisterButton = styled(Button)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 'bold',
  padding: '.1em 1em',
  borderRadius: 0,
  textTransform: 'none',
  border: '1px solid transparent',
  '&:hover': {
    bgcolor: theme.palette.secondary.main,
    color: theme.palette.common.black,
    border: '1px solid'
  }
}))
