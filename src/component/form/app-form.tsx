import { HTMLAttributes, ReactNode } from 'react'
import { Container, Box, ContainerProps } from '@mui/material'
import { Paper } from 'component/paper'
import { ASSET } from 'config'

interface AppFormProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerProps['maxWidth']
  children: ReactNode
  isLogin?: boolean
}

export default function AppForm({ isLogin, size = 'sm', children, ...props }: AppFormProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        backgroundImage: `url(${ASSET.PATTERN_BG})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: 'auto',
        fontSize: '1.2rem',
        color: 'common.white'
      }}>
      <Container maxWidth={size} sx={{ width: isLogin ? 500 : 'auto' }}>
        <Box sx={{ height: '100vh', alignContent: 'center' }}>
          <Paper
            background="dark"
            sx={{
              py: { xs: 4, md: 8 },
              px: { xs: 3, md: 6 },
              fontSize: '1.2rem',
              color: 'common.white'
            }}>
            {children}
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}
