import { FC } from 'react'
import { Typography } from '@mui/material'
import { ASSET } from 'config'

const FallbackCode: FC<tccp.FallbackCodeProps> = ({ errorCode }) => {
  return (
    <Typography variant='h1' fontWeight={700} align='center' color='grey.400'>
      {errorCode}
      <span>
        <img
          alt='alert'
          src={ASSET.ALERT}
          width={20}
          style={{
            verticalAlign: 'top',
            backgroundColor: 'grey.200',
            opacity: 0.2,
          }}
        />
      </span>
    </Typography>
  )
}

export default FallbackCode
