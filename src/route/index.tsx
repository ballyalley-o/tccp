import { Navigate, useRoutes } from 'react-router-dom'
import { Home, Dashboard, LogIn } from 'route/element'
import { PATH } from 'route/param'
import { FallbackPath } from 'route/path'

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
          // element: <Register />,
        },
        {
          path: PATH.RESET_PASSWORD,
          // element: <ResetPasswordPage />,
        },
      ],
    },
    { path: '*', element: <Navigate to={FallbackPath.NOT_FOUND} replace /> },
  ])
}

export default Router
