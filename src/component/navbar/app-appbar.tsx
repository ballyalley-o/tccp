import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { m } from 'framer-motion'
import { Box, Link, IconButton, Stack } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import AppBar from './appbar'
import { MotionLazyContainer, MotionText, varFade } from 'component/motion'
import { SToolbar, SBox } from 'theme/style'
import { AnimatedButton } from 'component/button'
import { NavDrawer } from 'component/navbar'
import { Logo } from 'component/logo'
import { AccountPopover } from 'component/navbar'
import { GLOBAL } from 'config'
import { BUTTON, BUTTON_VARIANT, FLEX, TYPOGRAPHY, VARIANT } from 'constant'
import { RootPath, AuthPath } from 'route/path'
import { SRegisterButton } from './style'

const rightLink = {
  fontSize: 12,
  ml: 4
}

function AppNavBar(): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const { user } = useSelector((state: any) => state.auth)
  //  avoid re-rendering when user changes
  // const selectAuth = (state: any) => state.auth
  // const selectUser = createSelector([selectAuth], (auth) => auth.user || {})
  // const { user } = useSelector(selectUser)

  const location = useLocation()
  const isLogInRoute = location.pathname === AuthPath.LOG_IN
  const isRegisterRoute = location.pathname === AuthPath.REGISTER

  const handleSidebarOpen = () => {
    setSidebarOpen((prevSidebarOpen) => !prevSidebarOpen)
  }

  const handleSidebarClose = () => {
    setSidebarOpen(false)
  }

  return (
    <MotionLazyContainer>
      <AppBar position='fixed'>
        <SToolbar sx={{ justifyContent: 'space-between' }}>
          <Logo width={40} onMouseEnter={() => setIsLogoHovered(true)} onMouseLeave={() => setIsLogoHovered(false)} />

          <Link
            variant={TYPOGRAPHY.BODY1}
            underline='none'
            href={RootPath.DASHBOARD}
            sx={{
              color: isLogoHovered ? 'grey.600' : 'common.black',
              animation: isLogoHovered ? '0.5s' : 'none',
              ease: 'ease-in-out'
            }}>
            {isLogoHovered ? (
              <MotionText
                text={GLOBAL.APP_NAME}
                sx={{ typography: 'body1' }}
                variants={
                  varFade({
                    durationIn: 0.9,
                    delay: 0.5
                  }).inUp
                }
              />
            ) : (
              GLOBAL.APP_NAME
            )}
          </Link>
          <m.div>
            <Box sx={{ bgcolor: 'secondary.main', ml: '2em' }}>
              <IconButton
                color='inherit'
                aria-label='Open learn menu'
                aria-controls='learn-menu'
                aria-haspopup='true'
                onClick={handleSidebarOpen}
                sx={{ fontSize: 12, color: 'common.black' }}>
                <span>{BUTTON.LEARN}&nbsp;</span>
                {sidebarOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
          </m.div>

          <Box
            sx={{
              py: 1,
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end'
            }}></Box>

          <Stack flexGrow={1} direction='row' alignItems='center' justifyContent='flex-end'>
            <Box
              sx={{
                py: 1,
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end'
              }}>
              {user ? (
                <AccountPopover user={user} />
              ) : isLogInRoute ? (
                <Box
                  sx={{
                    py: 1,
                    flex: 1,
                    display: FLEX.FLEX,
                    justifyContent: FLEX.FLEX_END
                  }}></Box>
              ) : (
                <AnimatedButton to={AuthPath.LOG_IN} text={BUTTON.LOG_IN} style={rightLink} />
              )}
              <Box>
                {!user && !isRegisterRoute && (
                  <Link variant={TYPOGRAPHY.H6} underline='none' href={AuthPath.REGISTER} sx={{ ...rightLink, color: 'secondary.main' }}>
                    <SRegisterButton variant={BUTTON_VARIANT.CONTAINED} color='primary'>
                      {BUTTON.REGISTER}
                    </SRegisterButton>
                  </Link>
                )}
              </Box>
            </Box>
          </Stack>

          <SBox />
        </SToolbar>
      </AppBar>
      <NavDrawer open={sidebarOpen} onClose={handleSidebarClose} />
    </MotionLazyContainer>
  )
}

export default AppNavBar
