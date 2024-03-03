import { Fragment } from 'react'
import {
  ProductCategory,
  ProductHero,
  ProductValue,
  ProductHowItWorks,
  ProductSmokingHero,
  ProductCTA,
} from 'page/product'
import { AppNavBar, AppFooter } from 'component/navbar'
// import withRoot from 'withroot'

function Home() {
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

export default Home
