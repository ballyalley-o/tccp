import { FC } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import { SScrollBox, SBadgeHeader, GSBadgeImg } from 'theme/style'
import { photoLocation, badgeLocation } from 'util/asset-loc'
import { COMPONENT, FLEX, PLACEHOLDER, TYPOGRAPHY_VARIANT, VARIANT, SIZE } from 'constant'
import { OPhotoCardMedia, SBootcampCard } from './option'
import { BootcampCareer } from 'section/bootcamp'

const BootcampTile: FC<UploadLocationProps> = ({ bootcamp }) => {
  const theme = useTheme()

  return (
    <SBootcampCard>
      <SBadgeHeader avatar={<GSBadgeImg src={badgeLocation({ bootcamp })} />} />
      <CardMedia image={photoLocation({ bootcamp })} {...OPhotoCardMedia} />
      <CardContent>
        <Box my={1}>
          <Typography gutterBottom variant={TYPOGRAPHY_VARIANT.H6} component={COMPONENT.DIV}>
            {bootcamp.name}
          </Typography>
        </Box>

        <Typography variant={TYPOGRAPHY_VARIANT.SUBTITLE2} color='text.secondary'>
          {bootcamp.location ? bootcamp.location.city + ', ' + bootcamp.location.country : PLACEHOLDER.NO_LOCATION}
        </Typography>
        <Box
          sx={{
            display: FLEX.FLEX,
            justifyContent: FLEX.FLEX_END,
            mt: 6
          }}>
          {bootcamp.careers && bootcamp.careers.length > 0 ? (
            <BootcampCareer bootcamp={bootcamp} />
          ) : (
            <Typography variant={TYPOGRAPHY_VARIANT.CAPTION} m='1em'>
              &nbsp;
            </Typography>
          )}
        </Box>
      </CardContent>
    </SBootcampCard>
  )
}

export default BootcampTile
