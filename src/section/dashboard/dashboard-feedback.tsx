import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { Typography } from 'component/typography'

function DashboardFeedbackSection() {
  return (
    <Container
      component='section'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        my: 9,
      }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 1,
          px: 2,
        }}
      >
        <Typography variant='h5' component='span'>
          See Feedback from our alumni
        </Typography>
      </Button>
    </Container>
  )
}

export default DashboardFeedbackSection
