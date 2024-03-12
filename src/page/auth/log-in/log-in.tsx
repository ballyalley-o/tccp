import { useState, Fragment } from 'react'
import { Field, Form, FormSpy } from 'react-final-form'
import { Box, Link, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Typography, AppNavBar, AppFooter } from 'component'
import {
  FormButton,
  RFTextField,
  FormFeedback,
  AppForm,
  email,
  required,
} from 'component/form'
import { default as Logo } from 'component/logo'
import withRoot from 'withroot'
import { AuthPath } from 'route/path'
import { LABEL } from 'constant'
import { GLOBAL, ASSET } from 'config'

function LogIn() {
  const [sent, setSent] = useState(false)
  const theme = useTheme()

  const validate = (values: { [index: string]: string }) => {
    const errors = required(['email', 'password'], values)

    if (!errors.email) {
      const emailError = email(values.email)
      if (emailError) {
        errors.email = emailError
      }
    }

    return errors
  }

  const handleSubmit = () => {
    setSent(true)
  }

  return (
    <Fragment>
      {/* <AppNavBar /> */}
      <AppForm>
        <Fragment>
          <Grid container alignItems='center' flexDirection='column' flex={1}>
            <Logo width={80} src={ASSET.BRAND_ALT} />
            <Typography
              variant='h5'
              gutterBottom
              marked='center'
              align='center'
              color={theme.palette.common.white}
            >
              {GLOBAL.APP_NAME}
            </Typography>
          </Grid>
        </Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box
              component='form'
              onSubmit={handleSubmit2}
              noValidate
              sx={{ mt: 6 }}
            >
              <Field
                autoComplete='email'
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label='Email'
                margin='normal'
                name='email'
                required
                size='small'
                color='secondary'
              />
              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name='password'
                autoComplete='current-password'
                label='Password'
                type='password'
                margin='normal'
                size='small'
                sx={{
                  color: theme.palette.secondary.main,
                }}
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 5, mb: 2 }}
                disabled={submitting || sent}
                size='medium'
                color='secondary'
                fullWidth
              >
                {/* TODO: loading button */}
                {submitting || sent ? 'In progress…' : 'Log In'}
              </FormButton>
              <Typography variant='subtitle2' align='center' color='grey.500'>
                {'Not a member yet? '}
                <Link
                  href={AuthPath.REGISTER}
                  align='center'
                  sx={{
                    color: theme.palette.secondary.main,
                    '&:hover': {
                      color: theme.palette.common.white,
                      textDecoration: 'none',
                    },
                  }}
                >
                  {LABEL.REGISTER_Sub}
                </Link>
              </Typography>
            </Box>
          )}
        </Form>
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
      </AppForm>
    </Fragment>
  )
}

export default withRoot(LogIn)
