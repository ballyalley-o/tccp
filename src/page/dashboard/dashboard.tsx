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
      <DashboardHero />
      <DashboardBootcampRundown />
      <BootcampConsult />
      <DashboardFeedbackSection />
    </Fragment>
  )
}

export default Dashboard
