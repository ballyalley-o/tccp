import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { dispatch } from 'store'
import { useGetBootcampQuery } from 'store/slice'
import { Box, CardContent, CardMedia, Chip, Grid, Typography, Rating } from '@mui/material'
import { ServerPath } from 'route/path'
import { KEY } from 'constant'
import { ASSET } from 'config'
import { capitalize } from 'util/format'

interface CourseCardProps {
  course: Course
}

const CourseCard: FC<CourseCardProps> = ({ course }) => {
  const { data: bootcamp, error, isLoading } = useGetBootcampQuery(course?.bootcamp?._id)

  let minimumSkill = ''

  if (course.bootcamp) {
    minimumSkill = capitalize(course?.minimumSkill)
  }

  function badgeLocation(bootcamp: Bootcamp) {
    return bootcamp?.badge === KEY.BADGE_DEFAULT
      ? ServerPath.ORIGIN + `/upload/badge/` + bootcamp?.badge
      : ServerPath.ORIGIN + `/upload/badge/${bootcamp?._id}/` + bootcamp?.badge
  }

  return (
    <Grid
      container
      sx={{
        mb: 4,
        height: 400,
        borderRadius: 2,
        bgcolor: 'grey.300',
        backgroundImage: `url(${ASSET.DOT_MATRIX_BG})`
      }}>
      <CardContent>
        <Box height={70}>
          <Grid container>
            <Grid item xs={8}>
              <Typography variant='h5' color='common.black'>
                {course?.title.charAt(0).toUpperCase() + course?.title.slice(1)}
              </Typography>
              <Grid container flex={1} flexDirection='row' gap={1}>
                <Typography variant='subtitle2'>Duration: {course?.duration + ' weeks' || 'No duration specified'}</Typography>
                <Typography variant='subtitle2'>Tuition: {course?.tuition || 'No tuition specified'}</Typography>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={0} justifyContent='flex-end'>
                <CardMedia
                  component='img'
                  src={course?.bootcamp === null ? ASSET.default_badge : badgeLocation(bootcamp?.data)}
                  alt='company badge'
                  height={50}
                  sx={{ width: 50, display: 'flex', borderRadius: 2 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Typography variant='h6' py={2}>
          {minimumSkill || 'No minimum skill required'}
        </Typography>
        <Box height={130}>
          <Typography variant='subtitle2'>{course.description.charAt(0).toUpperCase() + course.description.slice(1)}</Typography>
        </Box>
        <Typography variant='h6' py={2}>
          {course?.bootcamp?.name.charAt(0).toUpperCase() + course?.bootcamp?.name.slice(1) || 'Solo'}
        </Typography>
      </CardContent>
    </Grid>
  )
}

export default CourseCard
