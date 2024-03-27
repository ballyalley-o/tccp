import axios from 'util/axios'
import { AuthPath } from 'route/path'

function jwtDecode(token: string) {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  )

  return JSON.parse(jsonPayload)
}

export const isValidToken = (token: string) => {
  if (!token) {
    return false
  }

  const decoded = jwtDecode(token)

  const currentTime = Date.now() / 1000

  return decoded.exp > currentTime
}

export const tokenExpired = (exp: any) => {
  // eslint-disable-next-line prefer-const
  let expiredTimer

  const currentTime = Date.now()

  const timeLeft = exp * 1000 - currentTime

  clearTimeout(expiredTimer)

  expiredTimer = setTimeout(() => {
    alert('Your session has expired. Please login again')

    localStorage.removeItem('token')

    window.location.href = AuthPath.LOG_IN
  }, timeLeft)
}

export const setSession = (token: string) => {
  if (token) {
    localStorage.setItem('token', token)

    axios.defaults.headers.common.Authorization = `${token}`
    const { exp } = jwtDecode(token)
    tokenExpired(exp)
  } else {
    localStorage.removeItem('token')

    delete axios.defaults.headers.common.Authorization
  }
}
