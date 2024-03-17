import { FC, useState } from 'react'
import { InputAdornment, IconButton } from '@mui/material'
import { Field } from 'react-final-form'
import { useTheme } from '@mui/material/styles'
import { useIcon } from 'hook'
import { ICON_WEB_NAME, APP_FIELD, ICON_LOC_NAME } from 'config'
import { KEY } from 'constant'
import { FORM } from 'section/auth'

interface PasswordFieldProps {
  submitting: boolean
  sent: boolean
  isConfirm?: boolean
}

const PasswordField: FC<PasswordFieldProps> = ({
  submitting,
  sent,
  isConfirm,
}) => {
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
    <Field
      disabled={submitting || sent}
      {...(isConfirm ? FORM.CONFIRM_PASSWORD : FORM.PASSWORD)}
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
              {<WebIcon icon={showPassword ? eyeHideSrc : eyeOffSrc} />}
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
  )
}

export default PasswordField
