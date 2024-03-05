import * as React from 'react'
import { Box, Link } from '@mui/material'
import { m } from 'framer-motion'
import AppBar from './appbar'
import { SToolbar } from 'theme/style'
import { default as Logo } from 'component/logo'

const rightLink = {
  fontSize: 12,
  color: 'common.white',
  ml: 3,
}

function AppNavBar() {
  return (
    <m.div>
      <AppBar position='fixed'>
        <SToolbar sx={{ justifyContent: 'space-between' }}>
          <Logo width={40} />
          <Link
            variant='h6'
            underline='none'
            color='inherit'
            href='/premium-themes/onepirate/'
            sx={{ fontSize: 14 }}
          >
            The Code Coach Projct
          </Link>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color='inherit'
              variant='h6'
              underline='none'
              href='/premium-themes/onepirate/sign-in/'
              sx={rightLink}
            >
              {'Log In'}
            </Link>
            <Link
              variant='h6'
              underline='none'
              href='/premium-themes/onepirate/sign-up/'
              sx={{ ...rightLink, color: 'secondary.main' }}
            >
              {'Register'}
            </Link>
          </Box>
        </SToolbar>
      </AppBar>
    </m.div>
  )
}

export default AppNavBar
