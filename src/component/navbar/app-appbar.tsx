import * as React from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import AppBar from './appbar'
import { Toolbar } from 'component/toolbar'

const rightLink = {
  fontSize: 12,
  color: 'common.white',
  ml: 3,
}

function AppNavBar() {
  return (
    <div>
      <AppBar position='fixed' sx={{ height: '50px' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box>
            <img src='' alt='logo' />
            <Link
              variant='h6'
              underline='none'
              color='inherit'
              // href='/premium-themes/onepirate/'
              sx={{ fontSize: 14 }}
            >
              The Code Coach Projct
            </Link>
          </Box>

          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color='inherit'
              variant='h6'
              underline='none'
              href='/premium-themes/onepirate/sign-in/'
              sx={rightLink}
            >
              {'Sign In'}
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
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  )
}

export default AppNavBar
