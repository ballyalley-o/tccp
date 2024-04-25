import { useState, forwardRef, ForwardedRef, ChangeEvent } from 'react'
import { InputAdornment, IconButton, TextField } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Controller, useFormContext } from 'react-hook-form'
import { ICON_NAME, useIcon } from 'hook'
import { ICON_LOC_NAME } from 'config'
import { KEY, ARIA } from 'constant'
import { FORM } from 'section/auth'

interface ExtendedFormFieldProps extends FormFieldProps {
  name: string
  label: string
  value?: string
  type?: string
  placeholder: string
  autoComplete: string
  isGithub?: boolean
  isConfirm?: boolean
  required?: boolean
  errors?: any
  helperText?: string
  defaultValue?: string
  isAccount?: boolean
  disabled?: boolean
  setValue?: (value: string) => void
}

const FormField = forwardRef(
  (
    {
      // register,
      submitting,
      sent,
      name,
      label,
      type = 'text',
      placeholder,
      autoComplete,
      helperText,
      isGithub,
      errors,
      isAccount = false,
      disabled = false,
      required = false
    }: ExtendedFormFieldProps,
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const { Icon: LocIcon, iconSrc: githubSrc } = useIcon(ICON_LOC_NAME.GITHUB)
    const { Icon: WebIcon, iconSrc: eyeHideSrc } = useIcon(ICON_NAME.EYE_HIDE)
    const { iconSrc: eyeOffSrc } = useIcon(ICON_NAME.EYE_OFF)

    const { control, register } = useFormContext()
    const theme = useTheme()
    const isPassword = name?.includes(KEY.PASSWORD) || name?.includes(KEY.CONFIRM_PASSWORD)

    const handleToggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    return (
      <TextField
        variant={isAccount ? 'outlined' : 'filled'}
        color='primary'
        autoComplete={autoComplete}
        disabled={submitting || sent || disabled}
        label={label}
        placeholder={placeholder}
        type={showPassword ? type : isPassword ? KEY.PASSWORD : type}
        error={!!Error}
        helperText={errors[name]?.message || helperText}
        {...(isPassword && {
          InputProps: {
            endAdornment: (
              <InputAdornment position='end' sx={{ width: KEY.AUTO }}>
                <IconButton
                  edge='start'
                  size='small'
                  aria-label={ARIA.TOGGLE_PASSWORD}
                  onClick={handleToggleShowPassword}
                  sx={{ width: KEY.AUTO, color: theme.palette.text.secondary }}>
                  <WebIcon icon={showPassword ? eyeHideSrc : eyeOffSrc} />
                </IconButton>
              </InputAdornment>
            )
          }
        })}
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
        {...register(name)}
        sx={{
          ...(!isAccount && {
            color: 'common.white',
            '& .MuiFilledInput-root': {
              color: 'common.black',
              backgroundColor: 'common.white',
              '& .MuiInputLabel-root': {
                color: 'common.white'
              },
              '&.Mui-focused .MuiInputBase-input': {
                color: 'common.black'
              },
              '&.Mui-focused': {
                backgroundColor: 'secondary.main'
              },
              '&:hover': {
                backgroundColor: 'secondary.main'
              }
            },
            '&:active': {
              color: 'common.white'
            }
          }),
          // if isAccount is true, then apply the following styles
          ...(isAccount && {
            '& .MuiOutlinedInput-notchedOutline': {
              border: 'none',
              fontWeight: 'bold'
            },
            '&.Mui-focused': {
              backgroundColor: 'transparent'
            },
            // edit label color
            '& .MuiInputLabel-root': {
              color: 'common.black'
            },
            // disabled text color
            '& .MuiInputBase-input ': {
              color: 'grey.800',
              opacity: 1,
              fontWeight: 'bold'
            },
            backgroundColor: 'transparent',
            fontWeight: 'bold'
          }),
          padding: 1,
          marginY: 1
        }}
      />
    )
  }
)

export default FormField
