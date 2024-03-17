import { Field } from 'react-final-form'
import { InputAdornment } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useIcon } from 'hook'
import { ICON_LOC_NAME } from 'config'
import { KEY } from 'constant'
import { FORM } from 'section/auth'

const GithubField = ({ submitting, sent }: FormFieldProps) => {
  const { Icon: LocIcon, iconSrc: githubSrc } = useIcon(ICON_LOC_NAME.GITHUB)

  const theme = useTheme()
  return (
    <Field
      disabled={submitting || sent}
      {...FORM.GITHUB_USERNAME}
      InputProps={{
        startAdornment: (
          <InputAdornment position={KEY.START}>
            <LocIcon icon={githubSrc} color={theme.palette.common.white} />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default GithubField
