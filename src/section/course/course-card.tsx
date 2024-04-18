import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Box, CardContent, CardMedia, Chip, Grid, Typography, Rating } from '@mui/material'
import { SScrollBox, SBadgeHeader } from 'theme/style'
import { ServerPath } from 'route/path'
import { KEY } from 'constant'
import { ASSET } from 'config'
import { capitalize } from 'util/format'

interface CourseCardProps {
  course: Course
}

function badgeLocation({ course }: CourseCardProps) {
  return course?.bootcamp?.badge === KEY.BADGE_DEFAULT
    ? ServerPath.ORIGIN + `/upload/badge/` + course?.bootcamp?.badge
    : ServerPath.ORIGIN + `/upload/badge/${course?.bootcamp?._id}/` + course?.bootcamp?.badge
}

const CourseCard: FC<CourseCardProps> = ({ course }) => {
  // const { bootcamp } = useSelector((state: any) => state.bootcamp)

  let minimumSkill = ''

  if (course.bootcamp) {
    minimumSkill = capitalize(course?.minimumSkill)
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
            </Grid>
            <Grid item xs={4}>
              <Grid container spacing={0} justifyContent='flex-end'>
                <CardMedia
                  component='img'
                  src={badgeLocation({ course })}
                  alt='company badge'
                  height={50}
                  sx={{ width: 50, display: 'flex', justifyContent: 'flex-end', borderRadius: 2 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Typography variant='h6' py={2}>
          {minimumSkill}
        </Typography>
        <Box height={40}>
          <Typography variant='subtitle2'>{course.description.charAt(0).toUpperCase() + course.description.slice(1)}</Typography>
        </Box>
        <Typography variant='h6' py={2}>
          {course?.bootcamp?.name.charAt(0).toUpperCase() + course?.bootcamp?.name.slice(1)}
        </Typography>
      </CardContent>
    </Grid>
  )
}

export default CourseCard
