import CODE from './code'

const FALLBACK = {
  BAD_REQUEST: {
    CODE: CODE.BAD_REQUEST,
    MESSAGE: 'Bad Request',
  },
  NOT_AUTHORIZED: {
    CODE: CODE.NOT_AUTHORIZED,
    MESSAGE: 'Not Authorized',
  },
  FORBIDDEN: {
    CODE: CODE.FORBIDDEN,
    MESSAGE: 'Forbidden',
  },
  NOT_FOUND: {
    CODE: CODE.NOT_FOUND,
    MESSAGE: 'Page Not Found',
  },
  SERVER_ERROR: {
    CODE: CODE.INTERNAL_SERVER_ERROR,
    MESSAGE: 'Server Error',
  },
  UNPROCESSABLE_ENTITY: {
    CODE: CODE.UNPROCESSABLE_ENTITY,
    MESSAGE: 'Unprocessable Entity',
  },
  MAINTENNANCE: {
    CODE: CODE.SERVICE_UNAVAILABLE,
    MESSAGE: 'Service Unavailable',
  },
}

export default FALLBACK
