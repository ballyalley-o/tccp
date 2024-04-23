import { CODE } from 'constant'
import { Navigate, useRoutes } from 'react-router-dom'
import { GuestGuard, AuthGuard } from 'auth'
import {
  HomePage,
  DashboardPage,
  // :auth
  LogInPage,
  RegisterPage,
  UserAccountPage,
  // :bootcamp
  BootcampPage,
  // :course
  CoursePage,
  FallbackPage
} from 'route/element'
import { FallbackPath } from 'route/path'
import { ROUTING } from 'constant/routing/routing'
import { FALLBACK } from 'constant'

const { ACCOUNT, AUTH, BOOTCAMP, COURSE, LOG_IN, REGISTER, RESET_PASSWORD } = ROUTING

function Router() {
  return useRoutes([
    {
      path: ROUTING.ROOT,
      element: <DashboardPage />
    },
    {
      // @auth
      path: AUTH,
      children: [
        {
          path: LOG_IN,
          element: (
            <GuestGuard>
              <LogInPage />
            </GuestGuard>
          )
        },
        {
          path: REGISTER,
          element: <RegisterPage />
        },
        {
          path: ACCOUNT,
          element: (
            <AuthGuard>
              <UserAccountPage />
            </AuthGuard>
          )
        },
        {
          path: RESET_PASSWORD
          // element: <ResetPasswordPage />,
        }
      ]
    },
    {
      path: BOOTCAMP,
      element: <BootcampPage />,
      children: [
        {
          path: ROUTING.ID
          // element: <BootcampDetailPage />,
        }
      ]
    },
    {
      path: COURSE,
      element: <CoursePage />,
      children: [
        {
          path: ROUTING.ID
          // element: <BootcampDetailPage />,
        }
      ]
    },
    // @fallback
    {
      path: FallbackPath.NOT_AUTHORIZED,
      element: <FallbackPage errorCode={CODE.NOT_AUTHORIZED} fallbackTitle={FALLBACK.NOT_AUTHORIZED.MESSAGE} />
    },
    {
      path: FallbackPath.FORBIDDEN,
      element: <FallbackPage errorCode={CODE.FORBIDDEN} fallbackTitle={FALLBACK.FORBIDDEN.MESSAGE} />
    },
    {
      path: FallbackPath.NOT_FOUND,
      element: <FallbackPage errorCode={CODE.NOT_FOUND} fallbackTitle={FALLBACK.NOT_FOUND.MESSAGE} />
    },
    {
      path: FallbackPath.BAD_REQUEST,
      element: <FallbackPage errorCode={CODE.BAD_REQUEST} fallbackTitle={FALLBACK.BAD_REQUEST.MESSAGE} />
    },
    {
      path: FallbackPath.UNPROCESSABLE_ENTITY,
      element: <FallbackPage errorCode={CODE.UNPROCESSABLE_ENTITY} fallbackTitle={FALLBACK.UNPROCESSABLE_ENTITY.MESSAGE} />
    },
    {
      path: FallbackPath.SERVER_ERROR,
      element: <FallbackPage errorCode={CODE.INTERNAL_SERVER_ERROR} fallbackTitle={FALLBACK.SERVER_ERROR.MESSAGE} />
    },
    { path: '*', element: <Navigate to={FallbackPath.NOT_FOUND} replace /> }
  ])
}

export default Router
