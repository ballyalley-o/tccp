import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Grid } from '@mui/material'
import { FormField, FormProvider, RoleField, UploadField } from 'component/form'
import { FormButtonRedir } from 'component/form'
import { useForm } from 'react-hook-form'
import { LABEL, BUTTON, KEY, RESPONSE } from 'constant'
import { AuthPath } from 'route/path'
import { FORM } from 'section/auth'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { RootPath } from 'route/path'
import { useRegisterMutation } from 'store/slice'
import { setCredential } from 'store/slice/auth'
import { dispatch } from 'store'
import { Snack } from 'component/snack'

function RegisterFormLayout({ submitting, sent, register }: FormFieldProps) {
  const navigate = useNavigate()
  const [reg, { isLoading }] = useRegisterMutation()

  const registerSchema = Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), undefined], 'Passwords must match'),
    username: Yup.string(),
    location: Yup.string(),
    role: Yup.string(),
    avatar: Yup.string()
  })

  const methods = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: useMemo(
      () => ({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        location: '',
        role: 'student',
        avatar: ''
      }),
      []
    )
  })

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = methods

  const onSubmit = async (data: any) => {
    try {
      const res = (await reg({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        password: data.password,
        username: data.username,
        location: data.location,
        role: data.role,
        avatar: data.avatar
      }).unwrap()) as IResponse
      // dispatch(setCredential({ ...res }))

      if (res?.message) {
        throw new Error(res.message)
      }

      reset()
      navigate(RootPath.ROOT_PARAM)
    } catch (error: any) {
      console.error('error : ', error || '')
      reset()
      setError(KEY.EMAIL, { message: error.message })
    }
  }

  return (
    <>
      <Snack
        severity={errors.email || errors.password ? 'error' : 'success'}
        title={
          errors.email?.message || errors.password?.message
            ? 'Invalid Credential'
            : isSubmitSuccessful
            ? 'Successful Registration'
            : RESPONSE.error.DEFAULT
        }
        condition={errors.email?.message || errors.password?.message || isSubmitSuccessful ? true : false}
      />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormField submitting={isSubmitting} sent={isSubmitSuccessful} name={KEY.FIRST_NAME} {...FORM.FIRST_NAME} errors={errors} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormField submitting={submitting} sent={isSubmitSuccessful} name={KEY.LAST_NAME} {...FORM.LAST_NAME} errors={errors} />
              </Grid>
            </Grid>
            <FormField submitting={isSubmitting} sent={isSubmitSuccessful} name={KEY.EMAIL} {...FORM.EMAIL} errors={errors} />
            <FormField submitting={isSubmitting} sent={isSubmitSuccessful} name={KEY.PASSWORD} {...FORM.PASSWORD} errors={errors} />
            <FormField
              submitting={isSubmitting}
              sent={isSubmitSuccessful}
              name={KEY.CONFIRM_PASSWORD}
              {...FORM.CONFIRM_PASSWORD}
              errors={errors}
              isConfirm
            />
            <FormButtonRedir
              submitting={isSubmitting}
              sent={sent}
              button={BUTTON.REGISTER}
              label={LABEL.ALREADY_MEMBER}
              labelSub={LABEL.LOGIN_Sub}
              href={AuthPath.LOG_IN}
            />
          </Grid>
          <Grid item xs={6}>
            <FormField
              isGithub
              submitting={isSubmitting}
              sent={isSubmitSuccessful}
              name={KEY.GITHUB_USERNAME}
              errors={errors}
              {...FORM.GITHUB_USERNAME}
            />
            <FormField submitting={isSubmitting} type='address' sent={isSubmitSuccessful} name={KEY.LOCATION} errors={errors} {...FORM.LOCATION} />
            <RoleField submitting={isSubmitting} sent={isSubmitSuccessful} errors={errors} />
            <Grid item lg={12}>
              <UploadField />
            </Grid>
          </Grid>
        </Grid>
      </FormProvider>
    </>
  )
}

export { RegisterFormLayout }
