import { useEffect } from 'react'
import { m } from 'framer-motion'
import { Box, Grid } from '@mui/material'
import { SCard } from 'theme/style'
import { useGetAllBootcampQuery } from 'store/slice/bootcamp'
import { BootcampSearch, BootcampCard } from 'section/bootcamp'
import { MotionLazyContainer } from 'component/motion'
import { SkeletonLoader } from 'component/skeleton'
import { Typography } from 'component/typography'
import { ASSET } from 'config'
import { LABEL, PLACEHOLDER } from 'constant'

function Bootcamp() {
  const { data, error, isLoading } = useGetAllBootcampQuery()

  return (
    <MotionLazyContainer>
      <Box
        sx={{
          margin: 10,
          px: 10
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
            {LABEL.BOOTCAMP_PAGE_TITLE}
          </Typography>
        </Box>
        <Grid container flexDirection='row' spacing={2} sx={{ mt: 8, display: 'flex' }}>
          <Grid item sm={3}>
            <BootcampSearch />
          </Grid>

          <Grid item sm={9}>
            <SCard
              sx={{
                width: '100%',
                display: 'flex',
                bgcolor: 'transparent'
              }}>
              <Grid container flexDirection='column' flex={1} sx={{ backgroundColor: 'transparent' }}>
                {isLoading ? (
                  <SkeletonLoader cards={8} />
                ) : (
                  data?.data?.map((bootcamp: any, index: number) => <BootcampCard key={index} bootcamp={bootcamp} />)
                )}
              </Grid>
            </SCard>
          </Grid>
        </Grid>
      </Box>
    </MotionLazyContainer>
  )
}

export default Bootcamp
