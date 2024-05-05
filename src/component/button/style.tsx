import { styled } from '@mui/material/styles'
import { Popover, IconButton } from '@mui/material'

export const SPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    size: '100%',
    overflow: 'hidden',
    borderRadius: 0
  },
  '& .MuiPopover-paper': {
    overflow: 'hidden'
  },
  '& .MuiPopover-paper .MuiList-root': {
    padding: '0px'
  },
  '& .MuiPopover-paper .MuiTypography-root': {
    fontSize: '1rem'
  },
  boxShadow: 'none',
  pointerEvents: 'none'
}))

export const SBackIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: 2,
  padding: 1,
  marginBottom: 2
}))
