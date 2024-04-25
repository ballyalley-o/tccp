import { FC } from 'react'
import { Card, CardContent, CardMedia, Typography, Box, Chip } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import { SScrollBox, SBadgeHeader } from 'theme/style'
import { photoLocation, badgeLocation } from 'util/asset-loc'

const SBootcampCard = styled(Card)(({ theme }) => ({
  width: '250px',
  height: '400px',
  boxShadow: 'none'
}))

const BootcampTile: FC<UploadLocationProps> = ({ bootcamp }) => {
  const theme = useTheme()

  return (
    <SBootcampCard>
      <SBadgeHeader
        avatar={
          <img
            src={badgeLocation({ bootcamp })}
            alt={`${bootcamp.name} badge`}
            style={{
              height: 40,
              width: 40,
              overflow: 'hidden',
              objectFit: 'cover',
              position: 'absolute',
              top: 200,
              right: '10%',
              zIndex: 1,
              transform: 'translateX(-50%)'
            }}
          />
        }
      />
      <CardMedia
        component='img'
        height='230'
        image={photoLocation({ bootcamp })}
        alt={bootcamp.name}
        sx={{
          objectFit: 'cover',
          objectPosition: 'top',
          marginTop: '-40px'
        }}
      />
      <CardContent>
        <Box my={1}>
          <Typography gutterBottom variant='h6' component='div'>
            {bootcamp.name}
          </Typography>
        </Box>

        <Typography variant='subtitle2' color='text.secondary'>
          {bootcamp.location ? bootcamp.location.city + ', ' + bootcamp.location.country : 'No location provided'}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 6
          }}>
          {bootcamp.careers && bootcamp.careers.length > 0 ? (
            <SScrollBox>
              {bootcamp?.careers?.map((chip: string, index: number) => (
                <Chip key={index} label={chip} variant='outlined' size='small' sx={{ mr: 1, color: 'common.black' }} />
              ))}
            </SScrollBox>
          ) : (
            <Typography variant='caption' m='1em'>
              &nbsp;
            </Typography>
          )}
        </Box>
      </CardContent>
    </SBootcampCard>
  )
}

export default BootcampTile
