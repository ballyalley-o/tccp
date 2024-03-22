import { FC } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Button } from '@mui/material'
import { m } from 'framer-motion'
import { varSlide } from 'component/motion'

interface AnimatedButtonProps {
  to: string
  text: string
  style?: React.CSSProperties
}

const AnimatedButton: FC<AnimatedButtonProps> = ({ to, text, style }) => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <RouterLink to={to} style={style}>
      <m.div whileHover='hover' variants={buttonVariants}>
        <Button
          variant='contained'
          sx={{
            boxShadow: 'none',
            bgcolor: 'transparent',
            color: 'common.black',
            fontSize: 10,
            padding: '.5em 1em',
            textTransform: 'full-size-kana',
            '&:hover': {
              boxShadow: 'none',
              fontWeight: 'bold',
              color: 'common.black',
              bgcolor: 'transparent',
            },
          }}
        >
          {text}
        </Button>
      </m.div>
    </RouterLink>
  )
}

export default AnimatedButton
