import { FC } from 'react'
import { Alert, AlertTitle } from '@mui/material'
import { useIcon } from 'hook'
import { ICON_NAME } from 'hook/use-icon'

interface IAlert {
  title: string
  message?: string
  icon?: JSX.Element
  severity: 'error' | 'warning' | 'info' | 'success'
}

const Snack: FC<IAlert> = ({ title, message, severity, icon }) => {
  const { Icon, iconSrc } = useIcon(
    severity === 'error'
      ? ICON_NAME.SNACK_ERROR
      : severity === 'warning'
      ? ICON_NAME.SNACK_WARNING
      : severity === 'info'
      ? ICON_NAME.SNACK_INFO
      : ICON_NAME.SNACK_SUCCESS
  )

  return (
    <Alert
      severity={severity}
      variant="filled"
      role="alert"
      icon={<Icon icon={iconSrc} />}
      sx={{
        width: '100%',
        marginY: 3
      }}>
      <AlertTitle
        color="common.white"
        sx={{
          fontSize: '1rem'
        }}>
        {title}
      </AlertTitle>
      {message && message}
    </Alert>
  )
}

export default Snack
