import { useState } from 'react'
import {
  Box,
  Grid,
  MenuItem,
  IconButton,
  InputAdornment,
  Button,
  Input,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Field, Form, FormSpy } from 'react-final-form'
import { MotionContainer } from 'component/motion'
import {
  AppForm,
  RFTextField,
  FormButton,
  FormFeedback,
  email,
  required,
} from 'component/form'
import { TextField } from 'component'
import { UploadField } from 'component/uploadfield'
import { AuthForgotPassword, AuthBranding } from 'section/auth'
import { AuthPath } from 'route/path'
import withRoot from 'withroot'
import { LABEL } from 'constant'
import { useIcon } from 'hook'
import { ICON_WEB_NAME } from 'config'

function Register() {
  const [sent, setSent] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const theme = useTheme()
  const { Icon: WebIcon, iconSrc: eyeHideSrc } = useIcon(ICON_WEB_NAME.EYE_HIDE)
  const { iconSrc: eyeOffSrc } = useIcon(ICON_WEB_NAME.EYE_OFF)

  const validate = (values: { [index: string]: string }) => {
    const errors = required(
      ['firstName', 'lastName', 'email', 'password'],
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

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleToggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleSubmit = () => {
    setSent(true)
  }

  return (
    <MotionContainer>
      <AppForm size='lg'>
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
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        autoFocus
                        variant='outlined'
                        component={RFTextField}
                        disabled={submitting || sent}
                        autoComplete='given-name'
                        fullWidth
                        label='First name'
                        name='firstName'
                        required
                        sx={{ height: 90 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        component={RFTextField}
                        disabled={submitting || sent}
                        autoComplete='family-name'
                        fullWidth
                        label='Last name'
                        name='lastName'
                        required
                        sx={{ height: 90 }}
                      />
                    </Grid>
                  </Grid>
                  <Field
                    autoComplete='email'
                    component={RFTextField}
                    disabled={submitting || sent}
                    fullWidth
                    label='Email'
                    margin='normal'
                    name='email'
                    required
                    sx={{ height: 90 }}
                  />
                  <Field
                    fullWidth
                    component={RFTextField}
                    disabled={submitting || sent}
                    required
                    name='password'
                    autoComplete='new-password'
                    label='Password'
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position='end'
                          sx={{
                            width: 'auto',
                          }}
                        >
                          <IconButton
                            edge='start'
                            aria-label='toggle password visibility'
                            onClick={handleToggleShowPassword}
                            size='small'
                            sx={{
                              width: 'auto',
                              color: theme.palette.text.secondary,
                            }}
                          >
                            {
                              <WebIcon
                                icon={showPassword ? eyeHideSrc : eyeOffSrc}
                              />
                            }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    margin='normal'
                    sx={{
                      height: 90,
                      '&:focus': {
                        color: 'primary.main',
                      },
                    }}
                  />
                  <Field
                    fullWidth
                    component={RFTextField}
                    disabled={submitting || sent}
                    required
                    name='confirm password'
                    autoComplete='confirm-password'
                    label='Confirm password'
                    type={showConfirmPassword ? 'text' : 'password'}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          position='end'
                          sx={{
                            width: 'auto',
                          }}
                        >
                          <IconButton
                            size='small'
                            edge='start'
                            aria-label='toggle password visibility'
                            onClick={handleToggleShowConfirmPassword}
                            sx={{
                              width: 'auto',
                              color: theme.palette.text.secondary,
                            }}
                          >
                            {
                              <WebIcon
                                icon={
                                  showConfirmPassword ? eyeHideSrc : eyeOffSrc
                                }
                              />
                            }
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    margin='normal'
                    sx={{
                      height: 90,
                      '&:focus': {
                        color: 'primary.main',
                      },
                    }}
                  />
                  <FormSpy subscription={{ submitError: true }}>
                    {({ submitError }) =>
                      submitError ? (
                        <FormFeedback error sx={{ mt: 2 }}>
                          {submitError}
                        </FormFeedback>
                      ) : null
                    }
                  </FormSpy>
                  <FormButton
                    sx={{ mt: 3, mb: 2, fontSize: 14 }}
                    disabled={submitting || sent}
                    color='secondary'
                    fullWidth
                  >
                    {submitting || sent ? 'In progress…' : 'Register'}
                  </FormButton>
                  <AuthForgotPassword
                    label={LABEL.ALREADY_MEMBER}
                    labelSub={LABEL.LOGIN_Sub}
                    href={AuthPath.LOG_IN}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    autoFocus
                    component={RFTextField}
                    disabled={submitting || sent}
                    autoComplete='given-name'
                    fullWidth
                    label='Github username'
                    name='username'
                    required
                    sx={{ height: 90 }}
                  />

                  <Field
                    autoComplete='location'
                    component={RFTextField}
                    disabled={submitting || sent}
                    fullWidth
                    label='Location'
                    margin='normal'
                    name='location'
                    sx={{ height: 90 }}
                  />
                  <TextField
                    select
                    size='medium'
                    variant='standard'
                    label='Role'
                    fullWidth
                    margin='normal'
                    SelectProps={{
                      native: false,
                    }}
                  >
                    <MenuItem value='' disabled>
                      Select your role
                    </MenuItem>
                    <MenuItem value='role1'>Role 1</MenuItem>
                    <MenuItem value='role2'>Role 2</MenuItem>
                    <MenuItem value='role3'>Role 3</MenuItem>
                  </TextField>
                  <Grid item lg={12}>
                    <UploadField />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          )}
        </Form>
      </AppForm>
    </MotionContainer>
  )
}

export default withRoot(Register)
