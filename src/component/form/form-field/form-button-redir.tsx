import { Fragment } from 'react'
import { FormButton } from 'component/form'
import { AuthForgotPassword } from 'section/auth'
import { COLOR, BUTTON } from 'constant'

interface FormFieldExtended extends FormFieldProps {
  button: string
  label: string
  labelSub: string
  href: string
}

const FormButtonRedir = ({
  submitting,
  sent,
  button,
  label,
  labelSub,
  href,
}: FormFieldExtended) => {
  return (
    <Fragment>
      <FormButton
        sx={{ mt: 3, mb: 2, fontSize: 14 }}
        disabled={submitting || sent}
        color={COLOR.SECONDARY}
        fullWidth
      >
        {submitting || sent ? BUTTON.IN_PROGRESS : button}
      </FormButton>
      <AuthForgotPassword label={label} labelSub={labelSub} href={href} />
    </Fragment>
  )
}

export default FormButtonRedir
