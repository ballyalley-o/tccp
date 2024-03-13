import { Fragment } from 'react'
import { Container, Typography } from '@mui/material'
import { FallbackBrand, FallbackCode } from 'section/fallback'
import { FallbackProps, FallbackTypographyProps } from 'theme/style'

const Fallback = ({ fallbackTitle, errorCode }: tccp.FallbackProps) => {
  return (
    <Fragment>
      <Container {...FallbackProps}>
        <FallbackCode errorCode={errorCode} />
        <Typography {...FallbackTypographyProps}>{fallbackTitle}</Typography>
        <FallbackBrand />
      </Container>
    </Fragment>
  )
}

export default Fallback
