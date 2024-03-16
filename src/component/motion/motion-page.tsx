import { FC } from 'react'
import { m } from 'framer-motion'
import { Box } from '@mui/material'

interface MotionPageProps {
  children: React.ReactNode
}

const MotionPage: FC<MotionPageProps> = ({ children }) => {
  return (
    <Box
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      component={m.div}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {children}
    </Box>
  )
}

export default MotionPage
