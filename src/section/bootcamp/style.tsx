import { FC } from 'react'
import { styled } from '@mui/material/styles'
import { m } from 'framer-motion'
import { Avatar, Box, TableRow, TableContainer, TableCell, Collapse, Grid } from '@mui/material'
import { KEY } from 'constant'

export const SRoot = styled(m.div)({
  maxWidth: '100vw',
  margin: '0 auto'
})

export const STableContainer = styled(TableContainer)({
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  borderRadius: 2,
  overflow: 'hidden'
})

export const STableHeader = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.common.white,
  paddingRight: '1rem',
  paddingLeft: '1rem'
}))

export const STableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  }
}))

export const SCollapse = styled(Collapse)(({ theme }) => ({
  '& .MuiTableCell-root': {
    padding: '1rem',
    backgroundColor: 'transparent'
  }
}))

export const STableHeadCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1rem',
  backgroundColor: 'transparent'
}))

export const SCollapseGrid = styled(Grid)(({ theme }) => ({
  margin: 1,
  paddingTop: theme.spacing(3),
  width: '800px',
  height: '100%',
  overflow: KEY.AUTO
}))

interface QuoteBubbleProps {
  color: string
  children?: any
}

// export const SRootBox: FC<QuoteBubbleProps> = styled(({ color, ...other }: { color: string }) => <Box {...other} />)(
//   ({ color }: { color: string }) => ({
//     maxWidth: '400px',
//     margin: '0 auto',
//     padding: '16px',
//     position: 'relative',
//     borderRadius: '4px',
//     background: '#000'
//   })
// )

export const SRootBox = styled(Box)(({ theme }) => ({
  maxWidth: '400px',
  margin: '0 auto',
  padding: '16px',
  position: 'relative',
  borderRadius: '4px',
  background: theme.palette.common.black
}))

export const SQuoteBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  padding: 16
}))

export const SAvatar = styled(Avatar)(({ theme }) => ({
  marginRight: 8
}))

export const SQuoteArrowBox: FC<QuoteBubbleProps> = styled(({ color, ...other }: { color: string }) => <Box {...other} />)(
  ({ color }: { color: string }) => ({
    width: 0,
    height: 0,
    borderLeft: '10px solid transparent',
    borderRight: '10px solid transparent',
    borderTop: `10px solid ${color}`,
    margin: '0 auto',
    position: 'relative',
    right: '50px'
  })
)
