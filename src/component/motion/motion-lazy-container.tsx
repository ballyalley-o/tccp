import { ReactNode } from 'react'
import { LazyMotion, m } from 'framer-motion'

const loadFeatures = () => import('./feature.ts').then((res) => res.default)

function MotionLazyContainer({ children }: { children: ReactNode }) {
  return (
    <LazyMotion strict features={loadFeatures}>
      <m.div style={{ height: '100%' }}> {children} </m.div>
    </LazyMotion>
  )
}

export default MotionLazyContainer
