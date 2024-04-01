import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useRegisterMutation } from 'store/slice'
import { setCredential } from 'store/slice/auth'
import { KEY, RESPONSE } from 'constant'
import { RootPath } from 'route/path'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const useRegister = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [username, setUsername] = useState('')
  const [location, setLocation] = useState('')
  const [role, setRole] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [register, { isLoading }] = useRegisterMutation()

  const registerSchema = Yup.object().shape({
    firstname: Yup.string().required(),
    lastname: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), undefined], 'Passwords must match'),
    username: Yup.string(),
    location: Yup.string(),
    role: Yup.string(),
    avatar: Yup.string()
  })

  const methods = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: '',
      username: '',
      location: '',
      role: '',
      avatar: ''
    }
  })

  const {
    control,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = methods

  const onSubmit = async (data: any) => {
    if (email) {
      data.email = email
    }
    if (password) {
      data.password = password
    }
    if (password !== confirmPassword) {
      setError(KEY.PASSWORD, { message: 'Passwords must match' })
      return
    }

    try {
      const res: IResponse = (await register({
        firstname: data.firstname,
        email: data.email,
        password: data.password,
        username: data.user,
        role: data.role
      }).unwrap()) as IResponse

      await dispatch(setCredential({ ...res }))

      if (res?.message) {
        throw new Error(res.message)
      }
      navigate(RootPath.ROOT_PARAM)
    } catch (error: any) {
      console.error('error : ', error || '')
      reset()
      setError(KEY.EMAIL, { message: error.message })
    }
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    username,
    setUsername,
    location,
    setLocation,
    role,
    setRole,
    control,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
    isSubmitting,
    isSubmitSuccessful
  }
}

export { useRegister }
