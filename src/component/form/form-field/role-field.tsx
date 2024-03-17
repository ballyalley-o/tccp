import { MenuItem } from '@mui/material'
import { TextField } from 'component'
import { KEY, LABEL } from 'constant'
import { FORM } from 'section/auth'

const MARGIN = 'normal'
const VARIANT = 'standard'

const RoleField = () => {
  return (
    <TextField margin={MARGIN} variant={VARIANT} {...FORM.ROLE}>
      <MenuItem value='' disabled>
        {LABEL.SELECT_ROLE}
      </MenuItem>
      <MenuItem value={KEY.STUDENT}>{LABEL.STUDENT}</MenuItem>
      <MenuItem value={KEY.TRAINER}>{LABEL.TRAINER}</MenuItem>
      <MenuItem value={KEY.ADMIN}>{LABEL.ADMIN}</MenuItem>
    </TextField>
  )
}

export default RoleField
