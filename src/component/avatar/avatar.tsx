import { FC, forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Link } from '@mui/material'
import { GLOBAL } from 'config'
import DefaultAvatar from './avatar-default'

interface AvatarProps {
  disabledLink?: boolean
  sx?: object
  src?: string
}

const Avatar: FC<AvatarProps> = forwardRef(({ disabledLink = false, sx, src = '/asset/logo.jpg', ...other }, ref) => {
  const logo = (
    <Box
      component='img'
      src={`${GLOBAL.APP_ORIGIN + src}`}
      sx={{ borderRadius: '50%', width: 40, height: 40, cursor: 'pointer', bgcolor: 'white', zIndex: 40, ...sx }}
    />
  )
  if (disabledLink) {
    return logo
  }

  return (
    <Link component={RouterLink} to='/' sx={{ display: 'contents' }}>
      {logo}
    </Link>
  )
})

export default Avatar
