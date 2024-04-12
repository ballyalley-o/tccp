import { useLocation } from 'react-router-dom'
import { Fragment, useEffect } from 'react'
import { DashboardHero, BootcampConsult, DashboardBootcampRundown, DashboardFeedbackSection } from 'section/dashboard'
import { snack } from 'hook'

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
