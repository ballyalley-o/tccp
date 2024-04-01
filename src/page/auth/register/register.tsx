import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRegisterMutation } from 'store/slice'
import { setCredential } from 'store/slice/auth'
import { Box } from '@mui/material'
import { FormProvider } from 'component/form'
import { Snack } from 'component/snack'
import { MotionContainer } from 'component/motion'
import { AppForm, email, required } from 'component/form'
import { Meta } from 'component/meta'

import { AuthBranding } from 'section/auth'
import { KEY, SIZE_TYPE, LABEL, RESPONSE } from 'constant'
import { RootPath } from 'route/path'
import withRoot from 'withroot'
import { RegisterFormLayout } from './register-layout'
import { useRegister } from './use-register'

function Register() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    username,
    setUsername,
    location,
    setLocation,
    role,
    setRole,
    control,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
    isSubmitting,
    isSubmitSuccessful
  } = useRegister()

  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [email, setEmail] = useState('')
  // const [username, setUsername] = useState('')
  // const [location, setLocation] = useState('')
  // const [role, setRole] = useState('')
  // const [avatar, setAvatar] = useState('')
  // const [sent, setSent] = useState(false)

  // const [register, { isLoading }] = useRegisterMutation()

  // const dispatch = useDispatch()
  // const navigate = useNavigate()

  // const { search } = useLocation()
  // const sp = new URLSearchParams(search)
  // const redirect = sp.get('redirect') || '/'

  // const registerSchema = Yup.object().shape({
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
  //   defaultValues: {
  //     email: '',
  //     password: '',
  //     confirmPassword: '',
  //     username: '',
  //     location: '',
  //     role: '',
  //     avatar: ''
  //   }
  // })

  // const {
  //   control,
  //   handleSubmit,
  //   reset,
  //   setError,
  //   formState: { errors, isSubmitting, isSubmitSuccessful }
  // } = methods

  // const onSubmit = async (data: any) => {
  //   if (email) {
  //     data.email = email
  //   }
  //   if (password) {
  //     data.password = password
  //   }

  //   if (password !== confirmPassword) {
  //     setError(KEY.PASSWORD, { message: 'Passwords must match' })
  //     return
  //   }

  //   try {
  //     const res: IResponse = (await register({
  //       email: data.email,
  //       password: data.password,
  //       username: data.user,
  //       role: data.role
  //     }).unwrap()) as IResponse

  //     await dispatch(setCredential({ ...res }))

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
        {/* TODO: NEEDS REFACTORING */}
        {errors.email ? (
          <Snack severity='error' title={errors.email?.message || errors.password?.message || RESPONSE.error.DEFAULT} />
        ) : isLoading ? (
          <Box height={95} width='100%' />
        ) : isSubmitSuccessful ? (
          <Snack severity='success' title='Logged In' />
        ) : (
          <Box height={95} width='100%' />
        )}
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ mt: 6 }}>
            <RegisterFormLayout
              submitting={isSubmitting}
              sent={sent}
              control={control}
              firstname={firstname}
              setFirstname={setFirstname}
              lastname={lastname}
              role={role}
              setRole={setRole}
              setLastname={setLastName}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              email={email}
              setEmail={setEmail}
              username={username}
              setUsername={setUsername}
              location={location}
              setLocation={setLocation}
            />
          </Box>
        </FormProvider>
      </AppForm>
    </MotionContainer>
  )
}

export default withRoot(Register)
