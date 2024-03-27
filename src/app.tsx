import { Fragment, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AppNavBar, AppFooter } from 'component'
import { Fallback } from 'page'
import ErrorBoundary from 'util/error-boundary'
import { AuthProvider } from 'auth/auth-provider'
import Router from 'route'
import withRoot from 'withroot'
import GLOBAL from 'config/global'
import { FALLBACK } from 'constant'

function App() {
  useEffect(() => {
    document.title = GLOBAL.APP_NAME
  }, [])

  return (
    <Fragment>
      <HelmetProvider>
        <BrowserRouter>
          <AppNavBar />
          <ErrorBoundary fallback={<Fallback fallbackTitle={FALLBACK.BAD_REQUEST.MESSAGE} errorCode={FALLBACK.BAD_REQUEST.CODE} />}>
            <Router />
          </ErrorBoundary>
          <AppFooter />
        </BrowserRouter>
      </HelmetProvider>
    </Fragment>
  )
}

export default withRoot(App)
