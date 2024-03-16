import { Suspense, lazy, FC, ComponentType } from 'react'
import { LoadingScreen } from 'component/loading-screen'
import { MotionLazyContainer } from 'component/motion'

const Loadable = (
  Component: () => Promise<{ default: ComponentType<any> }>
): FC<any> => {
  const LazyComponent = lazy(Component)

  return (props: any) => (
    <Suspense fallback={<LoadingScreen />}>
      <MotionLazyContainer>
        <LazyComponent {...props} />
      </MotionLazyContainer>
    </Suspense>
  )
}

export const Home = Loadable(() => import('page/home/home'))
export const Dashboard = Loadable(() => import('page/dashboard/dashboard'))
export const LogIn = Loadable(() => import('page/auth/log-in/log-in'))
export const RegisterPage = Loadable(
  () => import('page/auth/register/register')
)
// fallback
export const FallbackPage = Loadable(() => import('page/fallback/fallback'))
