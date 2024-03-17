import { useState } from 'react'
import { Box } from '@mui/material'
import { Form } from 'react-final-form'
import { MotionContainer } from 'component/motion'
import { AppForm, email, required } from 'component/form'
import { Meta } from 'component/meta'
import { AuthBranding } from 'section/auth'
import { KEY, SIZE_TYPE, LABEL } from 'constant'
import withRoot from 'withroot'
import { RegisterFormLayout } from './register-layout'

function Register() {
  const [sent, setSent] = useState(false)

  const validate = (values: { [index: string]: string }) => {
    const errors = required(
      [
        KEY.FIRST_NAME,
        KEY.LAST_NAME,
        KEY.EMAIL,
        KEY.PASSWORD,
        KEY.CONFIRM_PASSWORD,
      ],
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
    <MotionContainer>
      <Meta title={LABEL.REGISTER} />
      <AppForm size={SIZE_TYPE.lg}>
        <AuthBranding />
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
              <RegisterFormLayout submitting={submitting} sent={sent} />
            </Box>
          )}
        </Form>
      </AppForm>
    </MotionContainer>
  )
}

export default withRoot(Register)
