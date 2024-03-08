import { Theme } from '@mui/material/styles'
import { InputSelectIcon } from './custom-icons'

export default function Select(theme: Theme) {
  return {
    MuiSelect: {
      defaultProps: {
        IconComponent: InputSelectIcon,
      },
    },
  }
}
