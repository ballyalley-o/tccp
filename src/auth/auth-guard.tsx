import { useState, Fragment } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthPath } from 'route/path'
import useAuthContext from './use-auth-context'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthContext()

  const { pathname } = useLocation()
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null)

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname)
    }
    return <Navigate to={AuthPath.LOG_IN} />
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} />
  }

  return <Fragment> {children} </Fragment>
}
