import { useState } from 'react'
import { m } from 'framer-motion'
import { Link as RouterLink, useParams } from 'react-router-dom'
import {
  Box,
  Link,
  List,
  ListItemText,
  IconButton,
  Container,
  Typography,
  Divider,
} from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import { Button } from 'component'

import AppBar from './appbar'
import { SToolbar, SDrawer, SListItem, SBox } from 'theme/style'
import { default as Logo } from 'component/logo'
import { GLOBAL } from 'config'
import { BUTTON } from 'constant'
import { RootPath, AuthPath } from 'route/path'

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
    <m.div>
      <AppBar position='fixed'>
        <SToolbar sx={{ justifyContent: 'space-between' }}>
          <Logo
            width={40}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          />
          <Link
            variant='h6'
            underline='none'
            href={RootPath.DASHBOARD}
            sx={{
              fontSize: 14,
              color: isLogoHovered ? 'grey.600' : 'common.black',
              animation: '0.5s',
              ease: 'ease-in-out',
            }}
          >
            {GLOBAL.APP_NAME}
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
            <Box>
              {location.pathname.slice(1) != AuthPath.LOG_IN && (
                <Link
                  color='common.black'
                  variant='h6'
                  underline='none'
                  href={AuthPath.LOG_IN}
                  style={rightLink}
                >
                  <Button
                    variant='contained'
                    sx={{
                      boxShadow: 'none',
                      bgcolor: 'secondary.main',
                      color: 'common.black',
                      fontSize: 10,
                      padding: '.5em 1em',
                      borderRadius: 0,
                      textTransform: 'none',
                    }}
                  >
                    {BUTTON.LOG_IN}
                  </Button>
                </Link>
              )}
            </Box>
            <Box>
              <Link
                variant='h6'
                underline='none'
                href={AuthPath.REGISTER}
                sx={{ ...rightLink, color: 'secondary.main' }}
              >
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
      <SDrawer anchor='left' open={sidebarOpen} onClose={handleSidebarClose}>
        <Box
          role='presentation'
          onClick={handleSidebarClose}
          onKeyDown={handleSidebarClose}
          sx={{ width: 250, padding: '.5em .5em', mt: 7 }}
        >
          <List>
            <ListItemText
              primary={
                <Typography variant='body1' fontWeight='bold'>
                  Bootcamp
                </Typography>
              }
              sx={{ pl: 0.5 }}
            />
            <SListItem>
              <ListItemText
                primary={
                  <Typography variant='subtitle2'>Find a Bootcamp</Typography>
                }
              />
            </SListItem>
            <SListItem>
              <ListItemText
                primary={
                  <Typography variant='subtitle2'>
                    Find a Bootcamp by Course
                  </Typography>
                }
              />
            </SListItem>
            <SListItem>
              <ListItemText
                primary={
                  <Typography variant='subtitle2'>
                    Find a Bootcamp by Location
                  </Typography>
                }
              />
            </SListItem>
            <Divider sx={{ height: 2, paddingTop: 1 }} />
            <ListItemText
              primary={
                <Typography variant='body1' fontWeight='bold'>
                  Course
                </Typography>
              }
              sx={{ pl: 0.5, pt: 1 }}
            />
            <SListItem>
              <ListItemText
                primary={
                  <Typography variant='subtitle2'>Take a Course</Typography>
                }
              />
            </SListItem>
            <SListItem>
              <ListItemText
                primary={
                  <Typography variant='subtitle2'>Find a Course</Typography>
                }
              />
            </SListItem>
            <Divider sx={{ height: 2, paddingTop: 1 }} />
            <ListItemText
              primary={
                <Typography variant='body1' fontWeight='bold'>
                  Resources
                </Typography>
              }
              sx={{ pl: 0.5, pt: 1 }}
            />
            <SListItem>
              <ListItemText
                primary={
                  <Typography variant='subtitle2'>
                    Scholarship Programmes
                  </Typography>
                }
              />
            </SListItem>
            <SListItem>
              <ListItemText
                primary={
                  <Typography variant='subtitle2'>
                    Application Process
                  </Typography>
                }
              />
            </SListItem>

            <Divider sx={{ height: 2, paddingTop: 1 }} />
            <ListItemText
              primary={
                <Typography variant='body1' fontWeight='bold'>
                  Still Confused?
                </Typography>
              }
              sx={{ mt: 2, pl: 0.5 }}
            />
            <SListItem>
              <ListItemText
                primary={
                  <Typography variant='subtitle2'>
                    Ask a question on our forum
                  </Typography>
                }
              />
            </SListItem>
            <Box
              sx={{
                margin: '1em 0',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Button
                variant='outlined'
                color='primary'
                size='small'
                sx={{ width: '100%', boxShadow: 'none' }}
              >
                <Typography variant='subtitle2'>Contact Us</Typography>
              </Button>
            </Box>
          </List>
        </Box>
      </SDrawer>
    </m.div>
  )
}

export default AppNavBar
