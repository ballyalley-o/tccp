import { Card } from '@mui/material'
import { styled } from '@mui/material/styles'
import { COMPONENT } from 'constant'

export const OPhotoCardMedia = {
  component: COMPONENT.IMG,
  height: '230',
  alt: 'bootcamp photo',
  sx: {
    objectFit: 'cover',
    objectPosition: 'top',
    marginTop: '-40px',
    height: '230px'
  }
}

export const OBadgeHeaderImg = {
  alt: 'bootcamp badge',
  style: {
    height: 40,
    width: 40,
    overflow: 'hidden',
    objectFit: 'cover',
    position: 'absolute',
    top: 200,
    right: '10%',
    zIndex: 1,
    transform: 'translateX(-50%)'
  }
}

export const SBootcampCard = styled(Card)(({ theme }) => ({
  width: '250px',
  height: '400px',
  boxShadow: 'none'
}))
