import { AppFooter, AppNavBar } from 'component'
import { Fragment } from 'react'
import {
  DashboardHero,
  BootcampConsult,
  //   ProductHowIt,
  DashboardBootcampRundown,
  DashboardFeedbackSection,
} from 'section/dashboard'

const Dashboard = () => {
  return (
    <Fragment>
      <AppNavBar />
      <DashboardHero />
      <DashboardBootcampRundown />
      <BootcampConsult />
      <DashboardFeedbackSection />
      <AppFooter />
    </Fragment>
  )
}

export default Dashboard
