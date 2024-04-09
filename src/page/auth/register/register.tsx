import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/material'
import { AuthBranding } from 'section/auth'
import { FormProvider } from 'component/form'
import { Snack } from 'component/snack'
import { MotionContainer } from 'component/motion'
import { AppForm } from 'component/form'
import { Meta } from 'component/meta'
import { SIZE_TYPE, LABEL, RESPONSE, KEY } from 'constant'
import withRoot from 'withroot'
import { RegisterFormLayout } from './register-layout'
import { useRegister } from 'page/auth/register'
import { setCredential } from 'store/slice/auth'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { RootPath } from 'route/path'
import { useRegisterMutation } from 'store/slice'
import { dispatch } from 'store'

function Register() {
  // const { register, methods, handleSubmit, onSubmit, errors, isLoading, isSubmitting, isSubmitSuccessful } = useRegister()
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  // const [reg, { isLoading }] = useRegisterMutation()

  // const registerSchema = Yup.object().shape({
  //   firstname: Yup.string().required(),
  //   lastname: Yup.string().required(),
  //   email: Yup.string().email().required(),
  //   password: Yup.string().required(),
  //   confirmPassword: Yup.string().oneOf([Yup.ref('password'), undefined], 'Passwords must match'),
  //   username: Yup.string(),
  //   location: Yup.string(),
  //   role: Yup.string(),
  //   avatar: Yup.string()
  // })

  // const methods = useForm({
  //   resolver: yupResolver(registerSchema),
  //   defaultValues: useMemo(
  //     () => ({
  //       firstname: '',
  //       lastname: '',
  //       email: '',
  //       password: '',
  //       confirmPassword: '',
  //       username: '',
  //       location: '',
  //       role: '',
  //       avatar: ''
  //     }),
  //     []
  //   )
  // })

  // const {
  //   handleSubmit,
  //   reset,
  //   setError,
  //   formState: { errors, isSubmitting, isSubmitSuccessful }
  // } = methods

  // const onSubmit = async (data: any) => {
  //   try {
  //     const res = (await reg(data).unwrap()) as IResponse
  //     dispatch(setCredential({ ...res }))

  //     console.log('data : ', data)

  //     if (res?.message) {
  //       throw new Error(res.message)
  //     }
  //     navigate(RootPath.ROOT_PARAM)
  //   } catch (error: any) {
  //     console.error('error : ', error || '')
  //     reset()
  //     setError(KEY.EMAIL, { message: error.message })
  //   }
  // }

  return (
    <MotionContainer>
      <Meta title={LABEL.REGISTER} />
      <AppForm size={SIZE_TYPE.lg}>
        <AuthBranding />

        {/* <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}> */}
        <Box sx={{ mt: 6 }}>
          <RegisterFormLayout />
        </Box>
        {/* </FormProvider> */}
      </AppForm>
    </MotionContainer>
  )
}

export default withRoot(Register)
