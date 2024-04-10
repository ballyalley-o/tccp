import { useRef, Fragment } from 'react'
import { SnackbarProvider as NotistackProvider, useSnackbar } from 'notistack'
import { useIcon, ICON_NAME } from 'hook'
import { ICON_WEB } from 'config'
import { Box, IconButton } from '@mui/material'
import { alpha } from '@mui/material/styles'
import { Iconify } from 'component/iconify'
import StyledNotistack from './style'
import { KEY, COLOR as COLOR_CONSTANT } from 'constant'

interface SnackProviderProps {
  children: React.ReactNode
}

export default function SnackProvider({ children }: SnackProviderProps) {
  const notistackRef = useRef<typeof SnackProvider | null>(null)
  const { closeSnackbar } = useSnackbar()

  const onClose = (key: any) => () => {
    closeSnackbar(key)
  }

  const { Icon, iconSrc: closeSrc } = useIcon(ICON_NAME.CLOSE)

  // const { INFO, CHECKMARK_CIRCLE, ERROR_OUTLINE, ALERT_OUTLINE } = ICON_WEB

  return (
    <Fragment>
      <StyledNotistack />

      <NotistackProvider
        // ref={notistackRef}
        dense
        maxSnack={5}
        preventDuplicate
        autoHideDuration={3000}
        // TransitionComponent={isRTL ? Collapse : undefined}
        variant='success' // Set default variant
        anchorOrigin={{ vertical: KEY.TOP, horizontal: KEY.CENTER }}
        iconVariant={{
          info: <SnackIcon icon={ICON_WEB.INFO} color={COLOR_CONSTANT.INFO} />,
          success: <SnackIcon icon={ICON_WEB.CHECKMARK_CIRCLE} color={COLOR_CONSTANT.SUCCESS} />,
          warning: <SnackIcon icon={ICON_WEB.ALERT_OUTLINE} color={COLOR_CONSTANT.WARNING} />,
          error: <SnackIcon icon={ICON_WEB.ERROR_OUTLINE} color={COLOR_CONSTANT.ERROR} />
        }}
        action={(key) => (
          <IconButton size='small' onClick={onClose(key)} sx={{ p: 0.5 }}>
            <Icon icon={closeSrc} />
          </IconButton>
        )}>
        {children}
      </NotistackProvider>
    </Fragment>
  )
}

interface SnackIconProps {
  icon: string
  color: COLOR
}

function SnackIcon({ icon, color }: SnackIconProps) {
  return (
    <Box
      component='span'
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        color: `${color}.main`,
        bgcolor: (theme) => alpha(theme.palette[color].main, 0.16)
      }}>
      <Iconify icon={icon} width={24} />
    </Box>
  )
}
