import { FC } from 'react'
import { Box, CardContent, CardMedia, Chip, Grid, Typography, Rating } from '@mui/material'
import { GSContainerGrid, SScrollBox, SBadgeHeader } from 'theme/style'
import { ServerPath } from 'route/path'
import { KEY } from 'constant'
import { ASSET } from 'config'
import { badgeLocation, photoLocation } from 'util/asset-loc'

const BootcampCard: FC<UploadLocationProps> = ({ bootcamp }) => {
  return (
    <GSContainerGrid container>
      <Grid item xs={4}>
        <CardMedia
          component='img'
          image={photoLocation({ bootcamp })}
          alt={bootcamp.name}
          sx={{
            height: { xs: '100vh', sm: 200, md: 200, lg: 250, xl: 300 },
            objectFit: 'cover'
          }}
        />
      </Grid>
      <Grid item xs={8}>
        <CardContent>
          <Box>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant='h4' color='common.black'>
                  {bootcamp?.name}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={0} justifyContent='flex-end'>
                  <CardMedia
                    component={KEY.IMAGE}
                    src={badgeLocation({ bootcamp })}
                    alt='company badge'
                    height={50}
                    sx={{ width: 50, display: 'flex', justifyContent: 'flex-end', borderRadius: 2 }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <SBadgeHeader
            avatar={<Rating name='read-only' value={bootcamp.rating || 5} readOnly />}
            sx={{
              p: 0,
              py: 2
            }}
          />
          <Box height={40}>
            <Typography variant='body2'>{bootcamp.description}</Typography>
          </Box>
          <Typography variant='h6' py={2}>
            {bootcamp?.location?.city}, {bootcamp?.location?.state}
          </Typography>
        </CardContent>
        <SScrollBox my={2} ml={2}>
          {bootcamp?.careers?.map((chip: string, index: number) => (
            <Chip key={index} label={chip} variant='outlined' size='small' sx={{ mr: 2, color: 'common.black' }} />
          ))}
        </SScrollBox>
      </Grid>
    </GSContainerGrid>
  )
}

export default BootcampCard
