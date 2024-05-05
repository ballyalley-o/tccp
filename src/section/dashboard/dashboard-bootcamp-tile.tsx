import { FC } from 'react'
import { CardContent, CardMedia, Typography, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { SBadgeHeader, GSBadgeImg } from 'theme/style'
import { photoLocation, badgeLocation } from 'util/asset-loc'
import { COMPONENT, FLEX, PLACEHOLDER, TYPOGRAPHY } from 'constant'
import { OPhotoCardMedia, SBootcampCard } from './option'
import { BootcampCareer } from 'section/bootcamp'

const BootcampTile: FC<UploadLocationProps> = ({ bootcamp }) => {
  const theme = useTheme()

  const { badge, _id, photo } = bootcamp || {}

  return (
    <SBootcampCard>
      <SBadgeHeader avatar={<GSBadgeImg src={badgeLocation({ _id, badge })} />} />
      <CardMedia image={photoLocation({ photo, _id })} {...OPhotoCardMedia} />
      <CardContent>
        <Box my={1}>
          <Typography gutterBottom variant={TYPOGRAPHY.H6} component={COMPONENT.DIV}>
            {bootcamp?.name}
          </Typography>
        </Box>

        <Typography variant={TYPOGRAPHY.SUBTITLE2} color='text.secondary'>
          {bootcamp?.location ? bootcamp?.location?.city + ', ' + bootcamp?.location?.country : PLACEHOLDER.NO_LOCATION}
        </Typography>
        <Box
          sx={{
            display: FLEX.FLEX,
            justifyContent: FLEX.FLEX_END,
            mt: 6
          }}>
          {bootcamp?.careers && bootcamp?.careers.length > 0 ? (
            <BootcampCareer bootcamp={bootcamp} />
          ) : (
            <Typography variant={TYPOGRAPHY.CAPTION} m='1em'>
              &nbsp;
            </Typography>
          )}
        </Box>
      </CardContent>
    </SBootcampCard>
  )
}

export default BootcampTile
