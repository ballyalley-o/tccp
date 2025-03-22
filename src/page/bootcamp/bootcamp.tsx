import { memo } from 'react'
import { useSelector } from 'react-redux'
import { dispatch } from 'store'
import { m } from 'framer-motion'
import { Pagination, Box, Grid } from '@mui/material'
import { SCard } from 'theme/style'
import { useGetAllBootcampQuery } from 'store/slice/bootcamp'
import { setCurrentPage } from 'store/slice/bootcamp/bootcamp'
import { BootcampSearch, BootcampCard } from 'section/bootcamp'
import { MotionLazyContainer } from 'component/motion'
import { SkeletonLoader } from 'component/skeleton'
import { Typography } from 'component/typography'
import { ASSET } from 'config'
import { FLEX, KEY, LABEL, TYPOGRAPHY } from 'constant'

function Bootcamp() {
  const { currentPage } = useSelector((state: any) => state.bootcamp)
  const { data, error, isLoading } = useGetAllBootcampQuery()

  const handlePageChange = (event: any, value: any) => {
    dispatch(setCurrentPage(value))
  }

  return (
    <MotionLazyContainer>
      <Box
        sx={{
          margin: 10,
          px: 10
        }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'left', flexDirection: 'column' }}>
          <Typography variant={TYPOGRAPHY.H2} marked={'left'} align='left' component='h2'>
           {'Bootcamps'}
          </Typography>
        </Box>
        <Grid container flexDirection='row' spacing={2} sx={{ mt: 8, display: 'flex' }}>
          <Grid item sm={3}>
            <BootcampSearch />
          </Grid>

          <Grid item sm={9}>
            <Pagination
              count={Math.ceil((data?.data?.length ?? 0) / 6)}
              page={currentPage}
              onChange={handlePageChange}
              variant='outlined'
              shape='rounded'
              color='primary'
              sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}
            />

              <Grid container flexDirection='row' display={'flex'} flex={1} sx={{ backgroundColor: 'transparent' }}>
                {isLoading ? (
                  <SkeletonLoader cards={8} />
                ) : (
                  data?.data
                    ?.slice((currentPage - 1) * 6, currentPage * 6)
                    .map((bootcamp: any, index: number) => <BootcampCard key={index} bootcamp={bootcamp} />)
                )}
              </Grid>

            <Pagination
              count={Math.ceil((data?.data?.length ?? 0) / 6)}
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

export default memo(Bootcamp)
