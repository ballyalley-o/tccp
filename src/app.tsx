import { Fragment, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AppNavBar, AppFooter } from 'component'
import { Fallback } from 'page'
import { AuthProvider } from 'auth/auth-provider'
import { SettingProvider } from 'component/setting'
import { SnackProvider } from 'hook'
import ErrorBoundary from 'util/error-boundary'
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
      <AuthProvider>
        <HelmetProvider>
          <BrowserRouter>
            <SettingProvider>
              <SnackProvider>
                <AppNavBar />
                <ErrorBoundary fallback={<Fallback fallbackTitle={FALLBACK.BAD_REQUEST.MESSAGE} errorCode={FALLBACK.BAD_REQUEST.CODE} />}>
                  <Router />
                </ErrorBoundary>
                <AppFooter />
              </SnackProvider>
            </SettingProvider>
          </BrowserRouter>
        </HelmetProvider>
      </AuthProvider>
    </Fragment>
  )
}

export default withRoot(App)
