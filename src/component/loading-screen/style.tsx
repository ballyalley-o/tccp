import { m } from 'framer-motion'
import { styled } from '@mui/material/styles'
import { Box } from '@mui/material'

export const SBox = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white
}))

export const SContainerBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '300px',
  height: '300px'
}))

export const SRoot = styled(m.div)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background.default
}))
