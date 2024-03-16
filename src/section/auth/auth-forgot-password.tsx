import { FC, Fragment } from 'react'
import { Link, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { AuthPath } from 'route/path'
import { LABEL } from 'constant'

interface AuthForgotPasswordProps {
  label: string
  labelSub: string
  href: string
}

const AuthForgotPassword = ({
  label,
  labelSub,
  href,
}: AuthForgotPasswordProps) => {
  const theme = useTheme()
  return (
    <Fragment>
      <Typography variant='subtitle2' align='center' color='grey.500'>
        {label}
        <Link
          href={href}
          align='center'
          sx={{
            color: theme.palette.secondary.main,
            '&:hover': {
              color: theme.palette.common.white,
              textDecoration: 'none',
            },
          }}
        >
          {labelSub}
        </Link>
      </Typography>
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
    </Fragment>
  )
}

export default AuthForgotPassword
