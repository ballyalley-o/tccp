import { useEffect, useMemo } from 'react'
import NProgress from 'nprogress'
import SProgressBar from './style'

export default function ProgressBar() {
  NProgress.configure({
    showSpinner: false,
  })

  useMemo(() => {
    NProgress.start()
  }, [])

  useEffect(() => {
    NProgress.done()
  }, [])

  return <SProgressBar />
}
