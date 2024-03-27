import { Fragment } from 'react'
import { GSLoadingButton } from 'theme/style'
import { AuthForgotPassword } from 'section/auth'
import { COLOR, BUTTON } from 'constant'

interface FormFieldExtended extends FormFieldProps {
  button: string
  label: string
  labelSub: string
  href: string
}

const FormButtonRedir = ({ submitting, sent, button, label, labelSub, href }: FormFieldExtended) => {
  return (
    <Fragment>
      <GSLoadingButton
        fullWidth
        color={COLOR.SECONDARY}
        size="large"
        type="submit"
        variant="contained"
        loading={sent || submitting}
        sx={{
          mt: 3,
          mb: 2,
          fontSize: 14,
          '&:hover': {
            color: 'common.black'
          }
        }}>
        {button}
      </GSLoadingButton>
      <AuthForgotPassword label={label} labelSub={labelSub} href={href} />
    </Fragment>
  )
}

export default FormButtonRedir
