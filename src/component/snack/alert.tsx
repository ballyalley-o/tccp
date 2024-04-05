import { FC, useState, useEffect } from 'react'
import { m } from 'framer-motion'
import { Alert, AlertTitle, Snackbar } from '@mui/material'
import { useIcon } from 'hook'
import { ICON_NAME } from 'hook/use-icon'

interface IAlert {
  title: string
  message?: string
  icon?: JSX.Element
  time?: number
  severity: 'error' | 'warning' | 'info' | 'success'
  condition: boolean
}

const Snack: FC<IAlert> = ({ title, message, severity, icon, time, condition }) => {
  const [open, setOpen] = useState(false)
  const { Icon, iconSrc } = useIcon(
    severity === 'error'
      ? ICON_NAME.SNACK_ERROR
      : severity === 'warning'
      ? ICON_NAME.SNACK_WARNING
      : severity === 'info'
      ? ICON_NAME.SNACK_INFO
      : ICON_NAME.SNACK_SUCCESS
  )

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null
    if (condition) {
      setOpen(true)
      timer = setTimeout(() => {
        setOpen(false)
      }, 5000)
    } else {
      setOpen(false)
    }
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [condition, setOpen])

  return (
    <Snackbar open={open} autoHideDuration={time || 5000}>
      <m.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
        <Alert
          severity={severity}
          variant='filled'
          role='alert'
          icon={<Icon icon={iconSrc} />}
          sx={{
            width: '100%',
            marginY: 3
          }}>
          <AlertTitle
            color='common.white'
            sx={{
              fontSize: '1rem'
            }}>
            {title}
          </AlertTitle>
          {message && message}
        </Alert>
      </m.div>
    </Snackbar>
  )
}

export default Snack
