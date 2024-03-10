import { useState, FormEvent } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { Snackbar, Typography, TextField, Button } from 'component'
import { theme } from 'theme'

function BootcampConsult() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Container component='section' sx={{ mt: 10, display: 'flex' }}>
      <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              bgcolor: 'primary.main',
              color: 'primary.contrastText',
              py: 8,
              px: 3,
            }}
          >
            <Box
              component='form'
              onSubmit={handleSubmit}
              sx={{ maxWidth: 400 }}
            >
              <Typography
                variant='h2'
                component='h2'
                gutterBottom
                color={theme.palette.secondary.main}
              >
                Consult with the experts
              </Typography>
              <Typography variant='h5'>
                Ask for a free consultation. Our team of experts are here to
                help you.
              </Typography>
              <TextField
                noBorder
                placeholder='Your email'
                variant='standard'
                sx={{ width: '100%', mt: 3, mb: 2 }}
              />
              <Button
                type='submit'
                variant='contained'
                size='large'
                sx={{
                  width: '100%',
                  bgcolor: theme.palette.secondary.main,
                  fontSize: '1.2rem',
                  color: theme.palette.common.black,
                }}
              >
                Contact Me
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: 'block', xs: 'none' }, position: 'relative' }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: '100%',
              background:
                'url(/static/themes/onepirate/productCTAImageDots.png)',
            }}
          />
          <Box
            component='img'
            src='https://images.pexels.com/photos/8199568/pexels-photo-8199568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            alt='call to action'
            sx={{
              position: 'absolute',
              top: -28,
              left: -28,
              right: 0,
              bottom: 0,
              width: '100%',
              maxWidth: 600,
            }}
          />
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        closeFunc={handleClose}
        message='We will send you our best offers, once a week.'
      />
    </Container>
  )
}

export default BootcampConsult
