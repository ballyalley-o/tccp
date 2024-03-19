import { m } from 'framer-motion'
import { Fragment } from 'react'
import { Grid, Link, Box, Container, Divider } from '@mui/material'
import { Typography } from 'component/typography'
import { TextField } from 'component/form/text-field'
import { useTheme } from '@mui/material/styles'
import { GLOBAL, ASSET } from 'config'
import { SOCIAL, LANG } from 'constant'

function Copyright() {
  return (
    <Box display='flex' justifyContent='center' gap={2} sx={{ color: 'common.black' }}>
      <Link color='common.black' href='https://thecodecoachprojct.com' sx={{ textDecoration: 'none' }}>
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
  // backgroundColor: 'common.black',
  color: 'common.black',
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
  const theme = useTheme()
  return (
    <Fragment>
      <Box
        sx={{
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: -50,
            left: 0,
            backgroundImage: `url(${ASSET.GRADIENT_LINES_BG})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            zIndex: -1,
          },
        }}
      >
        <Typography component='footer' sx={{ display: 'flex', color: 'common.white' }}>
          <Container sx={{ my: 8, display: 'flex' }}>
            <Grid
              container
              spacing={5}
              sx={{
                color: theme.palette.secondary.main,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                [theme.breakpoints.up('sm')]: {
                  // height: '40vh',
                  // minHeight: 400,
                  // maxHeight: 800,
                },
              }}
            >
              <Grid item xs={6} sm={4} md={3}>
                <Grid container direction='column' justifyContent='flex-end' spacing={2} sx={{ height: 120 }}></Grid>
              </Grid>
              <Grid item xs={6} sm={4} md={2}>
                <Typography variant='body2' marked='left' gutterBottom sx={{ color: 'secondary.main' }}>
                  Legal
                </Typography>
                <Box component='ul' sx={{ m: 0, listStyle: 'none', p: 0 }}>
                  <Box component='li' sx={{ py: 0.5 }}>
                    <Link
                      variant='subtitle2'
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
                      variant='subtitle2'
                      color='grey.500'
                      sx={{
                        textDecoration: 'none',
                        '&:hover': { opacity: 0.5, translate: '0.5s' },
                      }}
                    >
                      Privacy
                    </Link>
                  </Box>
                  <Box component='li' sx={{ py: 0.5 }}>
                    <Link
                      href='/premium-themes/onepirate/privacy/'
                      variant='subtitle2'
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
                <Typography variant='body2' marked='left' gutterBottom sx={{ color: 'secondary.main' }}>
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
                    fontSize: 10,
                    mt: 1,
                    width: 200,
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
              <Divider />
              <Grid container flexDirection='column' flex={1} justifyContent='center'>
                <Grid item sx={{ display: 'flex' }}>
                  {SOCIAL.map((social) => (
                    <Box component='a' href={social.href} sx={iconStyle} key={social.href}>
                      <m.img {...social.icon} />
                    </Box>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Typography>
        <Grid
          container
          bgcolor='transparent'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'common.white',
            py: 22,
            pb: 6,
          }}
        >
          <Grid item lg={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default AppFooter
