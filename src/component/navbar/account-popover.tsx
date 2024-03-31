import { useState, MouseEvent, Fragment } from 'react'
import { useNavigate, Link as RouterLink } from 'react-router-dom'
import { alpha, useTheme } from '@mui/material/styles'
import { Box, Divider, Dialog, Typography, Stack, MenuItem, Link } from '@mui/material'
import { useAuthContext } from 'auth'
import { DefaultAvatar, Avatar } from 'component/avatar'
import { MenuPopover } from 'component/menu-popover'
import { MotionButton } from 'component/motion'
import { useSettingContext } from 'component/setting'
import { DisplayDialog } from 'component/setting'
import { useIcon, ICON_NAME } from 'hook'
import { TITLE, LABEL } from 'constant'
import { themePreset } from 'theme'
import { OPTION } from './util'

export default function AccountPopover() {
  const [openPopover, setOpenPopover] = useState<(EventTarget & HTMLButtonElement) | null>(null)
  const [open, setOpen] = useState(false)
  const { user, logout } = useAuthContext()
  const navigate = useNavigate()
  const theme = useTheme()

  const email = user?.email
  const displayName = user?.firstname + ' ' + user?.lastname

  //   const { enqueueSnackbar } = useSnackbar()

  const { themeMode, themeStretch, themeContrast, onResetSetting } = useSettingContext()

  const handleOpenPopover = (event: MouseEvent<HTMLButtonElement>) => {
    setOpenPopover(event.currentTarget)
  }

  const handleClosePopover = () => {
    setOpenPopover(null)
  }

  const handleLogout = async () => {
    try {
      if (logout) {
        logout()
      }
      handleClosePopover()
    } catch (error) {
      console.error(error)
      //   enqueueSnackbar('Unable to logout', { variant: 'error' })
    }
  }

  const handleToggle = () => {
    setOpen(!open)
    handleClosePopover()
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleClickItem = (path: any) => {
    handleClosePopover()
    navigate(path || setOpen(!open))
  }

  const notDefault = themeMode !== themePreset.themeMode || themeStretch !== themePreset.themeStretch || themeContrast !== themePreset.themeContrast

  return (
    <Fragment>
      <MotionButton
        onClick={handleOpenPopover}
        sx={{
          p: 0,
          ...(openPopover && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute'
            }
          })
        }}>
        {user?.avatar !== '/upload/avatar/no-avatar.jpeg' ? (
          <Avatar src={user?.avatar} />
        ) : (
          <DefaultAvatar firstName={user.firstname} lastName={user.lastname} />
        )}
      </MotionButton>

      <MenuPopover
        open={openPopover}
        onClose={handleClosePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        sx={{
          width: 200,
          p: 0,
          borderRadius: 0.4,
          backgroundColor: (theme: any) => (theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[400]),
          boxShadow: 0,
          '& .MuiMenuItem-root': {
            '&:hover': {
              backgroundColor: theme.palette.grey[300],
              cursor: 'pointer',
              animation: '0.5s',
              ease: 'ease-in-out'
            }
          }
        }}>
        <Box role='presentation' sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant='subtitle2' noWrap>
            {displayName}
          </Typography>
          <Typography variant='overline' sx={{ color: 'text.primary' }} fontWeight='bold' noWrap>
            {email}
          </Typography>
        </Box>
        <Divider sx={{ borderStyle: 'solid' }} />
        <Stack sx={{ p: 1 }}>
          {OPTION.map((option) => (
            <MenuItem key={option.label} onClick={() => handleClickItem(option.linkTo)}>
              <Link underline='none' color='inherit' to={option.linkTo} component={RouterLink} typography={'subtitle2'}>
                {option.label}
              </Link>
            </MenuItem>
          ))}
          <Divider />
          <MenuItem onClick={handleToggle}>
            <Typography variant='subtitle2' noWrap>
              {TITLE.DISPLAY_SETTING}
            </Typography>
          </MenuItem>
        </Stack>
        <Divider />

        <MenuItem onClick={handleLogout} sx={{ m: 1 }}>
          <Typography variant='subtitle2' noWrap>
            {LABEL.LOG_OUT}
          </Typography>
        </MenuItem>
      </MenuPopover>
      <Fragment>
        {!open && <Dialog open={open} onClose={handleToggle} />}
        <DisplayDialog open={open} handleClose={handleClose} onResetSetting={onResetSetting} />
      </Fragment>
    </Fragment>
  )
}
