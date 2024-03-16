import { FC } from 'react'
import { m } from 'framer-motion'
import { Box } from '@mui/material'
import { useResponsive } from 'hook'
import { varContainer } from './variant'

interface MotionViewportProps {
  children: React.ReactNode
  disableAnimatedMobile?: boolean
  [key: string]: any
}

const MotionViewport: FC<MotionViewportProps> = ({
  children,
  disableAnimatedMobile = true,
  ...other
}) => {
  const isMobile = useResponsive('sm' as any)

  if (isMobile && disableAnimatedMobile) {
    return <Box {...other}>{children}</Box>
  }

  return (
    <Box
      component={m.div}
      initial='initial'
      whileInView='animate'
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer({ staggerIn: 0.1 })}
      {...other}
    >
      {children}
    </Box>
  )
}

export default MotionViewport
