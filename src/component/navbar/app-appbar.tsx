import { useState } from 'react'
import { m } from 'framer-motion'
import { Link as RouterLink, useParams } from 'react-router-dom'
import { Box, Link, IconButton } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { Button } from 'component'
import AppBar from './appbar'
import { SToolbar, SBox } from 'theme/style'
import { AnimatedButton } from 'component/button'
import { Logo } from 'component/logo'
import { NavDrawer } from 'component/navbar'
import { GLOBAL } from 'config'
import { BUTTON } from 'constant'
import { RootPath, AuthPath } from 'route/path'
import { MotionLazyContainer, MotionText, varFade } from 'component/motion'

const rightLink = {
  fontSize: 12,
  ml: 4,
}

function AppNavBar(): JSX.Element {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  const param = useParams()

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
            variant='body1'
            underline='none'
            href={RootPath.DASHBOARD}
            sx={{
              color: isLogoHovered ? 'grey.600' : 'common.black',
              animation: isLogoHovered ? '0.5s' : 'none',
              ease: 'ease-in-out',
            }}
          >
            {isLogoHovered ? (
              <MotionText
                text={GLOBAL.APP_NAME}
                sx={{ typography: 'body1' }}
                variants={
                  varFade({
                    durationIn: 0.9,
                    delay: 0.5,
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
                sx={{ fontSize: 12, color: 'common.black' }}
              >
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
              justifyContent: 'flex-end',
            }}
          >
            <AnimatedButton to={AuthPath.LOG_IN} text={BUTTON.LOG_IN} style={rightLink} />
            <Box>
              <Link variant='h6' underline='none' href={AuthPath.REGISTER} sx={{ ...rightLink, color: 'secondary.main' }}>
                <Button
                  variant='contained'
                  color='primary'
                  sx={{
                    fontSize: 10,
                    padding: '.5em 1em',
                    borderRadius: 0,
                    textTransform: 'none',
                    border: '1px solid transparent',
                    '&:hover': {
                      bgcolor: 'secondary.main',
                      color: 'common.black',
                      border: '1px solid',
                    },
                  }}
                >
                  {BUTTON.REGISTER}
                </Button>
              </Link>
            </Box>
          </Box>
          <SBox />
        </SToolbar>
      </AppBar>
      <NavDrawer open={sidebarOpen} onClose={handleSidebarClose} />
    </MotionLazyContainer>
  )
}

export default AppNavBar
