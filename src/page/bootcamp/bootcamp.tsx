import { m } from 'framer-motion'
import { Box, ButtonBase, Container, Grid, Card, CardContent, CardMedia, CardHeader, Rating } from '@mui/material'
import { styled } from '@mui/material/styles'
import { MotionContainer, MotionLazyContainer } from 'component/motion'
import { Typography } from 'component/typography'
import { useTheme } from '@mui/material/styles'
import { image as imageArr } from '_mock'
import { ASSET } from 'config'
import { mockBootcamp } from '_mock'

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}))

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}))

const SBadgeHeader = styled(CardHeader)({
  position: 'relative',
})

const SCard = styled(Card)(({ theme }) => ({
  width: '250px',
  boxShadow: 'none',
}))

interface BootcampTileProps {
  title: string
  institution: string
  badge: string
  imageUrl: string
  chips?: string[] | null
}

function Bootcamp({ title, institution, badge, imageUrl, chips }: BootcampTileProps) {
  const theme = useTheme()
  return (
    <MotionLazyContainer>
      <Box
        sx={{
          margin: 10,
          px: 10,
        }}
      >
        <Box mt={20}>
          <Box
            component={m.div}
            flex={1}
            justifyContent='center'
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <img src={ASSET.TCCP_ICON} alt='logo' width={100} />
          </Box>
          <Typography variant='h2' marked='center' align='center' component='h2'>
            Worldclass Bootcamps Worldwide
          </Typography>
        </Box>
        <Grid container flexDirection='row' spacing={4} sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
          <Grid item sm={3}>
            <div
              style={{
                backgroundColor: 'red',
                width: '100%',
                height: '100vh',
              }}
            />
          </Grid>

          <Grid item sm={9}>
            <SCard
              sx={{
                width: '100%',
                display: 'flex',
              }}
            >
              <Grid container>
                <Grid item xs={4}>
                  <CardMedia
                    component='img'
                    height='300'
                    image={ASSET._BG_TEMP}
                    alt={title}
                    sx={{
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />
                </Grid>
                {mockBootcamp.map((bootcamp: any) => (
                  <Grid item xs={8}>
                    <CardContent>
                      <Typography variant='h4'>{bootcamp.name}</Typography>
                      <SBadgeHeader
                        title={title}
                        subheader={institution}
                        avatar={
                          <Rating
                            name='read-only'
                            value={3}
                            readOnly
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            }}
                          />
                        }
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      />
                    </CardContent>
                  </Grid>
                ))}
              </Grid>
            </SCard>
          </Grid>
        </Grid>
      </Box>
    </MotionLazyContainer>
  )
}

export default Bootcamp
