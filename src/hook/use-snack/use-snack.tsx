import { Fragment } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { SnackbarProvider as NotistackProvider, useSnackbar } from 'notistack'
import { Slide, IconButton } from '@mui/material'
import { useIcon, ICON_NAME } from 'hook'
import { ICON_WEB_NAME } from 'config'
import { KEY, COLOR as COLOR_CONSTANT } from 'constant'
import { SSnackContent, SSnackIconMDiv } from './style'
import { Iconify } from 'component/iconify'

interface SnackProviderProps {
  children: React.ReactNode
}

export default function SnackProvider({ children }: SnackProviderProps) {
  const { closeSnackbar } = useSnackbar()

  const onClose = (key: any) => () => {
    closeSnackbar(key)
  }

  const { Icon, iconSrc: closeSrc } = useIcon(ICON_NAME.CHEVRON_RIGHT)

  return (
    <Fragment>
      <NotistackProvider
        dense
        maxSnack={5}
        preventDuplicate
        autoHideDuration={3000}
        TransitionComponent={Slide}
        Components={{ default: SSnackContent, success: SSnackContent, error: SSnackContent, warning: SSnackContent, info: SSnackContent }}
        anchorOrigin={{ vertical: KEY.TOP, horizontal: KEY.CENTER }}
        iconVariant={{
          info: <SnackIcon icon={ICON_WEB_NAME.INFO} color='common.blue' />,
          success: <SnackIcon icon={ICON_NAME.CHECKMARK_CIRCLE} color='common.green' />,
          warning: <SnackIcon icon={ICON_WEB_NAME.ALERT_OUTLINE} color='common.black' />,
          error: <SnackIcon icon={ICON_WEB_NAME.ERROR_OUTLINE} color='common.white' />
        }}
        action={(key) => (
          <IconButton
            size='small'
            onClick={onClose(key)}
            sx={{
              color: 'common.black'
            }}>
            <Icon icon={closeSrc} />
          </IconButton>
        )}>
        <AnimatePresence>{children}</AnimatePresence>
      </NotistackProvider>
    </Fragment>
  )
}

interface SnackIconProps {
  icon: ICON_WEB_NAME
  color: any
}

function SnackIcon({ icon, color }: SnackIconProps) {
  const { Icon, iconSrc } = useIcon(icon)
  return (
    <SSnackIconMDiv color={color}>
      <Icon icon={iconSrc} color={color} size={30} />
    </SSnackIconMDiv>
  )
}
