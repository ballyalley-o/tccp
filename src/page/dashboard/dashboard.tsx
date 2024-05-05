import { Fragment } from 'react'
import { DashboardHero, BootcampConsult, DashboardBootcampRundown, DashboardFeedbackSection } from 'section/dashboard'
import { AppNavBar, AppFooter } from 'component/navbar'

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
