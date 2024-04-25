import { FC } from 'react'
import { Box, CardContent, CardMedia, Grid, Typography, Rating } from '@mui/material'
import { GSContainerGrid, SBadgeHeader } from 'theme/style'
import { BootcampCareer } from 'section/bootcamp'
import { ARIA, COMPONENT, FLEX, KEY, TYPOGRAPHY_VARIANT, VARIANT } from 'constant'
import { badgeLocation, photoLocation } from 'util/asset-loc'

const BootcampCard: FC<UploadLocationProps> = ({ bootcamp }) => {
  return (
    <GSContainerGrid container>
      <Grid item xs={4}>
        <CardMedia
          component={COMPONENT.IMG}
          image={photoLocation({ bootcamp })}
          alt={bootcamp.name}
          sx={{
            height: { xs: '100vh', sm: 200, md: 200, lg: 250, xl: 300 },
            objectFit: VARIANT.COVER
          }}
        />
      </Grid>
      <Grid item xs={8}>
        <CardContent>
          <Box>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant={TYPOGRAPHY_VARIANT.H4} color='common.black'>
                  {bootcamp?.name}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={0} justifyContent={FLEX.FLEX_END}>
                  <CardMedia
                    component={KEY.IMAGE}
                    src={badgeLocation({ bootcamp })}
                    alt={ARIA.COMPANY_BADGE}
                    height={50}
                    sx={{ width: 50, display: FLEX.FLEX, justifyContent: FLEX.FLEX_END, borderRadius: 2 }}
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
            <Typography variant={TYPOGRAPHY_VARIANT.BODY2}>{bootcamp.description}</Typography>
          </Box>
          <Typography variant={TYPOGRAPHY_VARIANT.H6} py={2}>
            {bootcamp?.location?.city}, {bootcamp?.location?.state}
          </Typography>
        </CardContent>
        <BootcampCareer bootcamp={bootcamp} />
      </Grid>
    </GSContainerGrid>
  )
}

export default BootcampCard
