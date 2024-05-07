import { styled } from '@mui/material/styles'
import { m } from 'framer-motion'
import { TableRow, TableContainer, TableCell, Collapse, Grid } from '@mui/material'
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
