import { Fragment } from 'react'
import // ProductCategory,
// ProductHero,
// ProductValue,
// ProductHowItWorks,
// ProductSmokingHero,
// ProductCTA,
'page/product'
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
      <div>
        <h1>Home</h1>
      </div>
      {/* <ProductCTA /> */}
      {/* <ProductSmokingHero /> */}
      <AppFooter />
    </Fragment>
  )
}

export default withRoot(Index)
