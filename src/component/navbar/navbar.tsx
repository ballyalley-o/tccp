import { AppBar, Toolbar, Typography } from '@mui/material'
import { GLOBAL } from 'config'

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' component='div'>
          {GLOBAL.APP_NAME}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
