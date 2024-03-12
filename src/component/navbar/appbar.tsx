import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'
import { APP_NAVBAR } from 'config'

function AppBar(props: AppBarProps) {
  return (
    <MuiAppBar
      elevation={0}
      position='sticky'
      sx={{ height: APP_NAVBAR.HEIGHT }}
      {...props}
    />
  )
}

export default AppBar
