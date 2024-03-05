import { styled } from '@mui/material/styles'
import MuiToolbar from '@mui/material/Toolbar'

export const SToolbar = styled(MuiToolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  minHeight: 50,
  padding: theme.spacing(0, 1),
  [theme.breakpoints.up('sm')]: {
    minHeight: 50,
    padding: theme.spacing(0, 1),
  },
  [theme.breakpoints.up('md')]: {
    minHeight: 50,
    padding: theme.spacing(0, 5),
  },
}))
