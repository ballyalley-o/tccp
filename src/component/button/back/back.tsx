import { useState, useEffect, useRef, Fragment, MouseEvent } from 'react'
import { m } from 'framer-motion'
import { useNavigate, useLocation } from 'react-router-dom'
import { ICON_NAME, useIcon } from 'hook'
import { useSettingContext } from 'component/setting'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { KEY, LABEL, TYPOGRAPHY, VARIANT } from 'constant'
import { SPopover, SBackIconButton } from 'component/button'

const BackButton = () => {
  const [open, setOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<EventTarget | null>(null)

  const { themeMode } = useSettingContext()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const navRef = useRef(null)
  const theme = useTheme()

  const { Icon, iconSrc: backIconSrc } = useIcon(ICON_NAME.BACK)

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    navigate(-1)
  }

  useEffect(() => {
    if (open) {
      handleClose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    const appBarEl = Array.from(document.querySelectorAll('.MuiAppBar-root')) as HTMLElement[]

    const styles = () => {
      document.body.style.overflow = ''
      document.body.style.padding = ''

      appBarEl.forEach((elem) => {
        elem.style.padding = ''
      })
    }

    if (open) {
      styles()
    } else {
      styles()
    }
  }, [open])

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Fragment>
      <SBackIconButton onClick={handleClick} aria-label={LABEL.GO_BACK} onMouseEnter={handleOpen} onMouseLeave={handleClose}>
        <Icon icon={backIconSrc} width={50} />
      </SBackIconButton>
      <SPopover
        open={open}
        anchorEl={anchorEl as Element}
        anchorOrigin={{ vertical: KEY.CENTER, horizontal: KEY.RIGHT }}
        transformOrigin={{ vertical: KEY.CENTER, horizontal: KEY.LEFT }}
        sx={{
          marginLeft: 3
        }}>
        <m.div>
          <Typography variant={TYPOGRAPHY.BODY1} color={themeMode === KEY.LIGHT ? theme.palette.grey[700] : theme.palette.grey[400]}>
            {LABEL.GO_BACK}
          </Typography>
        </m.div>
      </SPopover>
    </Fragment>
  )
}

export default BackButton
