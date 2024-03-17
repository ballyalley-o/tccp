import { ChangeEvent, useState } from 'react'
import { m } from 'framer-motion'
import { Box, Grid, Divider, Container, Tab, Tabs } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import { ASSET } from 'config'
import { Button, Typography } from 'component'
import BootcampTile from './dashboard-bootcamp-tile'

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

function DashboardBootcampRundown() {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: any) => {
    setValue(newValue)
  }

  return (
    <Box
      component='section'
      sx={{
        display: 'center',
      }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Grid container sx={{ mb: 5 }}>
          <Grid item alignItems='flex-start'>
            <Typography variant='h3' marked='left' component='h2' fontWeight='medium'>
              New Bootcamps
            </Typography>
          </Grid>
          <Box
            sx={{
              display: 'flex-start',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              mt: 2,
            }}
          >
            <Divider orientation='horizontal' flexItem sx={{ width: 1120 }} />
          </Box>
          <Tabs value={value} onChange={handleChange} aria-label='tabs'>
            <Tab label='AI & Digital Transformation' />
            <Tab label='Sustainability' />
            <Tab label='Leadership & Interpersonal Skills' />
            <Tab label='Business Management & Strategy' />
          </Tabs>
        </Grid>

        <m.div>
          <Grid container>
            <Grid item xs={12} md={4} lg={3}>
              <BootcampTile
                title='Python'
                institution='Learn Python from scratch'
                imageUrl='https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                badge='https://m.media-amazon.com/images/I/61fLmo3aOHL.jpg'
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <BootcampTile
                title='Python'
                institution='Learn Python from scratch'
                imageUrl='https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                badge='https://m.media-amazon.com/images/I/61fLmo3aOHL.jpg'
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <BootcampTile
                title='C#'
                institution='Learn Python from scratch'
                imageUrl='https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                badge='https://m.media-amazon.com/images/I/61fLmo3aOHL.jpg'
              />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <BootcampTile
                title='Reason'
                institution='Learn Python from scratch'
                imageUrl='https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                badge='https://m.media-amazon.com/images/I/61fLmo3aOHL.jpg'
                chips={['Reason', 'OCaml']}
              />
            </Grid>
          </Grid>
          <Box
            component='img'
            src={ASSET.LINE_BG}
            alt=' lines'
            sx={{
              pointerEvents: 'none',
              position: 'absolute',
              top: -190,
              opacity: 0.9,
              zIndex: -3,
            }}
          />
        </m.div>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button color='secondary' size='small' variant='contained' component='a' href='/premium-themes/onepirate/sign-up/' sx={{ mt: 8 }}>
            Start your Application
          </Button>
        </Box>
      </Container>
    </Box>
  )
}

export default DashboardBootcampRundown
