import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
  Box,
  Chip,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'

interface CourseTileProps {
  title: string
  institution: string
  badge: string
  imageUrl: string
  chips?: string[] | null
}

const SBadgeHeader = styled(CardHeader)({
  position: 'relative',
})

const SCard = styled(Card)(({ theme }) => ({
  width: '250px',
  boxShadow: 'none',
}))

const BootcampTile = ({
  title,
  institution,
  badge,
  imageUrl,
  chips,
}: CourseTileProps) => {
  const theme = useTheme()
  return (
    <SCard>
      <SBadgeHeader
        avatar={
          <img
            src={badge}
            alt={`${institution} logo`}
            style={{
              maxHeight: 40,
              position: 'absolute',
              top: 200,
              right: '10%',
              zIndex: 1,
              transform: 'translateX(-50%)',
              boxShadow: theme.shadows[4],
            }}
          />
        }
      />
      <CardMedia
        component='img'
        height='230'
        image={imageUrl}
        alt={title}
        sx={{
          objectFit: 'cover',
          objectPosition: 'top',
          marginTop: '-40px',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {title}
        </Typography>
        <Typography variant='subtitle2' color='text.secondary'>
          {institution}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 2,
          }}
        >
          {chips && chips.length > 0 ? (
            chips.map((chip: any, index: number) => (
              <Typography key={index} variant='caption' m='1em'>
                #{chip}
              </Typography>
            ))
          ) : (
            <Typography variant='caption' m='1em'>
              &nbsp;
            </Typography>
          )}
        </Box>
      </CardContent>
    </SCard>
  )
}

export default BootcampTile
