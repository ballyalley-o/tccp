import { AppBar, Toolbar, Typography } from '@mui/material'

const Navbar = () => {
  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Typography variant='h6' component='div'>
          The Code Coach Projct
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
