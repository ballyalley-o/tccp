import { m } from 'framer-motion'
import { Box, ButtonBase, Grid, Card, CardContent, CardMedia, CardHeader, Rating, Chip } from '@mui/material'
import { styled } from '@mui/material/styles'
import { BootcampSearch } from 'section/bootcamp'
import { MotionLazyContainer } from 'component/motion'
import { Typography } from 'component/typography'
import { useTheme } from '@mui/material/styles'
import { ASSET } from 'config'
import { mockBootcamp } from '_mock'
import { LABEL } from 'constant'

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
            {LABEL.BOOTCAMP_PAGE_TITLE}
          </Typography>
        </Box>
        <Grid container flexDirection='row' spacing={2} sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
          <Grid item sm={3} mt={2}>
            <BootcampSearch />
          </Grid>

          <Grid item sm={9}>
            <SCard
              sx={{
                width: '100%',
                display: 'flex',
                bgcolor: 'transparent',
              }}
            >
              <Grid container flexDirection='column' flex={1} sx={{ backgroundColor: 'transparent' }}>
                {mockBootcamp.map((bootcamp: any, index: number) => (
                  <Grid
                    container
                    key={index}
                    sx={{
                      mb: 4,
                      borderRadius: 2,
                      bgcolor: 'grey.300',
                      backgroundImage: `url(${ASSET.DOT_MATRIX_BG})`,
                    }}
                  >
                    <Grid item xs={4}>
                      <CardMedia
                        component='img'
                        image={bootcamp.imageUrl}
                        alt={title}
                        sx={{
                          height: { xs: '100vh', sm: 200, md: 200, lg: 200, xl: '100%' },
                          objectFit: 'cover',
                        }}
                      />
                    </Grid>
                    <Grid item xs={8}>
                      <CardContent>
                        <Box>
                          <Grid container>
                            <Grid item xs={8}>
                              <Typography variant='h4' color='common.black'>
                                {bootcamp.name}
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Grid container spacing={0} justifyContent='flex-end'>
                                <CardMedia
                                  component='img'
                                  src={bootcamp.badge}
                                  alt='company badge'
                                  height={50}
                                  sx={{ width: 50, display: 'flex', justifyContent: 'flex-end', borderRadius: 2 }}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Box>
                        <SBadgeHeader
                          title={title}
                          subheader={institution}
                          avatar={<Rating name='read-only' value={bootcamp.rating} readOnly />}
                          sx={{
                            p: 0,
                            py: 2,
                          }}
                        />
                        <Typography variant='body2'>{bootcamp.description}</Typography>
                        <Typography variant='h6' py={2}>
                          {bootcamp.location.city}, {bootcamp.location.country}
                        </Typography>
                      </CardContent>
                      <Box my={2} ml={2}>
                        {bootcamp.course.map((chip: string, index: number) => (
                          <Chip key={index} label={chip} variant='outlined' size='small' sx={{ mr: 2, color: 'common.black' }} />
                        ))}
                      </Box>
                    </Grid>
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
