import * as React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Paper } from 'component/paper'
import { ASSET } from 'config'

export default function AppForm(props: React.HTMLAttributes<HTMLDivElement>) {
  const { children } = props

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundImage: `url(${ASSET.LINE_BG})`,
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
        fontSize: '1.2rem',
        color: 'common.white',
      }}
    >
      <Container maxWidth='sm'>
        <Box sx={{ mt: 20, mb: 12, height: '100vh', alignContent: 'center' }}>
          <Paper
            background='dark'
            sx={{
              py: { xs: 4, md: 8 },
              px: { xs: 3, md: 6 },
              fontSize: '1.2rem',
              color: 'common.white',
            }}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}
