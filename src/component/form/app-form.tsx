import { HTMLAttributes, ReactNode } from 'react'
import { Container, Box, ContainerProps } from '@mui/material'
import { Paper } from 'component/paper'
import { ASSET } from 'config'

interface AppFormProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerProps['maxWidth']
  children: ReactNode
}

export default function AppForm({
  size = 'sm',
  children,
  ...props
}: AppFormProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundImage: `url(${ASSET.LINE_BG})`,
        backgroundRepeat: 'no-repeat',
        margin: 'auto',
        fontSize: '1.2rem',
        color: 'common.white',
      }}
    >
      <Container maxWidth={size}>
        <Box sx={{ mt: 20, mb: 12, height: '100vh', alignContent: 'center' }}>
          <Paper
            background='dark'
            sx={{
              py: { xs: 4, md: 8 },
              px: { xs: 3, md: 6 },
              fontSize: '1.2rem',
              color: 'common.white',
            }}
          >
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}
