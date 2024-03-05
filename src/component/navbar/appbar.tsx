import MuiAppBar, { AppBarProps } from '@mui/material/AppBar'

function AppBar(props: AppBarProps) {
  return (
    <MuiAppBar
      elevation={0}
      position='sticky'
      sx={{ height: '50px' }}
      {...props}
    />
  )
}

export default AppBar
