import { ComponentType } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme'

function withRoot<P extends JSX.IntrinsicAttributes>(
  Component: ComponentType<P>
) {
  function WithRoot(props: P) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </ThemeProvider>
    )
  }

  return WithRoot
}

export default withRoot
