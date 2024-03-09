import { m } from 'framer-motion'
import { Theme } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { Button, Typography } from 'component'
import CourseTile from './dashboard-course-tile'

const item: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
}

const number = {
  fontSize: 24,
  fontFamily: 'default',
  color: 'secondary.main',
  fontWeight: 'medium',
}

const image = {
  height: 55,
  my: 4,
}

function DashbordBootcampRundown() {
  return (
    <Box
      component='section'
      sx={{
        display: 'flexStart',
        bgcolor: 'secondary.light',
        overflow: 'hidden',
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component='img'
          src='/static/themes/onepirate/productCurvyLines.png'
          alt='curvy lines'
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant='h4' marked='left' component='h2'>
          New on The Code Coach
        </Typography>
        <Typography
          variant='subtitle2'
          marked='left'
          component='h2'
          sx={{ mb: 14 }}
        >
          New on The Code Coach
        </Typography>
        <m.div>
          <Grid container spacing={20}>
            <Grid item xs={12} md={4} lg={3}>
              <CourseTile
                title='Python'
                institution='Learn Python from scratch'
                imageUrl='https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                badge='https://m.media-amazon.com/images/I/61fLmo3aOHL.jpg'
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <CourseTile
                title='Python'
                institution='Learn Python from scratch'
                imageUrl='https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                badge='https://m.media-amazon.com/images/I/61fLmo3aOHL.jpg'
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <CourseTile
                title='C#'
                institution='Learn Python from scratch'
                imageUrl='https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                badge='https://m.media-amazon.com/images/I/61fLmo3aOHL.jpg'
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <CourseTile
                title='Reason'
                institution='Learn Python from scratch'
                imageUrl='https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                badge='https://m.media-amazon.com/images/I/61fLmo3aOHL.jpg'
                chips={['Reason', 'OCaml']}
              />
            </Grid>
          </Grid>
        </m.div>
        <Button
          color='secondary'
          size='large'
          variant='contained'
          component='a'
          href='/premium-themes/onepirate/sign-up/'
          sx={{ mt: 8 }}
        >
          Get started
        </Button>
      </Container>
    </Box>
  )
}

export default DashbordBootcampRundown
