import { MotionLazyContainer } from 'component/motion'
import { Container, Box, Typography } from '@mui/material'
import { FullBox } from 'theme/style'

const UserAccount = () => {
  return (
    <MotionLazyContainer>
      <Container {...FullBox}>
        <Box>
          <Typography variant='body1' color='initial'>
            User Account
          </Typography>
        </Box>
      </Container>
    </MotionLazyContainer>
  )
}

export default UserAccount
