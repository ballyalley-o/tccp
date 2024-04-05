import { useState, useEffect, Fragment, ChangeEvent, BaseSyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormField, FormProvider } from 'component/form'
import { Box, Input, FormControlLabel, Checkbox } from '@mui/material'
import { AppForm, FormButtonRedir, email, required } from 'component/form'
import { MotionContainer } from 'component/motion'
import { Meta } from 'component/meta'
import { Snack } from 'component/snack'
import { AuthBranding } from 'section/auth'
import { AuthPath, RootPath } from 'route/path'
import { FORM } from 'section/auth'
import { useLoginMutation, setCredential } from 'store/slice/auth'
import { LABEL, KEY, LOCAL_STORAGE, RESPONSE } from 'constant'
import withRoot from 'withroot'

function LogIn() {
  const [email, setEmail] = useState('')
  const [remember, setRemember] = useState(false)
  const [login, { isLoading }] = useLoginMutation()
  const { isAuthenticated } = useSelector((state: { auth: { isAuthenticated: boolean } }) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginSchema = Yup.object().shape({
    email: Yup.string().email(),
    password: Yup.string(),
    remember: Yup.boolean()
  })

  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email,
      password: ''
    }
  })

  const {
    register,
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
    if (email) {
      data.email = email
    }

    try {
      if (remember) {
        const userInfo = {
          email: data.email,
          remember
        }

        localStorage.setItem(LOCAL_STORAGE.USER_INFO, JSON.stringify(userInfo))
      } else {
        localStorage.removeItem(LOCAL_STORAGE.USER_INFO)
      }
      const res: IResponse = (await login({
        email: data.email,
        password: data.password,
        isAuthenticated: data.isAuthenticated,
        user: data.user
      }).unwrap()) as IResponse
      dispatch(
        setCredential({
          ...res
        })
      )

      if (res?.message) {
        throw new Error(res.message)
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
          severity='error'
          title={errors.email?.message || errors.password?.message || RESPONSE.error.DEFAULT}
          condition={errors ? true : false}
        />
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name={KEY.EMAIL}
            submitting={isSubmitting}
            sent={isSubmitSuccessful}
            {...FORM.EMAIL}
            register={register(KEY.EMAIL)}
            errors={errors}
          />
          <FormField
            name={KEY.PASSWORD}
            submitting={isSubmitting}
            sent={isSubmitSuccessful}
            register={register(KEY.PASSWORD)}
            {...FORM.PASSWORD}
            errors={errors}
          />
          <Controller
            control={control}
            name={KEY.EMAIL}
            render={({ field }) => (
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      {...field}
                      checked={remember}
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
            control={control}
          />
        </FormProvider>
      </AppForm>
    </MotionContainer>
  )
}

export default withRoot(LogIn)
