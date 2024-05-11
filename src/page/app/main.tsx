import { FC, ReactNode } from 'react'
import { Box } from '@mui/material'
import { HEADER, SPACING } from 'config/layout'

interface MainProps {
  children: ReactNode
  isDesktop: boolean
}

const Main: FC<MainProps> = ({ children, isDesktop }) => {
  return (
    <Box
      component='main'
      sx={{
        pt: `${HEADER.H_MOBILE + SPACING.SM}px`,
        pb: `${HEADER.H_MOBILE + SPACING.SM}px`,
        ...(isDesktop && {
          // px: 2,
          pb: `${HEADER.H_DASHBOARD_DESKTOP + SPACING.SM}px`
        })
      }}>
      {children}
    </Box>
  )
}

export default Main
