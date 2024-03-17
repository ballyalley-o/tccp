import { useState, Fragment } from 'react'
import { Field, Form, FormSpy } from 'react-final-form'
import { Box } from '@mui/material'
import { FormFeedback, AppForm, PasswordField, FormButtonRedir, email, required } from 'component/form'
import { MotionContainer } from 'component/motion'
import { Meta } from 'component/meta'
import { AuthBranding } from 'section/auth'
import withRoot from 'withroot'
import { AuthPath } from 'route/path'
import { LABEL, KEY } from 'constant'
import { FORM } from 'section/auth'

function LogIn() {
  const [sent, setSent] = useState(false)

  const validate = (values: { [index: string]: string }) => {
    const errors = required([KEY.EMAIL, KEY.PASSWORD], values)

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
    <MotionContainer>
      <Meta title={LABEL.LOG_IN} />
      <AppForm isLogin>
        <Fragment>
          <AuthBranding />
        </Fragment>
        <Form onSubmit={handleSubmit} subscription={{ submitting: true }} validate={validate}>
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component='form' onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field disabled={submitting || sent} {...FORM.EMAIL} />
              <PasswordField submitting={submitting} sent={sent} />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButtonRedir
                submitting={submitting}
                sent={sent}
                button={LABEL.LOG_IN}
                label={LABEL.NOT_A_MEMBER}
                labelSub={LABEL.REGISTER_Sub}
                href={AuthPath.REGISTER}
              />
            </Box>
          )}
        </Form>
      </AppForm>
    </MotionContainer>
  )
}

export default withRoot(LogIn)
