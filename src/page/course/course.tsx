import { useState } from 'react'
import { m } from 'framer-motion'
import { useGetAllCourseQuery } from 'store/slice'
import { MotionLazyContainer } from 'component/motion'
import { Box, Grid, Pagination } from '@mui/material'
import { CourseCard } from 'section/course'
import { SCard } from 'theme/style'
import { SkeletonLoader } from 'component/skeleton'
import { Typography } from 'component/typography'
import { CourseSearch } from 'section/course'
import { ASSET } from 'config'
import { LABEL } from 'constant'
const Course = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, error, isLoading } = useGetAllCourseQuery()

  const handlePageChange = (event: any, value: any) => {
    setCurrentPage(value)
  }

  return (
    <MotionLazyContainer>
      <Box sx={{ margin: 10, px: 10, height: '100%' }}>
        <Box mt={20}>
          <Box component={m.div} flex={1} justifyContent='center' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <img src={ASSET.TCCP_ICON} alt='logo' width={100} />
          </Box>
          <Typography variant='h2' marked='center' align='center' component='h2'>
            {LABEL.COURSE_PAGE_TITLE}
          </Typography>
        </Box>
        <Grid container flexDirection='row' spacing={2} sx={{ mt: 8, display: 'flex' }}>
          <Grid item sm={3}>
            <CourseSearch />
          </Grid>
          <Grid item sm={9}>
            <Pagination
              count={Math.ceil(data?.data?.length ?? 0 / 9)}
              page={currentPage}
              onChange={handlePageChange}
              variant='outlined'
              shape='rounded'
              color='primary'
              sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}
            />
            <SCard sx={{ width: '100%', display: 'flex', bgcolor: 'transparent' }}>
              <Grid container flexDirection='row' flex={1} spacing={2} sx={{ backgroundColor: 'transparent' }}>
                {isLoading ? (
                  <Grid item lg={4}>
                    <SkeletonLoader cards={12} />
                  </Grid>
                ) : (
                  data?.data?.slice((currentPage - 1) * 9, currentPage * 9).map((course: any, index: number) => (
                    <Grid key={index} item lg={4}>
                      <CourseCard key={index} course={course} />
                    </Grid>
                  ))
                )}
              </Grid>
            </SCard>
            <Pagination
              count={Math.ceil(data?.data?.length ?? 0 / 9)}
              page={currentPage}
              onChange={handlePageChange}
              variant='outlined'
              shape='rounded'
              color='primary'
              sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}
            />
          </Grid>
        </Grid>
      </Box>
    </MotionLazyContainer>
  )
}

export default Course
