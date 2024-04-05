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
  helperText?: string
  setValue?: (value: string) => void
}

const FormField = forwardRef(
  (
    {
      register,
      submitting,
      sent,
      name,
      label,
      type = 'text',
      placeholder,
      autoComplete,
      helperText,
      isGithub,
      required = false
    }: ExtendedFormFieldProps,
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false)
    const { Icon: LocIcon, iconSrc: githubSrc } = useIcon(ICON_LOC_NAME.GITHUB)
    const { Icon: WebIcon, iconSrc: eyeHideSrc } = useIcon(ICON_NAME.EYE_HIDE)
    const { iconSrc: eyeOffSrc } = useIcon(ICON_NAME.EYE_OFF)

    const { control } = useFormContext()
    const theme = useTheme()
    const isPassword = name?.includes(KEY.PASSWORD) || name?.includes(KEY.CONFIRM_PASSWORD)

    const handleToggleShowPassword = () => {
      setShowPassword(!showPassword)
    }

    return (
      <Controller
        control={control}
        name={name}
        {...(register && { register })}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            inputRef={ref as ForwardedRef<HTMLInputElement>}
            autoComplete={autoComplete}
            disabled={submitting || sent}
            variant='filled'
            color='primary'
            label={label}
            placeholder={placeholder}
            type={showPassword ? type : isPassword ? KEY.PASSWORD : type}
            // value={typeof field.value === 'number' && field.value === 0 ? '' : field.value}
            error={!!error || !!Error}
            helperText={error ? error?.message : helperText}
            // value={value}
            // onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            {...(isPassword && {
              InputProps: {
                endAdornment: (
                  <InputAdornment
                    position='end'
                    sx={{
                      width: KEY.AUTO
                    }}>
                    <IconButton
                      edge='start'
                      size='small'
                      aria-label={ARIA.TOGGLE_PASSWORD}
                      onClick={handleToggleShowPassword}
                      sx={{
                        width: KEY.AUTO,
                        color: theme.palette.text.secondary
                      }}>
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
            sx={{
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
)

export default FormField
