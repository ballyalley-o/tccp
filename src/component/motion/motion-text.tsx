import { FC, Fragment } from 'react'
import { m } from 'framer-motion'
import { Box } from '@mui/material'
import { varFade } from './variant'

interface MotionTextProps {
  text: string
  variants?: any
  sx?: any
  [key: string]: any
}

const MotionText: FC<MotionTextProps> = ({ text, variants, sx, ...other }) => {
  return (
    <Box
      component={m.div}
      sx={{
        m: 0,
        typography: 'h5',
        overflow: 'hidden',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {text.split(' ').map((word, wordIndex, wordsArray) => (
        <Fragment key={`word-${wordIndex}`}>
          {word.split('').map((char, charIndex) => (
            <m.span
              key={`${wordIndex}-${charIndex}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: charIndex * 0.1 }}
              variants={
                variants ||
                varFade({
                  durationIn: 0.8,
                  delay: charIndex * 0.05,
                }).inUp
              }
            >
              {char}
            </m.span>
          ))}
          {wordIndex !== wordsArray.length - 1 && <span>&nbsp;</span>}
        </Fragment>
      ))}
    </Box>
  )
}

export default MotionText
