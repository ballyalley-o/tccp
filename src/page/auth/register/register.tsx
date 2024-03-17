import { useState } from 'react'
import { Box, Grid, MenuItem, IconButton, InputAdornment } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Field, Form, FormSpy } from 'react-final-form'
import { MotionContainer } from 'component/motion'
import {
  AppForm,
  FormButton,
  FormFeedback,
  email,
  required,
} from 'component/form'
import { TextField } from 'component'
import { UploadField } from 'component/upload-field'
import { AuthForgotPassword, AuthBranding, FORM } from 'section/auth'
import { AuthPath } from 'route/path'
import { KEY, LABEL, BUTTON } from 'constant'
import { useIcon } from 'hook'
import { ICON_WEB_NAME, APP_FIELD, ICON_LOC_NAME } from 'config'
import withRoot from 'withroot'

function Register() {
  const [sent, setSent] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const theme = useTheme()
  const { Icon: WebIcon, iconSrc: eyeHideSrc } = useIcon(ICON_WEB_NAME.EYE_HIDE)
  const { iconSrc: eyeOffSrc } = useIcon(ICON_WEB_NAME.EYE_OFF)
  const { Icon: LocIcon, iconSrc: githubSrc } = useIcon(ICON_LOC_NAME.GITHUB)

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
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Field
                        disabled={submitting || sent}
                        {...FORM.FIRST_NAME}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Field
                        disabled={submitting || sent}
                        {...FORM.LAST_NAME}
                      />
                    </Grid>
                  </Grid>
                  <Field disabled={submitting || sent} {...FORM.EMAIL} />
                  <Field
                    disabled={submitting || sent}
                    {...FORM.PASSWORD}
                    type={showPassword ? KEY.TEXT : KEY.PASSWORD}
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
                    sx={{
                      height: APP_FIELD.HEIGHT,
                      '&:focus': {
                        color: 'primary.main',
                      },
                    }}
                  />
                  <Field
                    disabled={submitting || sent}
                    {...FORM.CONFIRM_PASSWORD}
                    type={showConfirmPassword ? KEY.TEXT : KEY.PASSWORD}
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
                    sx={{
                      height: APP_FIELD.HEIGHT,
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
                    {submitting || sent ? BUTTON.IN_PROGRESS : BUTTON.REGISTER}
                  </FormButton>
                  <AuthForgotPassword
                    label={LABEL.ALREADY_MEMBER}
                    labelSub={LABEL.LOGIN_Sub}
                    href={AuthPath.LOG_IN}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Field
                    disabled={submitting || sent}
                    {...FORM.GITHUB_USERNAME}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <LocIcon
                            icon={githubSrc}
                            color={theme.palette.common.white}
                          />
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Field disabled={submitting || sent} {...FORM.LOCATION} />

                  <TextField margin='normal' variant='standard' {...FORM.ROLE}>
                    <MenuItem value='' disabled>
                      {LABEL.SELECT_ROLE}
                    </MenuItem>
                    <MenuItem value={KEY.STUDENT}>{LABEL.STUDENT}</MenuItem>
                    <MenuItem value={KEY.TRAINER}>{LABEL.TRAINER}</MenuItem>
                    <MenuItem value={KEY.ADMIN}>{LABEL.ADMIN}</MenuItem>
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
