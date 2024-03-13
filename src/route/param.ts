enum PATH {
  ROOT = '/',
  DASHBOARD = 'dashboard',
  // @auth
  AUTH = 'auth',
  LOG_IN = 'log-in',
  LOG_OUT = 'log-out',
  REGISTER = 'register',
  FORGOT_PASSWORD = 'forgot-password',
  RESET_PASSWORD = 'reset-password',
  RESET_TOKEN = 'reset-token',
  // @fallback
  BAD_REQUEST = '400',
  NOT_AUTHORIZED = '401',
  FORBIDDEN = '403',
  NOT_FOUND = '404',
  UNPROCESSABLE_ENTITY = '422',
  SERVER_ERROR = '500',
  MAINTENNANCE = '503',
}

export { PATH }
