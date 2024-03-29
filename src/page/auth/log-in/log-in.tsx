import { useState, useEffect, Fragment, ChangeEvent, BaseSyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormProvider } from 'component/form'
import { Box, Input, FormControlLabel, Checkbox } from '@mui/material'
import { AppForm, PasswordField, FormButtonRedir, email, required } from 'component/form'
import { MotionContainer } from 'component/motion'
import { Meta } from 'component/meta'
import { AuthBranding } from 'section/auth'
import { AuthPath, RootPath } from 'route/path'
import { FORM } from 'section/auth'
import { Snack } from 'component/snack'
import { useLoginMutation } from 'store/slice/auth/endpoint'
import { setCredential } from 'store/slice/auth'
import { LABEL, KEY, LOCAL_STORAGE } from 'constant'
import withRoot from 'withroot'

interface IResponse {
  email: string
  name: string
  token: string
  password: string
  message: string
}

function LogIn() {
  const [uemail, setEmail] = useState('')
  const [upassword, setPassword] = useState('')
  const [uremember, setRemember] = useState(false)
  const [login, { isLoading }] = useLoginMutation()
  // const { userInfo } = useSelector((state: { auth: { userInfo: any } }) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const validate = (values: BaseSyntheticEvent<object, any, any> | undefined) => {
    if (!values || typeof values !== 'object') return {}
    const valuesObj = values as { [index: string]: any }
    const errors = required([KEY.EMAIL, KEY.PASSWORD], valuesObj)
    if (!errors.email) {
      const emailError = email(valuesObj.email)
      if (emailError) {
        errors.email = emailError
      }
    }
    return errors
  }

  const loginSchema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string(),
    remember: Yup.boolean()
  })

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: uemail,
      password: upassword
    }
  })

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = methods

  useEffect(() => {
    const storedEmail = localStorage.getItem(LOCAL_STORAGE.USER_EMAIL)
    const storedPassword = localStorage.getItem(LOCAL_STORAGE.USER_PASSWORD)
    const storedRemember = localStorage.getItem(LOCAL_STORAGE.REMEMBER)
    if (storedEmail && storedPassword && storedRemember) {
      setEmail(storedEmail)
      setPassword(storedPassword)
      setRemember(true)
    }
  }, [setEmail, setPassword, setRemember])

  const onSubmit = async (data: any) => {
    if (uemail) {
      data.email = uemail
    }
    if (upassword) {
      data.password = upassword
    }

    try {
      if (uremember) {
        localStorage.setItem(LOCAL_STORAGE.USER_EMAIL, data.email)
        localStorage.setItem(LOCAL_STORAGE.USER_PASSWORD, data.password)
        localStorage.setItem(LOCAL_STORAGE.REMEMBER, 'true')
      } else {
        localStorage.removeItem(LOCAL_STORAGE.USER_EMAIL)
        localStorage.removeItem(LOCAL_STORAGE.USER_PASSWORD)
        localStorage.removeItem(LOCAL_STORAGE.REMEMBER)
      }
      const res: IResponse = (await login({ email: data.email, password: data.password }).unwrap()) as IResponse
      dispatch(
        setCredential({
          ...res
        })
      )

      if (res?.message) {
        throw new Error(res.message)
      }

      navigate(RootPath.ROOT_PARAM)
    } catch (error: any) {
      console.error('error : ', error || '')
      reset()
      setError('email', { message: error.message })
    }
  }

  return (
    <MotionContainer>
      <Meta title={LABEL.LOG_IN} />
      <AppForm isLogin>
        <Fragment>
          <AuthBranding />
        </Fragment>
        {/* TODO: NEEDS REFACTORING */}
        {errors.email ? (
          <Snack severity='error' title={errors.email?.message || errors.password?.message || 'Something went wrong. Please try again later.'} />
        ) : isLoading ? (
          <Box height={95} width='100%' />
        ) : isSubmitSuccessful ? (
          <Snack severity='success' title='Logged In' />
        ) : (
          <Box height={95} width='100%' />
        )}
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name={KEY.EMAIL}
            render={({ field }) => (
              <Input
                {...field}
                autoComplete={FORM.EMAIL.autoComplete}
                disabled={isSubmitting || isSubmitSuccessful}
                title={FORM.EMAIL.label}
                placeholder={FORM.EMAIL.placeholder}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                value={uemail}
                name='uemail'
                color='secondary'
                type='email'
                margin='dense'
                required
                autoFocus
                fullWidth
                sx={{
                  color: 'secondary.main',
                  '&:focus': {
                    color: 'secondary.main',
                    backgroundColor: 'secondary.main'
                  },
                  padding: 1,
                  marginY: 1
                }}
              />
            )}
            disabled={isSubmitting || isSubmitSuccessful}
            rules={{ required: true }}
          />
          <PasswordField submitting={isSubmitting} sent={isSubmitSuccessful} value={upassword} setValue={setPassword} control={control} />

          <Controller
            control={control}
            name='email'
            render={({ field }) => (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={uremember}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setRemember(e.currentTarget.checked)}
                      color='secondary'
                      size='small'
                    />
                  }
                  label={<span style={{ fontSize: '1rem' }}>Remember me</span>}
                />
              </Box>
            )}
          />

          <FormButtonRedir
            submitting={isSubmitting}
            sent={isSubmitSuccessful}
            button={LABEL.LOG_IN}
            label={LABEL.NOT_A_MEMBER}
            labelSub={LABEL.REGISTER_Sub}
            href={AuthPath.REGISTER}
          />
        </FormProvider>
      </AppForm>
    </MotionContainer>
  )
}

export default withRoot(LogIn)
