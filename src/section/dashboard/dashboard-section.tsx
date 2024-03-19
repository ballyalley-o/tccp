import { HTMLAttributes } from 'react'
import { Box, Container } from '@mui/material'
import { Theme, styled } from '@mui/material/styles'
import { SxProps } from '@mui/system'
import { ASSET } from 'config'

const SDashboardSection = styled('section')(({ theme }) => ({
  color: theme.palette.secondary.main,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '80vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}))

const Background = styled('div')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
})

interface DashboardSectionProps {
  sxBackground: SxProps<Theme>
}

function DashboardSection(props: HTMLAttributes<HTMLDivElement> & DashboardSectionProps) {
  const { sxBackground, children } = props

  return (
    <SDashboardSection>
      <Container
        sx={{
          mt: 3,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            // backgroundColor: 'common.black',
            opacity: 0.5,
            zIndex: -1,
          }}
        />

        <Box component='img' src={ASSET.ARROW_DOWN} alt='arrow down' sx={{ position: 'absolute', bottom: 32, width: 40 }} />
        <Background sx={sxBackground} />
      </Container>
    </SDashboardSection>
  )
}

export default DashboardSection
