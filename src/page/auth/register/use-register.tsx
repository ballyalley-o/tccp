import { useState, useMemo } from 'react'
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
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [reg, { isLoading }] = useRegisterMutation()

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
    defaultValues: useMemo(
      () => ({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
        location: '',
        role: '',
        avatar: ''
      }),
      []
    )
  })

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    setError,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = methods

  const onSubmit = async (data: any) => {
    // const { firstname, lastname, email, password, confirmPassword } = getValues()

    // if (email) {
    //   data.email = email
    // }
    // if (password) {
    //   data.password = password
    // }
    // if (password !== confirmPassword) {
    //   setError(KEY.PASSWORD, { message: 'Passwords must match' })
    //   return
    // }

    try {
      // const formData = getValues()
      const { firstname, lastname, email, password, confirmPassword, username, location, role, avatar } = data
      const payload = {
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
        username,
        location,
        role,
        avatar
      }

      // console.log('data: ', data)
      // console.log('payload : ', payload)

      const res = (await reg(data).unwrap()) as IResponse

      dispatch(setCredential({ isAuthenticated: true, user: res.user, token: res.token }))

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
    register,
    methods,
    handleSubmit,
    onSubmit,
    errors,
    isLoading,
    isSubmitting,
    isSubmitSuccessful
  }
}

export default useRegister
