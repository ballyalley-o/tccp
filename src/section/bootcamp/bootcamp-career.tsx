import { FC } from 'react'
import { Chip } from '@mui/material'
import { SScrollBox } from 'theme/style'
import { SIZE, VARIANT } from 'constant'

const BootcampCareer: FC<UploadLocationProps> = ({ bootcamp }) => {
  return (
    <SScrollBox>
      {bootcamp?.careers?.map((chip: string, index: number) => (
        <Chip key={index} label={chip} variant={VARIANT.OUTLINED} size={SIZE.SMALL} sx={{ mr: 1, color: 'common.black' }} />
      ))}
    </SScrollBox>
  )
}

export default BootcampCareer
