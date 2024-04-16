import { Fragment } from 'react'
import { DashboardHero, BootcampConsult, DashboardBootcampRundown, DashboardFeedbackSection } from 'section/dashboard'

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
