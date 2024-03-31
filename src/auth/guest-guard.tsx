import { Fragment } from 'react'
import { Navigate } from 'react-router-dom'
import { RootPath } from 'route/path'
import { LoadingScreen } from 'component/loading-screen'
import { useAuthContext } from 'auth'

export default function GuestGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthContext()

  if (isAuthenticated) {
    return <Navigate to={RootPath.ROOT_PARAM} />
  }

  //   if (!isInitialized) {
  //     return <LoadingScreen />
  //   }

  return <Fragment> {children} </Fragment>
}
