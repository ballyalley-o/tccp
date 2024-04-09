import { useState, useEffect, Fragment, ChangeEvent, BaseSyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormField, FormProvider } from 'component/form'
import { useAuthContext } from 'auth'
import { Box, FormControlLabel, Checkbox } from '@mui/material'
import { AppForm, FormButtonRedir, email, required } from 'component/form'
import { MotionContainer } from 'component/motion'
import { Meta } from 'component/meta'
import { Snack } from 'component/snack'
import { AuthBranding } from 'section/auth'
import { AuthPath, RootPath } from 'route/path'
import { FORM } from 'section/auth'
import { LABEL, KEY, LOCAL_STORAGE, RESPONSE, COLOR } from 'constant'
import withRoot from 'withroot'

function LogIn() {
  const [email, setEmail] = useState('')
  const [remember, setRemember] = useState(false)
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const { isAuthenticated } = useSelector((state: { auth: { isAuthenticated: boolean } }) => state.auth)

  const loginSchema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string(),
    remember: Yup.boolean()
  })

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email,
      password: '',
      remember
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
    const getUserInfo = localStorage.getItem(LOCAL_STORAGE.USER_INFO)

    if (getUserInfo) {
      const { email } = JSON.parse(getUserInfo)
      setEmail(email)
      setRemember(true)
    }
  }, [setEmail, setRemember])

  const onSubmit = async (data: any) => {
    try {
      console.log('data : ', data)
      if (login) {
        await login(data)
      }

      if (remember) {
        const userInfo = {
          email: data.email,
          remember
        }

        localStorage.setItem(LOCAL_STORAGE.USER_INFO, JSON.stringify(userInfo))
      } else {
        localStorage.removeItem(LOCAL_STORAGE.USER_INFO)
      }

      if (isAuthenticated) {
        navigate(RootPath.ROOT_PARAM)
      }
    } catch (error: any) {
      console.error('error : ', error || '')
      reset()
      setError(KEY.EMAIL, { message: error.message })
    }
  }

  return (
    <MotionContainer>
      <Meta title={LABEL.LOG_IN} />
      <AppForm isLogin>
        <Fragment>
          <AuthBranding />
        </Fragment>
        <Snack
          severity={errors.email || errors.password ? COLOR.ERROR : COLOR.SUCCESS}
          title={
            errors.email?.message || errors.password?.message
              ? RESPONSE.error.INVALID_CREDENTIAL
              : isSubmitSuccessful
              ? RESPONSE.success.LOGIN
              : RESPONSE.error.DEFAULT
          }
          condition={errors.email?.message || errors.password?.message || isSubmitSuccessful ? true : false}
        />
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <FormField name={KEY.EMAIL} submitting={isSubmitting} sent={isSubmitSuccessful} errors={errors} {...FORM.EMAIL} />
          <FormField name={KEY.PASSWORD} submitting={isSubmitting} sent={isSubmitSuccessful} errors={errors} {...FORM.PASSWORD} />
          <Controller
            control={control}
            name={KEY.REMEMBER}
            render={({ field }) => (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={remember}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => setRemember(!remember)}
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
            control={control}
          />
        </FormProvider>
      </AppForm>
    </MotionContainer>
  )
}

export default withRoot(LogIn)
