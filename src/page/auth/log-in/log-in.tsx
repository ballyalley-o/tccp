import { useState, Fragment } from 'react'
import { Field, Form, FormSpy } from 'react-final-form'
import { Box, Link, Grid } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Typography } from 'component'
import {
  FormButton,
  RFTextField,
  FormFeedback,
  AppForm,
  email,
  required,
} from 'component/form'
import { Logo } from 'component/logo'
import { Meta } from 'component/meta'
import { AuthForgotPassword } from 'section/auth'
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
      <Meta title={LABEL.LOG_IN} />
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
            </Box>
          )}
        </Form>
        <AuthForgotPassword
          href={AuthPath.REGISTER}
          label={LABEL.NOT_A_MEMBER}
          labelSub={LABEL.REGISTER_Sub}
        />
      </AppForm>
    </Fragment>
  )
}

export default withRoot(LogIn)
