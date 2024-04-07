import { useState, forwardRef, ChangeEvent } from 'react'
import { MenuItem, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { KEY, LABEL } from 'constant'
import { FORM } from 'section/auth'
import { useFormContext } from 'react-hook-form'

const MARGIN = 'normal'
const VARIANT = 'filled'

const RoleField = forwardRef(({ name, submitting, sent, errors, helperText }: FormFieldProps, ref) => {
  const [selectedValue, setSelectedValue] = useState('student') // Initial selected value

  const handleValueChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectedValue(event.target.value as string)
  }

  const { register } = useFormContext()
  return (
    <TextField
      // name={KEY.ROLE}
      margin={MARGIN}
      variant={VARIANT}
      disabled={submitting || sent}
      error={!!errors}
      helperText={errors ? errors.message : helperText || helperText}
      {...register(KEY.ROLE)}
      {...FORM.ROLE}
      sx={{
        color: 'common.white',

        '& .MuiFilledInput-root': {
          color: 'common.black',
          backgroundColor: 'common.white',
          '& .MuiInputLabel-root': {
            color: 'common.white'
          },
          '&.Mui-focused .MuiInputBase-input': {
            color: 'common.black'
          },
          '&.Mui-focused': {
            backgroundColor: 'secondary.main'
          },
          '&:hover': {
            backgroundColor: 'secondary.main'
          }
        },
        '&:active': {
          color: 'common.white'
        },
        padding: 1,
        marginY: 1
      }}>
      <MenuItem disabled>{LABEL.SELECT_ROLE}</MenuItem>
      <MenuItem value={'student'}>{LABEL.STUDENT}</MenuItem>
      <MenuItem value={'trainer'}>{LABEL.TRAINER}</MenuItem>
      <MenuItem value={'admin'}>{LABEL.ADMIN}</MenuItem>
    </TextField>
  )
})

export default RoleField
