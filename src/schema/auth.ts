import * as Yup from 'yup'
import { KEY, RESPONSE } from 'constant'

export const registerSchema = Yup.object().shape({
  firstname: Yup.string().required(),
  lastname: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf([Yup.ref(KEY.PASSWORD), undefined], RESPONSE.error.PASSWORD_MATCH),
  username: Yup.string(),
  location: Yup.string(),
  role: Yup.string(),
  avatar: Yup.string()
})
