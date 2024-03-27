import axios from 'axios'
import { GLOBAL } from 'config'

const clearLocalStorageAndLogout = () => {
  localStorage.removeItem('email')
  localStorage.removeItem('name')
  localStorage.removeItem('token')
  window.location.reload()
}

const axiosInstance = axios.create({ baseURL: GLOBAL.APP_SERVER })

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      clearLocalStorageAndLogout()
    }
    return Promise.reject((error.response && error.response.data) || 'Something went wrong')
  }
)

export default axiosInstance
