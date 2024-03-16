import { ReactNode, FC } from 'react'
import { m } from 'framer-motion'
import { Box } from '@mui/material'
import { varContainer } from './variant'

export interface MotionContainerProps {
  animate?: boolean
  action?: boolean
  children: ReactNode
}

const MotionContainer: FC<MotionContainerProps> = ({
  animate,
  action = false,
  children,
  ...other
}): JSX.Element => {
  if (action) {
    return (
      <Box
        component={m.div}
        initial={false}
        animate={animate ? 'animate' : 'exit'}
        variants={varContainer(action ? { staggerIn: 0.1 } : {})}
        {...other}
      >
        {children}
      </Box>
    )
  }

  return (
    <Box
      component={m.div}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={varContainer({ staggerIn: 0.1 })}
      {...other}
    >
      {children}
    </Box>
  )
}

export default MotionContainer
