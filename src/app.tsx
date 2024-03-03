import { Fragment } from 'react'
import { Home } from 'page'
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

function App() {
  return (
    <Fragment>
      <AppNavBar />
      <ProductHero />
      <ProductValue />
      <ProductCategory />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </Fragment>
  )
}

export default withRoot(App)
