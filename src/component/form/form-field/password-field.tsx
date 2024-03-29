import { FC, useState } from 'react'
import { InputAdornment, IconButton, Input } from '@mui/material'
import { Controller } from 'react-hook-form'
import { useTheme } from '@mui/material/styles'
import { useIcon } from 'hook'
import { ICON_WEB_NAME, APP_FIELD, ICON_LOC_NAME } from 'config'
import { KEY } from 'constant'
import { FORM } from 'section/auth'

interface PasswordFieldProps {
  submitting: boolean
  sent: boolean
  control: any
  isConfirm?: boolean
  value: string
  setValue: (value: string) => void
}

const PasswordField: FC<PasswordFieldProps> = ({ submitting, sent, isConfirm, value, setValue, control }) => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const theme = useTheme()
  const { Icon: WebIcon, iconSrc: eyeHideSrc } = useIcon(ICON_WEB_NAME.EYE_HIDE)
  const { iconSrc: eyeOffSrc } = useIcon(ICON_WEB_NAME.EYE_OFF)

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleToggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <Controller
      name={KEY.EMAIL}
      control={control}
      disabled={submitting || sent}
      rules={{ required: true }}
      render={({ field }) => (
        <Input
          color="secondary"
          disabled={submitting || sent}
          {...(isConfirm ? FORM.CONFIRM_PASSWORD : FORM.PASSWORD)}
          type={showPassword ? KEY.TEXT : KEY.PASSWORD}
          endAdornment={
            <InputAdornment
              position="end"
              sx={{
                width: 'auto'
              }}>
              <IconButton
                edge="start"
                aria-label="toggle password visibility"
                onClick={handleToggleShowPassword}
                size="small"
                sx={{
                  width: 'auto',
                  color: theme.palette.text.secondary
                }}>
                {<WebIcon icon={showPassword ? eyeHideSrc : eyeOffSrc} />}
              </IconButton>
            </InputAdornment>
          }
          value={value}
          margin="dense"
          onChange={(e) => setValue(e.target.value)}
          sx={{
            color: 'secondary.main',
            padding: 1,
            marginY: 1,
            '&:focus': {
              color: 'secondary.main'
            }
          }}
        />
      )}
    />
  )
}

export default PasswordField
