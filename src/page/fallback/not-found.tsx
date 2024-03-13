import { Fragment } from 'react'
import { Box, Typography } from '@mui/material'

const NotFound = () => {
  return (
    // create a mui NotFound Fallback page make sure we are using MUI
    <Fragment>
      <Box
        height='100vh'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        alignItems='center'
      >
        <Typography
          variant='h1'
          fontWeight={700}
          align='center'
          color='grey.400'
        >
          404
        </Typography>
        <Typography variant='h3' align='center' color='grey.400'>
          Page Not Found
        </Typography>
      </Box>
    </Fragment>
  )
}

export default NotFound
