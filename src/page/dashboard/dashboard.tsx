import { AppFooter, AppNavBar } from 'component'
import { Fragment } from 'react'
import {
  DashboardHero,
  ProductCTA,
  //   ProductHowIt,
  ProductHowItWorks,
  ProductSmokingHero,
  ProductValue,
} from 'section/dashboard'

const Dashboard = () => {
  return (
    <Fragment>
      <AppNavBar />
      <DashboardHero />
      <ProductHowItWorks />
      <ProductValue />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </Fragment>
  )
}

export default Dashboard
