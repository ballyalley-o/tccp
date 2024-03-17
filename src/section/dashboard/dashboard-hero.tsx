import { Button, Typography } from 'component'
import SDashboardSection from './dashboard-section'
import { ASSET } from 'config'
import { MotionLazyContainer, varBgKenburns } from 'component/motion'
import { BootcampPath } from 'route/path'

function DashboardHero() {
  return (
    <MotionLazyContainer>
      <SDashboardSection
        sxBackground={{
          backgroundImage: `url(${ASSET.ECLIPSE_BG})`,
          backgroundPosition: 'center',
          ...varBgKenburns({ duration: 10 }),
        }}
      >
        <Typography color='inherit' align='center' fontWeight='medium' variant='h1' marked='center'>
          Fuel your ambition
        </Typography>
        <Typography color='inherit' align='center' variant='h5' sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}>
          Leading Coding Bootcamp Programs
        </Typography>
        <Button color='secondary' variant='contained' size='small' component='a' sx={{ minWidth: 200 }} href={BootcampPath.BOOTCAMP}>
          Browse Bootcamps
        </Button>
        <Typography variant='body2' color='inherit' sx={{ mt: 2 }}>
          Discover the experience
        </Typography>
      </SDashboardSection>
    </MotionLazyContainer>
  )
}

export default DashboardHero
