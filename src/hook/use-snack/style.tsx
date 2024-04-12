import { m } from 'framer-motion'
import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { MaterialDesignContent } from 'notistack'

export const SSnackContent = styled(MaterialDesignContent)(({ theme }) => ({
  '&.notistack-MuiContent': {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'row',
    objectFit: 'cover',
    justifyContent: 'space-evenly',
    fontSize: theme.typography.overline.fontSize,
    color: theme.palette.common.black,
    padding: theme.spacing(2)
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: theme.palette.error.dark,
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: theme.palette.common.white,
    padding: 0
  },
  '&.notistack-MuiContent-success': {
    flexDirection: 'row',
    padding: 0
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: theme.palette.common.white,
    flexDirection: 'row',
    padding: 0
  }
}))

export const SSnackIconMDiv = styled(Box)(({ theme, color }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.grey[500],
  width: 30,
  height: 30
}))
