import { forwardRef, FC } from 'react'
import { Box } from '@mui/material'

interface SvgColorProps {
  icon: string
  sx?: any
  [key: string]: any
}

const SvgColor: FC<SvgColorProps> = forwardRef(
  ({ icon, sx, ...other }, ref) => (
    <Box
      component='span'
      className='svg-color'
      ref={ref}
      sx={{
        width: 24,
        height: 24,
        display: 'inline-block',
        bgcolor: 'currentColor',
        mask: `url(${icon}) no-repeat center / contain`,
        WebkitMask: `url(${icon}) no-repeat center / contain`,
        ...sx,
      }}
      {...other}
    />
  )
)

export default SvgColor
