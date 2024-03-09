import { AppFooter, AppNavBar } from 'component'
import { Fragment } from 'react'
import {
  DashboardHero,
  ProductCTA,
  //   ProductHowIt,
  DashbordBootcampRundown,
  ProductSmokingHero,
  ProductValue,
} from 'section/dashboard'

const Dashboard = () => {
  return (
    <Fragment>
      <AppNavBar />
      <DashboardHero />
      <DashbordBootcampRundown />
      <ProductValue />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </Fragment>
  )
}

export default Dashboard
