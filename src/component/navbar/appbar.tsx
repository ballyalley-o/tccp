import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'

function AppBar(props: AppBarProps) {
  return <MuiAppBar elevation={0} position='sticky' {...props} />
}

export default AppBar
