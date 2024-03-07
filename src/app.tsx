import { Fragment, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AppNavBar, AppFooter } from 'component'
import {
  ProductCategory,
  DashboardHero,
  ProductValue,
  ProductHowItWorks,
  ProductSmokingHero,
  ProductCTA,
} from 'page/dashboard'
import withRoot from 'withroot'
import GLOBAL from 'config/global'

function App() {
  useEffect(() => {
    document.title = GLOBAL.APP_NAME
  }, [])

  return (
    <Fragment>
      <HelmetProvider>
        <Router>
          <AppNavBar />
          <DashboardHero />
          <ProductValue />
          <ProductCategory />
          <ProductHowItWorks />
          <ProductCTA />
          <ProductSmokingHero />
          <AppFooter />
        </Router>
      </HelmetProvider>
    </Fragment>
  )
}

export default withRoot(App)
