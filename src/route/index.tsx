import { CODE } from 'constant'
import { Navigate, useRoutes } from 'react-router-dom'
import { GuestGuard, AuthGuard } from 'auth'
import { AppLayout } from 'page'
import {
  HomePage,
  DashboardPage,
  // :auth
  LogInPage,
  RegisterPage,
  UserAccountPage,
  // :bootcamp
  BootcampPage,
  BootcampViewPage,
  // :course
  CoursePage,
  FallbackPage
} from 'route/element'
import { FallbackPath } from 'route/path'
import { ROUTING } from 'constant/routing/routing'
import { FALLBACK } from 'constant'

const { ACCOUNT, AUTH, BOOTCAMP, COURSE, LOG_IN, REGISTER, RESET_PASSWORD } = ROUTING

function Router() {
  /**
   *  @baseUrl {http://thecodecoachprojct.com}
   * @path {baseUrl}/api/{apiVer}
   */
  return useRoutes([
    {
      path: ROUTING.ROOT,
      element: <DashboardPage />
    },
    {
      // /auth
      path: AUTH,
      element: <AppLayout />,
      children: [
        {
          // /auth/log-in
          path: LOG_IN,
          element: (
            <GuestGuard>
              <LogInPage />
            </GuestGuard>
          )
        },
        {
          // /auth/register
          path: REGISTER,
          element: <RegisterPage />
        },
        {
          // /auth/account
          path: ACCOUNT,
          element: (
            <AuthGuard>
              <UserAccountPage />
            </AuthGuard>
          )
        },
        {
          // /auth/reset-password
          path: RESET_PASSWORD
          // element: <ResetPasswordPage />,
        }
      ]
    },
    {
      // /bootcamp
      path: BOOTCAMP,
      element: <AppLayout />,
      children: [
        {
          // /bootcamp/all
          path: ROUTING.ALL,
          element: <BootcampPage />
        },
        {
          // /bootcamp/:id
          path: ':id/view',
          element: <BootcampViewPage />
          // children: [
          //   {
          //     // /:id/view
          //     path: ROUTING.VIEW,
          //     element: <BootcampViewPage />
          //   }
          // ]
        }
      ]
    },
    {
      // /course
      path: COURSE,
      element: <AppLayout />,
      children: [
        {
          // /course/all
          path: ROUTING.ALL,
          element: <CoursePage />
        },
        {
          // /course/:id/view
          path: ROUTING.ID,
          children: [
            {
              // /course/:id/view
              path: ROUTING.VIEW,
              element: <CoursePage />
            }
          ]
        }
      ]
    },
    // @fallback
    {
      path: FallbackPath.NOT_AUTHORIZED,
      element: <AppLayout />,
      children: [
        {
          path: FallbackPath.NOT_AUTHORIZED,
          element: <FallbackPage errorCode={CODE.NOT_AUTHORIZED} fallbackTitle={FALLBACK.NOT_AUTHORIZED.MESSAGE} />
        }
      ]
    },
    {
      path: FallbackPath.FORBIDDEN,
      element: <AppLayout />,
      children: [
        {
          path: FallbackPath.FORBIDDEN,
          element: <FallbackPage errorCode={CODE.FORBIDDEN} fallbackTitle={FALLBACK.FORBIDDEN.MESSAGE} />
        }
      ]
    },
    {
      path: FallbackPath.NOT_FOUND,
      element: <AppLayout />,
      children: [
        {
          path: FallbackPath.NOT_FOUND,
          element: <FallbackPage errorCode={CODE.NOT_FOUND} fallbackTitle={FALLBACK.NOT_FOUND.MESSAGE} />
        }
      ]
    },
    {
      path: FallbackPath.BAD_REQUEST,
      element: <AppLayout />,
      children: [
        {
          path: FallbackPath.BAD_REQUEST,
          element: <FallbackPage errorCode={CODE.BAD_REQUEST} fallbackTitle={FALLBACK.BAD_REQUEST.MESSAGE} />
        }
      ]
    },
    {
      path: FallbackPath.UNPROCESSABLE_ENTITY,
      element: <AppLayout />,
      children: [
        {
          path: FallbackPath.UNPROCESSABLE_ENTITY,
          element: <FallbackPage errorCode={CODE.UNPROCESSABLE_ENTITY} fallbackTitle={FALLBACK.UNPROCESSABLE_ENTITY.MESSAGE} />
        }
      ]
    },
    {
      path: FallbackPath.SERVER_ERROR,
      element: <AppLayout />,
      children: [
        {
          path: FallbackPath.SERVER_ERROR,
          element: <FallbackPage errorCode={CODE.INTERNAL_SERVER_ERROR} fallbackTitle={FALLBACK.SERVER_ERROR.MESSAGE} />
        }
      ]
    },
    { path: '*', element: <Navigate to={FallbackPath.NOT_FOUND} replace /> }
  ])
}

export default Router
