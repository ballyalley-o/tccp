import { Button, Typography } from 'component'
import SDashboardSection from './dashboard-section'

const backgroundImage =
  'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

function DashboardHero() {
  return (
    <SDashboardSection
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        // backgroundColor: '#000',
        backgroundPosition: 'center',
      }}
    >
      {/* <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt='increase priority'
      /> */}
      <Typography color='inherit' align='center' variant='h2' marked='center'>
        the Code Coach Projct
      </Typography>
      <Typography
        color='inherit'
        align='center'
        variant='h5'
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        World Class Bootcamp for Programmers
      </Typography>
      <Button
        color='secondary'
        variant='contained'
        size='small'
        component='a'
        // href='/premium-themes/onepirate/sign-up/'
        sx={{ minWidth: 200 }}
      >
        Browse for Bootcamps
      </Button>
      <Typography variant='body2' color='inherit' sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </SDashboardSection>
  )
}

export default DashboardHero
