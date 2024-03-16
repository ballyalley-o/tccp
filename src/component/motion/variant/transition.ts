interface TransitionProps {
  duration?: number
  ease?: string
  durationIn?: number
  easeIn?: string
  durationOut?: number
  easeOut?: string
}

export const varTranHover = (props: TransitionProps) => {
  const duration = props?.duration || 0.32
  const ease = props?.ease || [0.43, 0.13, 0.23, 0.96]

  return { duration, ease }
}

export const varTranEnter = (props: TransitionProps) => {
  const duration = props?.durationIn || 0.64
  const ease = props?.easeIn || [0.43, 0.13, 0.23, 0.96]

  return { duration, ease }
}

export const varTranExit = (props: TransitionProps) => {
  const duration = props?.durationOut || 0.48
  const ease = props?.easeOut || [0.43, 0.13, 0.23, 0.96]

  return { duration, ease }
}
