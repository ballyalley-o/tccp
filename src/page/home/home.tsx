import { Fragment } from 'react'

import { AppNavBar, AppFooter } from 'component/navbar'
import withRoot from 'withroot'

function Index() {
  return (
    <Fragment>
      <AppNavBar />
      {/* <ProductHero /> */}
      {/* <ProductValue /> */}
      {/* <ProductCategory /> */}
      {/* <ProductHowItWorks /> */}
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      <AppFooter />
    </Fragment>
  )
}

export default withRoot(Index)
