import { useState, Fragment } from 'react'
import { Field, Form, FormSpy } from 'react-final-form'
import { Box, Link } from '@mui/material'
import { Typography, AppNavBar, AppFooter } from 'component'
import {
  FormButton,
  RFTextField,
  FormFeedback,
  AppForm,
  email,
  required,
} from 'component/form'
import withRoot from 'withroot'
import { AuthPath } from 'route/path'
import { LABEL } from 'constant'

function LogIn() {
  const [sent, setSent] = useState(false)

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
      <AppNavBar />
      <AppForm>
        <Fragment>
          <Typography variant='h4' gutterBottom marked='center' align='center'>
            {LABEL.LOG_IN}
          </Typography>
          <Typography variant='body2' align='center'>
            {'Not a member yet? '}
            <Link href={AuthPath.REGISTER} align='center' underline='always'>
              Register here
            </Link>
          </Typography>
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
                size='large'
              />
              <Field
                fullWidth
                size='large'
                component={RFTextField}
                disabled={submitting || sent}
                required
                name='password'
                autoComplete='current-password'
                label='Password'
                type='password'
                margin='normal'
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
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size='large'
                color='secondary'
                fullWidth
              >
                {/* TODO: loading button */}
                {submitting || sent ? 'In progress…' : 'Log In'}
              </FormButton>
            </Box>
          )}
        </Form>
        <Typography align='center'>
          <Link underline='always' href={AuthPath.FORGOT_PASSWORD}>
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </Fragment>
  )
}

export default withRoot(LogIn)
