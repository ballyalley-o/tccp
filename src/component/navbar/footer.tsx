import { m } from 'framer-motion'
import { Fragment } from 'react'
import { Grid, Link, Box, Container } from '@mui/material'
import { Typography } from 'component/typography'
import { TextField } from 'component/textfield'
import { GLOBAL, ASSET } from 'config'
import { SOCIAL, LANG } from 'constant'

function Copyright() {
  return (
    <Box display='flex' justifyContent='center' gap={2}>
      <Link
        color='grey.500'
        href='https://thecodecoachprojct.com'
        sx={{ textDecoration: 'none' }}
      >
        {'© '} {GLOBAL.APP_WEBSITE}
      </Link>
      {new Date().getFullYear()}
    </Box>
  )
}

const iconStyle = {
  width: 36,
  height: 36,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'common.black',
  color: 'common.white',
  cursor: 'pointer',
  mr: 1,
  '&:hover': {
    // reduce size when hovered
    transform: 'scale(0.9)',
    animation: 'ease-in-out',
    opacity: 0.6,
  },
}

function AppFooter() {
  return (
    <Fragment>
      <Typography
        component='footer'
        sx={{ display: 'flex', bgcolor: 'common.black', color: 'common.white' }}
      >
        <Container sx={{ my: 8, display: 'flex' }}>
          <Grid container spacing={5}>
            <Grid item xs={6} sm={4} md={3}>
              <Grid
                container
                direction='column'
                justifyContent='flex-end'
                spacing={2}
                sx={{ height: 120 }}
              >
                <Grid item sx={{ display: 'flex' }}>
                  {SOCIAL.map((social) => (
                    <Box
                      component='a'
                      href={social.href}
                      sx={iconStyle}
                      key={social.href}
                    >
                      <m.img {...social.icon} />
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={4} md={2}>
              <Typography
                variant='h6'
                marked='left'
                gutterBottom
                sx={{ color: 'secondary.main' }}
              >
                Legal
              </Typography>
              <Box component='ul' sx={{ m: 0, listStyle: 'none', p: 0 }}>
                <Box component='li' sx={{ py: 0.5 }}>
                  <Link
                    href='/premium-themes/onepirate/terms/'
                    color='grey.500'
                    sx={{
                      textDecoration: 'none',
                      '&:hover': { opacity: 0.5, translate: '0.5s' },
                    }}
                  >
                    Terms
                  </Link>
                </Box>
                <Box component='li' sx={{ py: 0.5 }}>
                  <Link
                    href='/premium-themes/onepirate/privacy/'
                    color='grey.500'
                    sx={{
                      textDecoration: 'none',
                      '&:hover': { opacity: 0.5, translate: '0.5s' },
                    }}
                  >
                    Privacy
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6} sm={8} md={4}>
              <Typography
                variant='h6'
                marked='left'
                gutterBottom
                sx={{ color: 'secondary.main' }}
              >
                Language
              </Typography>
              <TextField
                select
                size='small'
                variant='filled'
                SelectProps={{
                  native: true,
                }}
                sx={{
                  mt: 1,
                  width: 150,
                  color: 'common.white',
                  '&:before': {
                    bgcolor: 'secondary.main',
                    borderColor: 'common.white',
                    color: 'common.white',
                  },
                  '&:after': {
                    bgcolor: 'secondary.main',
                    color: 'common.white',
                  },
                }}
              >
                {LANG.map((language) => (
                  <option value={language.code} key={language.code}>
                    {language.name}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Container>
      </Typography>
      <Grid
        container
        bgcolor='common.black'
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'common.white',
          py: 2,
          pb: 10,
        }}
      >
        <Grid item lg={12}>
          <Copyright />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default AppFooter
