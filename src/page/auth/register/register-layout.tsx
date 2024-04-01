import { useState } from 'react'
import { Grid } from '@mui/material'
import { PasswordField, FormField, RoleField, UploadField } from 'component/form'
import { FormButtonRedir } from 'component/form'
import { LABEL, BUTTON } from 'constant'
import { AuthPath } from 'route/path'
import { FORM } from 'section/auth'

interface FormFieldExtendedProps extends FormFieldProps {
  firstname: string
  setFirstname: (value: string) => void
  lastname: string
  setLastname: (value: string) => void
  password: string
  setPassword: (value: string) => void
  confirmPassword: string
  setConfirmPassword: (value: string) => void
  role: string
  email: string
  setEmail: (value: string) => void
  username: string
  setUsername: (value: string) => void
  location: string
  setLocation: (value: string) => void
}

function RegisterFormLayout({
  submitting,
  sent,
  control,
  firstname,
  setFirstname,
  lastname,
  setLastname,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  role,
  email,
  setEmail,
  username,
  setUsername,
  location,
  setLocation
}: FormFieldExtendedProps) {
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [password, setPassword] = useState('')
  // const [confirmPassword, setConfirmPassword] = useState('')
  // const [email, setEmail] = useState('')
  // const [username, setUsername] = useState('')
  // const [location, setLocation] = useState('')

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormField submitting={submitting} sent={sent} control={control} {...FORM.FIRST_NAME} value={firstname} setValue={setFirstname} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField submitting={submitting} sent={sent} control={control} {...FORM.LAST_NAME} value={lastname} setValue={setLastname} />
          </Grid>
        </Grid>
        <FormField submitting={submitting} sent={sent} control={control} {...FORM.EMAIL} value={email} setValue={setEmail} />
        <PasswordField submitting={submitting} sent={sent} value={password} setValue={setPassword} control={control} />
        <PasswordField isConfirm submitting={submitting} sent={sent} value={confirmPassword} setValue={setConfirmPassword} control={control} />
        <FormButtonRedir
          submitting={submitting}
          sent={sent}
          button={BUTTON.REGISTER}
          label={LABEL.ALREADY_MEMBER}
          labelSub={LABEL.LOGIN_Sub}
          href={AuthPath.LOG_IN}
          control={control}
        />
      </Grid>
      <Grid item xs={6}>
        <FormField submitting={submitting} sent={sent} control={control} {...FORM.GITHUB_USERNAME} value={username} setValue={setUsername} isGithub />
        <FormField
          submitting={submitting}
          sent={sent}
          control={control}
          {...FORM.LOCATION}
          type='address'
          value={location}
          setValue={setLocation}
          required
        />
        <RoleField />
        <Grid item lg={12}>
          <UploadField />
        </Grid>
      </Grid>
    </Grid>
  )
}

export { RegisterFormLayout }
