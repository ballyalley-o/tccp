import { FC } from 'react'
import { Box, Grid, Skeleton } from '@mui/material'

interface SkeletonLoaderProps {
  cards: number
}

const SkeletonLoader: FC<SkeletonLoaderProps> = ({ cards }) => {
  return (
    <Grid container spacing={2}>
      {Array.from(new Array(cards)).map((_, index) => (
        <Grid item xs={12} key={index}>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Skeleton variant="rectangular" height={200} />
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="90%" />
            <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-between' }}>
              <Skeleton variant="text" width="30%" />
              <Skeleton variant="rectangular" width={60} height={30} sx={{ mr: 1 }} />
              <Skeleton variant="rectangular" width={60} height={30} />
              <Skeleton variant="rectangular" width={60} height={30} />
              <Skeleton variant="circular" width={30} height={30} />
            </Box>

            <Box sx={{ pt: 1, display: 'flex', justifyContent: 'flex-end' }}></Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default SkeletonLoader
