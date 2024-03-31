import { forwardRef, FC, MouseEvent } from 'react'
import { Box, IconButton } from '@mui/material'
import { m } from 'framer-motion'
import { SIZE as SizeType } from 'constant'

interface MotionButtonProps {
  children: React.ReactNode
  color?: COLOR
  size?: SIZE
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  sx?: object
}

interface AnimateWrapProps {
  size: SIZE
  children: React.ReactNode
}

const MotionButton: FC<MotionButtonProps> = forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, size = SizeType.MEDIUM, sx, ...other }, ref) => (
    <AnimateWrap size={size}>
      <IconButton size={size} ref={ref} sx={sx} {...other}>
        {children}
      </IconButton>
    </AnimateWrap>
  )
)

export default MotionButton

const varSmall = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 }
}

const varMedium = {
  hover: { scale: 1.09 },
  tap: { scale: 0.97 }
}

const varLarge = {
  hover: { scale: 1.08 },
  tap: { scale: 0.99 }
}

function AnimateWrap({ size, children }: AnimateWrapProps) {
  const isSmall = size === SizeType.SMALL
  const isLarge = size === SizeType.LARGE

  return (
    <Box
      component={m.div}
      whileTap='tap'
      whileHover='hover'
      variants={(isSmall && varSmall) || (isLarge && varLarge) || varMedium}
      sx={{
        display: 'inline-flex'
      }}>
      {children}
    </Box>
  )
}
