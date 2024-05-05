import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import { AppNavBar, AppFooter } from 'component/navbar'
import withRoot from 'withroot'
import Main from './main'

function AppLayout() {
  return (
    <Fragment>
      <AppNavBar />
      <Main isDesktop>
        <Outlet />
      </Main>
      <AppFooter />
    </Fragment>
  )
}

export default withRoot(AppLayout)
