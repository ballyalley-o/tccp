import { Grid } from '@mui/material'
import { Field, FormSpy } from 'react-final-form'
import {
  FormFeedback,
  PasswordField,
  GithubField,
  RoleField,
  UploadField,
} from 'component/form'
import { FormButtonRedir } from 'component/form'
import { LABEL, BUTTON } from 'constant'
import { AuthPath } from 'route/path'
import { FORM } from 'section/auth'

function RegisterFormLayout({ submitting, sent }: FormFieldProps) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Field disabled={submitting || sent} {...FORM.FIRST_NAME} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Field disabled={submitting || sent} {...FORM.LAST_NAME} />
          </Grid>
        </Grid>
        <Field disabled={submitting || sent} {...FORM.EMAIL} />
        <PasswordField submitting={submitting} sent={sent} />
        <PasswordField submitting={submitting} sent={sent} isConfirm />
        <FormSpy subscription={{ submitError: true }}>
          {({ submitError }) =>
            submitError ? (
              <FormFeedback error sx={{ mt: 2 }}>
                {submitError}
              </FormFeedback>
            ) : null
          }
        </FormSpy>
        <FormButtonRedir
          submitting={submitting}
          sent={sent}
          button={BUTTON.REGISTER}
          label={LABEL.ALREADY_MEMBER}
          labelSub={LABEL.LOGIN_Sub}
          href={AuthPath.LOG_IN}
        />
      </Grid>
      <Grid item xs={6}>
        <GithubField submitting={submitting} sent={sent} />
        <Field disabled={submitting || sent} {...FORM.LOCATION} />
        <RoleField />
        <Grid item lg={12}>
          <UploadField />
        </Grid>
      </Grid>
    </Grid>
  )
}

export { RegisterFormLayout }
