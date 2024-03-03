import { Fragment } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Typography, AppNavBar, AppFooter } from 'component'
import withRoot from 'withroot'

function Privacy() {
  return (
    <Fragment>
      <AppNavBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant='h3' gutterBottom marked='center' align='center'>
            Privacy
          </Typography>
        </Box>
      </Container>
      <AppFooter />
    </Fragment>
  )
}

export default withRoot(Privacy)
