import { Drawer, ListItem, Box, Toolbar, Card, CardHeader } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { styled } from '@mui/material/styles'
import { APP_NAVBAR } from 'config'

export const GSLoadingButton = styled(LoadingButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.common.white,
  '&:hover': { backgroundColor: theme.palette.secondary.main }
}))

export const SToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  minHeight: APP_NAVBAR.HEIGHT,
  padding: theme.spacing(0, 1),
  [theme.breakpoints.up('sm')]: {
    minHeight: APP_NAVBAR.HEIGHT,
    padding: theme.spacing(0, 1)
  },
  [theme.breakpoints.up('md')]: {
    minHeight: APP_NAVBAR.HEIGHT,
    padding: theme.spacing(0, 5)
  }
}))

// @bootcamp -- card
export const SBadgeHeader = styled(CardHeader)({
  position: 'relative'
})

export const SCard = styled(Card)(({ theme }) => ({
  width: '250px',
  boxShadow: 'none'
}))

export const SScrollBox = styled(Box)(({ theme }) => ({
  overflowX: 'auto',
  display: 'flex',
  marginRight: theme.spacing(2),
  flexDirection: 'row',
  flexWrap: 'nowrap',
  '&::-webkit-scrollbar': {
    display: 'none'
  }
}))

// @dashboard -- drawer
export const SDrawer = styled(Drawer)(({ theme }) => ({
  marginTop: '64px',
  zIndex: 1,
  color: theme.palette.common.black,
  paddingTop: 5,
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.grey[400]
  }
}))

export const SListItem = styled(ListItem)(({ theme }) => ({
  paddingTop: 0.2,
  paddingBottom: 0.2,
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
    cursor: 'pointer',
    animation: '0.5s',
    ease: 'ease-in-out'
  }
}))

export const SBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '14%',
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
  transition: 'all 0.5s ease'
}))

// @fallback -- page
export const FullBox = {
  maxWidth: 'sm' as const,
  sx: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export const FallbackTypographyProps = {
  variant: 'h3' as const,
  align: 'center' as const,
  color: 'grey.400' as const
}
