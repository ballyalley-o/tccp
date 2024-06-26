import { m } from 'framer-motion'
import { Fragment } from 'react'
import { Grid, Link, Box, Container, Divider, Input, InputAdornment } from '@mui/material'
import { Typography } from 'component/typography'
import { TextField } from 'component/form/text-field'
import { useTheme } from '@mui/material/styles'
import { useIcon } from 'hook'
import { ICON_LOC_NAME } from 'config'
import { GLOBAL, ASSET } from 'config'
import { SOCIAL, LANG } from 'constant'

function Copyright() {
  return (
    <Box display='flex' justifyContent='center' gap={2} sx={{ color: 'common.black' }}>
      <Typography variant='body2'>
        {'© '}
        {/* {GLOBAL.APP_WEBSITE} */}
        {new Date().getFullYear()}&nbsp;
      </Typography>
      <Link variant='body2' color='common.black' href='https://thecodecoachprojct.com' sx={{ textDecoration: 'none' }}>
        {GLOBAL.APP_WEBSITE}.
      </Link>
      <Typography variant='body2'> All rights reserved.</Typography>
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
    opacity: 0.6
  }
}

function AppFooter() {
  const { Icon: HubotIcon, iconSrc: hubotSrc } = useIcon(ICON_LOC_NAME.HUBOT)
  const { Icon: BrandIcon, iconSrc: brandSrc } = useIcon(ICON_LOC_NAME.TCCP)
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
            zIndex: -1
          }
        }}>
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
                [theme.breakpoints.up('sm')]: {}
              }}>
              <Grid item xs={12} md={7}>
                <HubotIcon icon={hubotSrc} />
                <Typography variant='h5' color='common.white' gutterBottom>
                  Subscribe to the TCCP® newsletter to stay
                  <br />
                  up-to-date with the latest releases
                </Typography>
                <Input
                  // variant='outlined'
                  placeholder='Email Address'
                  size='medium'
                  fullWidth
                  sx={{
                    maxWidth: 300,
                    py: 2,
                    color: 'secondary.main',
                    '&:before': {
                      // bgcolor: 'transparent',
                      borderColor: 'secondary.main',
                      color: 'common.white'
                    },
                    '& .MuiInputBase-input': {
                      fontSize: 12,
                      color: 'common.white'
                    }
                  }}
                  endAdornment={
                    <InputAdornment position='end'>
                      <Link href='#' underline='none'>
                        →
                      </Link>
                    </InputAdornment>
                  }
                />
              </Grid>
              <Grid item xs={6} sm={4} md={5}>
                <Grid container flexDirection='row'>
                  <Grid item xs={4}>
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
                            '&:hover': { opacity: 0.5, translate: '0.5s' }
                          }}>
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
                            '&:hover': { opacity: 0.5, translate: '0.5s' }
                          }}>
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
                            '&:hover': { opacity: 0.5, translate: '0.5s' }
                          }}>
                          Privacy
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
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
                            '&:hover': { opacity: 0.5, translate: '0.5s' }
                          }}>
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
                            '&:hover': { opacity: 0.5, translate: '0.5s' }
                          }}>
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
                            '&:hover': { opacity: 0.5, translate: '0.5s' }
                          }}>
                          Privacy
                        </Link>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant='body2' marked='left' gutterBottom sx={{ color: 'secondary.main' }}>
                      Language
                    </Typography>
                    <TextField
                      select
                      size='small'
                      variant='filled'
                      SelectProps={{
                        native: true
                      }}
                      sx={{
                        fontSize: 10,
                        mt: 1,
                        // width: 200,
                        color: 'common.white',
                        '&:before': {
                          bgcolor: 'secondary.main',
                          borderColor: 'common.white',
                          color: 'common.white'
                        },
                        '&:after': {
                          bgcolor: 'secondary.main',
                          color: 'common.white'
                        }
                      }}>
                      {LANG.map((language) => (
                        <option value={language.code} key={language.code}>
                          {language.name}
                        </option>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </Grid>
              <Divider />
              <Grid container flexDirection='row' py={8} justifyContent='flex-end'>
                <Grid item lg={6} sx={{ display: 'flex' }}>
                  {SOCIAL.map((social) => (
                    <Box component='a' href={social.href} sx={iconStyle} key={social.href}>
                      <m.img {...social.icon} />
                    </Box>
                  ))}
                </Grid>
                <Grid item lg={6} textAlign='right'>
                  <BrandIcon
                    icon={brandSrc}
                    sx={{
                      width: 100,
                      height: 100,
                      color: 'grey.600',
                      opacity: 0.5
                    }}
                  />
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
            py: 20,
            pb: 22
          }}>
          <Grid item lg={12}>
            <Copyright />
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  )
}

export default AppFooter
