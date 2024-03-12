import { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Link } from '@mui/material'
import { ASSET } from 'config'

const Logo = forwardRef(
  (
    {
      width = 40,
      disabledLink = false,
      sx,
      src = ASSET.BRAND,
      ...other
    }: tccp.LogoProps,
    ref
  ) => {
    const logo = (
      <Box
        component='img'
        src={src}
        {...other}
        sx={{ width, height: 'auto', cursor: 'pointer', ...sx }}
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
  }
)

export default Logo
