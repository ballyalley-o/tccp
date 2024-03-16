import { forwardRef, FC } from 'react'
import { Icon, IconifyIcon } from '@iconify/react'
import { Box } from '@mui/material'

interface IconifyProps {
  icon: string | IconifyIcon
  width?: number
  sx?: any
  [key: string]: any
}

const Iconify: FC<IconifyProps> = forwardRef(
  ({ icon, width = 20, sx, ...other }, ref) => (
    <Box
      ref={ref}
      component={Icon}
      icon={icon}
      sx={{ width, height: width, ...sx }}
      {...other}
    />
  )
)

export default Iconify
