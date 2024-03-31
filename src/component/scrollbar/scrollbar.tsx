import { memo, ReactNode } from 'react'
import { Box } from '@mui/material'
import { KEY } from 'constant'
import { SRootScrollbar, SScrollbar } from './style'

interface ScrollbarProps {
  children: ReactNode
  sx?: object
}

function Scrollbar({ children, sx, ...other }: ScrollbarProps) {
  const userAgent = typeof navigator === KEY.UNDEFINED ? KEY.SSR : navigator.userAgent

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

  if (isMobile) {
    return (
      <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
        {children}
      </Box>
    )
  }

  return (
    <SRootScrollbar>
      <SScrollbar clickOnTrack={false} sx={sx} {...other}>
        {children}
      </SScrollbar>
    </SRootScrollbar>
  )
}

export default memo(Scrollbar)
