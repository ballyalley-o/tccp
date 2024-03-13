import { Grid, Typography } from '@mui/material'
import { GLOBAL } from 'config'

const FallbackBrand = () => {
  return (
    <Grid container mt={2} flexDirection='column' alignContent='center'>
      <Grid item>
        <Typography
          variant='caption'
          sx={{
            color: 'grey.400',
            textAlign: 'center',
          }}
        >
          {GLOBAL.APP_NAME.toLowerCase()} © {new Date().getFullYear()}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default FallbackBrand
