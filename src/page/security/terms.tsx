/* eslint-disable react-refresh/only-export-components */
import { Fragment } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { AppNavBar, AppFooter, Typography } from 'component'
import withRoot from 'withroot'

function Terms() {
  return (
    <Fragment>
      <AppNavBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant='h3' gutterBottom marked='center' align='center'>
            Terms
          </Typography>
          {/* <Markdown>{terms}</Markdown> */}
        </Box>
      </Container>
      <AppFooter />
    </Fragment>
  )
}

export default withRoot(Terms)
