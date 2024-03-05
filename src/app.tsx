import { Fragment, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppNavBar, AppFooter } from 'component'
import {
  ProductCategory,
  ProductHero,
  ProductValue,
  ProductHowItWorks,
  ProductSmokingHero,
  ProductCTA,
} from 'page/product'
import withRoot from 'withroot'
import GLOBAL from 'config/global'

function App() {
  useEffect(() => {
    document.title = GLOBAL.APP_NAME
  }, [])
  return (
    <Fragment>
      <Router>
        <AppNavBar />
        <ProductHero />
        <ProductValue />
        <ProductCategory />
        <ProductHowItWorks />
        <ProductCTA />
        <ProductSmokingHero />
        <AppFooter />
      </Router>
    </Fragment>
  )
}

export default withRoot(App)
