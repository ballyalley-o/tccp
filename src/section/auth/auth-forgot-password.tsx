import { Link, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { AuthPath } from 'route/path'
import { LABEL } from 'constant'

const AuthForgotPassword = () => {
  const theme = useTheme()
  return (
    <Typography variant='subtitle2' align='center'>
      <Link
        underline='always'
        href={AuthPath.FORGOT_PASSWORD}
        sx={{
          color: theme.palette.grey[500],
          '&:hover': {
            color: theme.palette.common.white,
            textDecoration: 'none',
          },
        }}
      >
        {LABEL.FORGOT_PASSWORD}
      </Link>
    </Typography>
  )
}

export default AuthForgotPassword
