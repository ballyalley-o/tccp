import MuiPaper, { PaperProps } from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

interface ExtraPaperProps {
  background: 'light' | 'main' | 'dark'
  padding?: boolean
}

const PaperRoot = styled(MuiPaper, {
  shouldForwardProp: (prop) => prop !== 'background' && prop !== 'padding',
})<ExtraPaperProps>(({ theme, background, padding }) => ({
  backgroundColor: theme.palette.common.black,
  ...(padding && {
    padding: theme.spacing(1),
  }),
}))

function Paper(props: PaperProps & ExtraPaperProps) {
  const { background, className, padding = false, ...other } = props

  return (
    <PaperRoot
      square
      elevation={0}
      background={background}
      padding={padding}
      className={className}
      {...other}
    />
  )
}

export default Paper
