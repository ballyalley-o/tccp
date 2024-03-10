import MuiToolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'
import { Drawer, ListItem } from '@mui/material'

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

// @dashboard -- drawer

export const SDrawer = styled(Drawer)(({ theme }) => ({
  marginTop: '64px',
  zIndex: 1,
  color: theme.palette.common.black,
  paddingTop: 5,
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.grey[400],
  },
}))

export const SListItem = styled(ListItem)(({ theme }) => ({
  paddingTop: 0.2,
  paddingBottom: 0.2,
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
    cursor: 'pointer',
    animation: '0.5s',
    ease: 'ease-in-out',
  },
}))
