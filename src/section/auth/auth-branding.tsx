import { m } from 'framer-motion'
import { Grid, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Logo } from 'component/logo'
import { ASSET, GLOBAL } from 'config'

const AuthBranding = () => {
  const theme = useTheme()
  return (
    <m.div>
      <Grid container alignItems='center' flexDirection='column' flex={1}>
        <Logo width={80} src={ASSET.BRAND_ALT} />
        <Typography
          variant='h5'
          gutterBottom
          align='center'
          color={theme.palette.common.white}
        >
          {GLOBAL.APP_NAME}
        </Typography>
      </Grid>
    </m.div>
  )
}

export default AuthBranding
