import { useState, useEffect } from 'react'

function defer<P>(Component: React.ComponentType<P>) {
  function Defer(props: P) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
      setMounted(true)
    }, [])

    return <Component mounted={mounted} {...props} />
  }

  return Defer
}

export default defer
