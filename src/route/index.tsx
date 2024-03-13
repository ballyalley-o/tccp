import { CODE } from 'constant'
import { Navigate, useRoutes } from 'react-router-dom'
import {
  Home,
  Dashboard,
  LogIn,
  RegisterPage,
  FallbackPage,
} from 'route/element'
import { FallbackPath } from 'route/path'
import { PATH } from 'route/param'
import { FALLBACK } from 'constant'

function Router() {
  return useRoutes([
    {
      path: PATH.ROOT,
      element: <Dashboard />,
    },
    {
      // @auth
      path: PATH.AUTH,
      children: [
        {
          path: PATH.LOG_IN,
          element: <LogIn />,
        },
        {
          path: PATH.REGISTER,
          element: <RegisterPage />,
        },
        {
          path: PATH.RESET_PASSWORD,
          // element: <ResetPasswordPage />,
        },
      ],
    },
    // @fallback
    {
      path: FallbackPath.NOT_AUTHORIZED,
      element: (
        <FallbackPage
          errorCode={CODE.NOT_AUTHORIZED}
          fallbackTitle={FALLBACK.NOT_AUTHORIZED.MESSAGE}
        />
      ),
    },
    {
      path: FallbackPath.FORBIDDEN,
      element: (
        <FallbackPage
          errorCode={CODE.FORBIDDEN}
          fallbackTitle={FALLBACK.FORBIDDEN.MESSAGE}
        />
      ),
    },
    {
      path: FallbackPath.NOT_FOUND,
      element: (
        <FallbackPage
          errorCode={CODE.NOT_FOUND}
          fallbackTitle={FALLBACK.NOT_FOUND.MESSAGE}
        />
      ),
    },
    {
      path: FallbackPath.BAD_REQUEST,
      element: (
        <FallbackPage
          errorCode={CODE.BAD_REQUEST}
          fallbackTitle={FALLBACK.BAD_REQUEST.MESSAGE}
        />
      ),
    },
    {
      path: FallbackPath.UNPROCESSABLE_ENTITY,
      element: (
        <FallbackPage
          errorCode={CODE.UNPROCESSABLE_ENTITY}
          fallbackTitle={FALLBACK.UNPROCESSABLE_ENTITY.MESSAGE}
        />
      ),
    },
    {
      path: FallbackPath.SERVER_ERROR,
      element: (
        <FallbackPage
          errorCode={CODE.INTERNAL_SERVER_ERROR}
          fallbackTitle={FALLBACK.SERVER_ERROR.MESSAGE}
        />
      ),
    },
    { path: '*', element: <Navigate to={FallbackPath.NOT_FOUND} replace /> },
  ])
}

export default Router
