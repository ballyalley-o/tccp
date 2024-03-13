import { Fragment, useState } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { Field, Form, FormSpy } from 'react-final-form'
import { Typography } from 'component'
import {
  AppForm,
  RFTextField,
  FormButton,
  FormFeedback,
  email,
  required,
} from 'component/form'
import { AuthForgotPassword, AuthBranding } from 'section/auth'
import withRoot from 'withroot'
import { GLOBAL } from 'config'

function Register() {
  const [sent, setSent] = useState(false)

  const validate = (values: { [index: string]: string }) => {
    const errors = required(
      ['firstName', 'lastName', 'email', 'password'],
      values
    )

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
      <AppForm>
        <Fragment>
          <AuthBranding />
          <Typography variant='body2' align='center'>
            <Link href='/premium-themes/onepirate/sign-in/' underline='always'>
              Already have an account?
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
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    disabled={submitting || sent}
                    autoComplete='given-name'
                    fullWidth
                    label='First name'
                    name='firstName'
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    disabled={submitting || sent}
                    autoComplete='family-name'
                    fullWidth
                    label='Last name'
                    name='lastName'
                    required
                  />
                </Grid>
              </Grid>
              <Field
                autoComplete='email'
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label='Email'
                margin='normal'
                name='email'
                required
              />
              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting || sent}
                required
                name='password'
                autoComplete='new-password'
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
                color='secondary'
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Register'}
              </FormButton>
            </Box>
          )}
        </Form>
        <AuthForgotPassword />
      </AppForm>
    </Fragment>
  )
}

export default withRoot(Register)
