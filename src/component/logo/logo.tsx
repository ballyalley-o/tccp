import { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Box, Link } from '@mui/material'

const Logo = forwardRef(
  (
    {
      width = 40,
      disabledLink = false,
      sx,
      src = '/asset/logo.png',
      ...other
    }: tccp.LogoProps,
    ref
  ) => {
    // Uncomment the lines below when you're ready to use these variables.
    // const theme = useTheme();
    // const PRIMARY_LIGHT = theme.palette.primary.light;
    // const PRIMARY_MAIN = theme.palette.primary.main;
    // const PRIMARY_DARK = theme.palette.primary.dark;

    // OR using local (public folder)
    // -------------------------------------------------------
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
