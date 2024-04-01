import { ChangeEvent } from 'react'
import { InputAdornment, Input, TextField } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Controller } from 'react-hook-form'
import { useIcon } from 'hook'
import { ICON_LOC_NAME } from 'config'
import { KEY } from 'constant'
import { FORM } from 'section/auth'

interface ExtendedFormFieldProps extends FormFieldProps {
  name: string
  label: string
  value: string
  type?: string
  placeholder: string
  autoComplete: string
  isGithub?: boolean
  required?: boolean
  setValue: (value: string) => void
}

const FormField = ({
  submitting,
  sent,
  control,
  name,
  label,
  type = 'text',
  placeholder,
  autoComplete,
  value,
  setValue,
  isGithub,
  required = false
}: ExtendedFormFieldProps) => {
  const { Icon: LocIcon, iconSrc: githubSrc } = useIcon(ICON_LOC_NAME.GITHUB)

  const theme = useTheme()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          autoComplete={autoComplete}
          disabled={submitting || sent}
          variant='filled'
          label={label}
          placeholder={placeholder}
          value={value}
          name={name}
          color='primary'
          type={type}
          margin='dense'
          onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
          {...(isGithub && {
            InputProps: {
              startAdornment: (
                <InputAdornment position={KEY.START}>
                  <LocIcon icon={githubSrc} color={theme.palette.common.black} />
                </InputAdornment>
              )
            }
          })}
          required={required}
          autoFocus
          fullWidth
          sx={{
            color: 'common.white',
            backgroundColor: 'primary.main',
            '& .MuiFilledInput-root': {
              color: 'common.black',
              backgroundColor: 'common.white',
              '& .MuiInputLabel-root': {
                color: 'common.white',
                '&:active': {
                  color: 'common.white'
                }
              }
            },
            '&:active': {
              color: 'common.white',
              backgroundColor: 'primary.main'
            },
            padding: 1,
            marginY: 1
          }}
        />
      )}
      disabled={submitting || sent}
      rules={{ required: true }}
    />
  )
}

export default FormField
