import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'

interface CourseTileProps {
  title: string
  institution: string
  badge: string
  imageUrl: string
}

const SBadgeHeader = styled(CardHeader)({
  position: 'relative',
  zIndex: 1,
})

const CourseTile = ({
  title,
  institution,
  badge,
  imageUrl,
}: CourseTileProps) => {
  return (
    <Card>
      <SBadgeHeader
        avatar={
          <img
            src={badge}
            alt={`${institution} logo`}
            style={{ maxHeight: 40 }}
          />
        }
      />
      <CardMedia component='img' height='140' image={imageUrl} alt={title} />
      <CardContent>
        <Typography gutterBottom variant='h6' component='div'>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {institution}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CourseTile
