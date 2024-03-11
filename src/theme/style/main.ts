import MuiToolbar from '@mui/material/Toolbar'
import { styled } from '@mui/material/styles'
import { Drawer, ListItem, Box } from '@mui/material'
import { APP_NAVBAR } from 'config'

export const SToolbar = styled(MuiToolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  minHeight: APP_NAVBAR.HEIGHT,
  padding: theme.spacing(0, 1),
  [theme.breakpoints.up('sm')]: {
    minHeight: APP_NAVBAR.HEIGHT,
    padding: theme.spacing(0, 1),
  },
  [theme.breakpoints.up('md')]: {
    minHeight: APP_NAVBAR.HEIGHT,
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

export const SBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '12%',
  height: 60,
  overflow: 'hidden',
  position: 'absolute',
  top: 0,
  right: -20,
  zIndex: -1,
  backgroundColor: theme.palette.secondary.main,
  backgroundPosition: 'right',
  backgroundSize: 'cover',
  transform: 'scale(1.0) skew(30deg)',
  transition: 'all 0.5s ease',
}))
