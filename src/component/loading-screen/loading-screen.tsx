import React, { useEffect, useRef, useState } from 'react'
import { m } from 'framer-motion'
import { gsap } from 'gsap'
import { useResponsive } from 'hook'
import { useSpring, config, animated } from '@react-spring/web'
import useMeasure from 'react-use-measure'
import { Box, Typography, Stack } from '@mui/material'
import { AnimatedBrandLogo } from 'component/loading-screen'
import { KEY, TYPOGRAPHY } from 'constant'
import { SRoot } from './style'
import styles from './styles.module.css'
import { GLOBAL } from 'config'

const loadingPhrases = ['Loading...', 'Hang tight...', 'Just a moment...', 'Almost there...']

function LoadingScreen() {
  const [loadingProgress, setLoadingProgress] = useState<any>(0)
  const [phrase, setPhrase] = useState(loadingPhrases[0])
  const [open, toggle] = useState(false)
  const [ref, { width }] = useMeasure()
  const props = useSpring({ width })
  const props2 = useSpring({
    from: { x: 0, y: 0, z: 0 },
    to: { x: 1, y: 1, z: 1 }
  })

  const [parallaxProps, setParallaxProps] = useSpring(() => ({
    xy: [0, 0],
    config: config.wobbly
  }))

  const isDesktop = useResponsive({ query: 'up', start: 'md', end: 'xl' })

  const worldRef = useRef(null)

  const handleLoadingProgress = (progress: number) => {
    setLoadingProgress(progress)
  }

  useEffect(() => {
    const world = worldRef.current as SVGSVGElement | null
    const tl = gsap.timeline({ repeat: -1, yoyo: true })

    tl.to(world, { rotation: 360, duration: 5, ease: 'power2.inOut' }).to(world, { rotationY: 360, duration: 3, ease: 'power2.inOut' })

    return () => {
      tl.kill()
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setPhrase(loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event
    const offsetX = (clientX - window.innerWidth / 2) / 50
    const offsetY = (clientY - window.innerHeight / 2) / 50
    setParallaxProps({ xy: [offsetX, offsetY] })
  }

  return (
    <SRoot
      sx={{
        ...(isDesktop && {})
      }}
      onMouseMove={handleMouseMove}>
      <Stack
        sx={{
          alignItems: KEY.CENTER
        }}>
        <animated.div
          style={{
            transform: parallaxProps.xy.to((x, y) => `translate3d(${x}px, ${y}px, 0)`)
          }}>
          <AnimatedBrandLogo worldRef={worldRef} />
        </animated.div>

        <Typography variant={TYPOGRAPHY.SUBTITLE1} sx={{ color: 'grey.300' }}>
          {GLOBAL.APP_NAME}
        </Typography>
        <Box my={1}>
          <Typography variant={TYPOGRAPHY.BODY2}>{phrase}</Typography>
        </Box>
        <m.div className={styles.container}>
          <m.div ref={ref} className={styles.main} onClick={() => toggle(!open)}>
            <animated.div className={styles.fill} style={props} />
            <animated.div className={styles.content}>{props.width.to((x) => x.toFixed(0))}</animated.div>
          </m.div>
        </m.div>
      </Stack>
    </SRoot>
  )
}

export default LoadingScreen
