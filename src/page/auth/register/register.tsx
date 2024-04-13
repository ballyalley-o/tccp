import { Box } from '@mui/material'
import { AuthBranding } from 'section/auth'
import { MotionContainer } from 'component/motion'
import { AppForm } from 'component/form'
import { Meta } from 'component/meta'
import { SIZE_TYPE, LABEL, RESPONSE, KEY } from 'constant'
import { RegisterFormLayout } from './register-layout'
import withRoot from 'withroot'

function Register() {
  return (
    <MotionContainer>
      <Meta title={LABEL.REGISTER} />
      <AppForm size={SIZE_TYPE.lg}>
        <AuthBranding />
        <Box sx={{ mt: 6 }}>
          <RegisterFormLayout />
        </Box>
      </AppForm>
    </MotionContainer>
  )
}

export default withRoot(Register)
