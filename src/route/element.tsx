import { Suspense, lazy, FC, ComponentType } from 'react'
import { LoadingScreen } from 'component/loading-screen'

const Loadable = (
  Component: () => Promise<{ default: ComponentType<any> }>
): FC<any> => {
  const LazyComponent = lazy(Component)

  return (props: any) => (
    <Suspense fallback={<LoadingScreen />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export const Home = Loadable(() => import('page/home/home'))
export const Dashboard = Loadable(() => import('page/dashboard/dashboard'))
export const LogIn = Loadable(() => import('page/auth/log-in/log-in'))
// fallback
export const NotFoundPage = Loadable(() => import('page/fallback/not-found'))
