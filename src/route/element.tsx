import { Suspense, lazy, FC, ComponentType } from 'react'
import { LoadingScreen } from 'component'
import { MotionLazyContainer } from 'component/motion'

const Loadable = (Component: () => Promise<{ default: ComponentType<any> }>): FC<any> => {
  const LazyComponent = lazy(Component)

  return (props: any) => (
    <Suspense fallback={<LoadingScreen />}>
      <MotionLazyContainer>
        <LazyComponent {...props} />
      </MotionLazyContainer>
    </Suspense>
  )
}

export const HomePage = Loadable(() => import('page/home/home'))
export const DashboardPage = Loadable(() => import('page/dashboard/dashboard'))
// auth
export const LogInPage = Loadable(() => import('page/auth/log-in/log-in'))
export const RegisterPage = Loadable(() => import('page/auth/register/register'))
export const UserAccountPage = Loadable(() => import('page/auth/account/user-account'))
// bootcamp
export const BootcampPage = Loadable(() => import('page/bootcamp/bootcamp'))
export const BootcampViewPage = Loadable(() => import('page/bootcamp/view/view'))
// course
export const CoursePage = Loadable(() => import('page/course/course'))
// fallback
export const FallbackPage = Loadable(() => import('page/fallback/fallback'))
