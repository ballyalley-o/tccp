import { useState } from 'react'
import { Grid } from '@mui/material'
import { FormField, RoleField, UploadField } from 'component/form'
import { FormButtonRedir } from 'component/form'
import { LABEL, BUTTON, KEY } from 'constant'
import { AuthPath } from 'route/path'
import { FORM } from 'section/auth'

function RegisterFormLayout({ submitting, sent, register, methods, handleSubmit, onSubmit, errors }: FormFieldProps) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormField submitting={submitting} sent={sent} name={KEY.FIRST_NAME} {...FORM.FIRST_NAME} errors={errors} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField submitting={submitting} sent={sent} name={KEY.LAST_NAME} {...FORM.LAST_NAME} errors={errors} />
          </Grid>
        </Grid>
        <FormField submitting={submitting} sent={sent} name={KEY.EMAIL} {...FORM.EMAIL} errors={errors} />
        <FormField submitting={submitting} sent={sent} name={KEY.PASSWORD} {...FORM.PASSWORD} errors={errors} />
        <FormField submitting={submitting} sent={sent} name={KEY.CONFIRM_PASSWORD} {...FORM.CONFIRM_PASSWORD} errors={errors} isConfirm />
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
        <FormField isGithub submitting={submitting} sent={sent} name={KEY.GITHUB_USERNAME} errors={errors} {...FORM.GITHUB_USERNAME} />
        <FormField submitting={submitting} type='address' sent={sent} name={KEY.LOCATION} errors={errors} {...FORM.LOCATION} />
        <RoleField submitting={submitting} sent={sent} errors={errors} />
        <Grid item lg={12}>
          <UploadField />
        </Grid>
      </Grid>
    </Grid>
  )
}

export { RegisterFormLayout }
