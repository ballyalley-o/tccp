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
  NOT_AUTHORIZED = '403',
  NOT_FOUND = '404',
  INTERNAL_SERVER_ERROR = '500',
  MAINTENNANCE = '503',
}

export { PATH }
