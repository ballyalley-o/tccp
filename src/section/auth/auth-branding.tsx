import { m } from 'framer-motion'
import { Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Logo } from 'component/logo'
import { ASSET, GLOBAL } from 'config'
import { MotionContainer, MotionText, varFade } from 'component/motion'

const AuthBranding = () => {
  const theme = useTheme()
  return (
    <MotionContainer>
      <Grid container alignItems='center' flexDirection='column' flex={1}>
        <Logo width={80} src={ASSET.BRAND_ALT} />
        <MotionText
          text={GLOBAL.APP_NAME}
          sx={{ typography: 'h5' }}
          variants={
            varFade({
              durationIn: 0.8,
              delay: 0.5,
            }).inUp
          }
        />
      </Grid>
    </MotionContainer>
  )
}

export default AuthBranding
