import { CODE } from 'constant';
import { Navigate, useRoutes } from 'react-router-dom';
import {
  HomePage,
  DashboardPage,
  LogInPage,
  RegisterPage,
  // bootcamp
  BootcampPage,
  FallbackPage
} from 'route/element';
import { FallbackPath } from 'route/path';
import { ROUTING } from 'constant/routing/routing';
import { FALLBACK } from 'constant';

function Router() {
  return useRoutes([
    {
      path: ROUTING.ROOT,
      element: <DashboardPage />
    },
    {
      // @auth
      path: ROUTING.AUTH,
      children: [
        {
          path: ROUTING.LOG_IN,
          element: <LogInPage />
        },
        {
          path: ROUTING.REGISTER,
          element: <RegisterPage />
        },
        {
          path: ROUTING.RESET_PASSWORD
          // element: <ResetPasswordPage />,
        }
      ]
    },
    {
      path: ROUTING.BOOTCAMP,
      element: <BootcampPage />,
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
  ]);
}

export default Router;
