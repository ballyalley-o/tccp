import { FC, Fragment, useEffect, useState } from 'react'
import { m } from 'framer-motion'
import { theme } from 'theme'
import { Typography } from '@mui/material'
import { Avatar } from 'component/avatar'
import { TYPOGRAPHY } from 'constant'
import { SRootBox, SQuoteBox, SQuoteArrowBox } from '../style'

interface FeedbackQuoteProps {
  feedback: {
    title: string
    body: string
    user: {
      _id: string
      firstname: string
      lastname: string
      email: string
      avatar: string
      role: string
    }
  }
}

const FeedbackQuote: FC<FeedbackQuoteProps> = ({ feedback }) => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color1 = '#'
    let color2 = '#'
    for (let i = 0; i < 6; i++) {
      color1 += letters[Math.floor(Math.random() * 16)]
      color2 += letters[Math.floor(Math.random() * 16)]
    }

    const gradientColor = 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'

    return gradientColor
  }

  const [gradientColor, setGradientColor] = useState(getRandomColor())
  const [color, setColor] = useState(gradientColor)

  const { firstname, avatar, role } = feedback.user || {}

  const slicedFeedback = {
    ...feedback,
    body: feedback.body.length > 100 ? feedback.body.slice(0, 100) + '...' : feedback.body
  }

  useEffect(() => {
    setGradientColor(getRandomColor())
  }, [])

  return (
    <Fragment>
      <SRootBox color={color}>
        <SQuoteBox>
          <Typography variant={TYPOGRAPHY.BODY1} color='common.white'>
            {slicedFeedback.body}
          </Typography>
        </SQuoteBox>

        {feedback?.user && (
          <m.div style={{ display: 'flex', alignItems: 'center' }}>
            <Avatar src={avatar} sx={{ width: 30, height: 30, margin: 1 }} />
            <m.div>
              <Typography variant={TYPOGRAPHY.SUBTITLE2} color='common.white'>
                {firstname}
              </Typography>
              <Typography variant={TYPOGRAPHY.SUBTITLE2} color='common.white'>
                {role}
              </Typography>
            </m.div>
          </m.div>
        )}
      </SRootBox>
      <SQuoteArrowBox color={theme.palette.common.black} />
    </Fragment>
  )
}

export default FeedbackQuote
