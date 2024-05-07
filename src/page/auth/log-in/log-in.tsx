import { useState, useEffect, Fragment, ChangeEvent, BaseSyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import * as Yup from 'yup'
import { useAuthContext } from 'auth'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { FormField, FormProvider } from 'component/form'
import { Box, FormControlLabel, Checkbox } from '@mui/material'
import { AppForm, FormButtonRedir, email, required } from 'component/form'
import { MotionContainer } from 'component/motion'
import { Meta } from 'component/meta'
import { AuthBranding } from 'section/auth'
import { AuthPath } from 'route/path'
import { FORM } from 'section/auth'
import { useSnackbar } from 'hook/use-snack'
import { LABEL, KEY, LOCAL_STORAGE, RESPONSE, COLOR } from 'constant'
import withRoot from 'withroot'

function LogIn() {
  const [email, setEmail] = useState('')
  const [remember, setRemember] = useState(false)
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const { enqueueSnackbar: snack } = useSnackbar()
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
      if (login) {
        await login(data)
        // navigate(RootPath.ROOT_PARAM)

        if (remember) {
          const userInfo = {
            email: data.email,
            remember
          }

          localStorage.setItem(LOCAL_STORAGE.USER_INFO, JSON.stringify(userInfo))
        } else {
          localStorage.removeItem(LOCAL_STORAGE.USER_INFO)
        }
      } else {
        snack(RESPONSE.error.INVALID_CREDENTIAL, {
          variant: COLOR.ERROR
        })
        throw new Error(RESPONSE.error.INVALID_CREDENTIAL)
      }
    } catch (error: any) {
      snack(error?.data?.message, { variant: COLOR.ERROR })
      reset()
      if (error?.data?.message === RESPONSE.error.INVALID_CREDENTIAL) {
        setError(KEY.EMAIL, { message: RESPONSE.error.EMAIL_INVALID })
        setError(KEY.PASSWORD, { message: RESPONSE.error.PASSWORD_INVALID })
      } else {
        snack(error?.data?.message, {
          variant: COLOR.ERROR
        })
        setError(KEY.EMAIL, { message: error.message })
      }
    }
  }

  return (
    <MotionContainer>
      <Meta title={LABEL.LOG_IN} />
      <AppForm isLogin>
        <Fragment>
          <Box marginBottom={2}>
            <AuthBranding />
          </Box>
        </Fragment>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Box marginBottom={2}>
            <FormField name={KEY.EMAIL} submitting={isSubmitting} sent={isSubmitSuccessful} errors={errors} {...FORM.EMAIL} />
          </Box>
          <Box marginBottom={2}>
            <FormField name={KEY.PASSWORD} submitting={isSubmitting} sent={isSubmitSuccessful} errors={errors} {...FORM.PASSWORD} />
          </Box>
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
