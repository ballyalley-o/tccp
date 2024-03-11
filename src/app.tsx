import { Fragment, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AppNavBar, AppFooter } from 'component'
import Router from 'route'
import { Dashboard } from 'page/dashboard'
import withRoot from 'withroot'
import GLOBAL from 'config/global'

function App() {
  useEffect(() => {
    document.title = GLOBAL.APP_NAME
  }, [])

  return (
    <Fragment>
      <HelmetProvider>
        <BrowserRouter>
          <Router />
          <Dashboard />
        </BrowserRouter>
      </HelmetProvider>
    </Fragment>
  )
}

export default withRoot(App)
