import { m } from 'framer-motion'
import { MotionLazyContainer } from 'component/motion'
import { Box, Grid } from '@mui/material'
import { Typography } from 'component/typography'
import { CourseSearch } from 'section/course'
import { ASSET } from 'config'
import { LABEL } from 'constant'
const Course = () => {
  return (
    <MotionLazyContainer>
      <Box
        sx={{
          margin: 10,
          px: 10,
          height: '100vh'
        }}>
        <Box mt={20}>
          <Box
            component={m.div}
            flex={1}
            justifyContent='center'
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column'
            }}>
            <img src={ASSET.TCCP_ICON} alt='logo' width={100} />
          </Box>
          <Typography variant='h2' marked='center' align='center' component='h2'>
            {LABEL.COURSE_PAGE_TITLE}
          </Typography>
        </Box>
        <Typography variant='h1' color='initial'>
          Course
        </Typography>
        <Grid container flexDirection='row' spacing={2} sx={{ mt: 8, display: 'flex' }}>
          <Grid item sm={3}>
            <CourseSearch />
          </Grid>
        </Grid>
      </Box>
    </MotionLazyContainer>
  )
}

export default Course
