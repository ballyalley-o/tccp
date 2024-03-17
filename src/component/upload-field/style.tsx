import { styled } from '@mui/material/styles'
import { Button, IconButton, Box } from '@mui/material'

export const SUploadAvatarButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.primary.main,
  height: 60,
  width: '100%',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.grey[500],
  },
}))

export const SPreviewContainerDivBox = styled(Box)({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
})

export const SIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
  color: theme.palette.common.black,

  opacity: 0.8,
  zIndex: 1,
  cursor: 'pointer',
  margin: 'auto',
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    opacity: 0.6,
  },
}))

export const SClearIconButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: 0,
  top: 0,
  color: theme.palette.common.black,
  opacity: 0.8,
  zIndex: 1,
  cursor: 'pointer',
  margin: 'auto',
  minHeight: 0,
  '&:hover': {
    backgroundColor: theme.palette.common.white,
    opacity: 0.6,
  },
}))

export const UploadAvatarButtonProps = (theme: any) => {
  return {
    variant: 'contained',
    component: 'span',
    sx: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main,
      height: 60,
      width: '100%',
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
      },
      '&.Mui-disabled': {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.grey[500],
      },
    },
  }
}

export const SImg = styled('img')({
  maxHeight: 150,
  borderRadius: '50%',
  objectFit: 'cover',
  overflow: 'hidden',
})

export const AvatarEditorProps = {
  width: 250,
  height: 250,
  border: 50,
  borderRadius: 125,
  color: [255, 255, 255, 0.6],
  scale: 1,
  rotate: 0,
}
