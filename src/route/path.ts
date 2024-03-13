import { RESPONSE } from 'constant'
import conNex from 'util/connex'
import { PATH } from './param'

export class RootPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance)
  }

  static ROOT_PARAM = PATH.ROOT
  static DASHBOARD = PATH.DASHBOARD
}

export class AuthPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance)
  }

  static LOG_IN = conNex(PATH.AUTH, PATH.LOG_IN)
  static LOG_OUT = conNex(PATH.AUTH, PATH.LOG_OUT)
  static REGISTER = conNex(PATH.AUTH, PATH.REGISTER)
  static FORGOT_PASSWORD = conNex(PATH.AUTH, PATH.FORGOT_PASSWORD)
  static RESET_PASSWORD = conNex(PATH.AUTH, PATH.RESET_PASSWORD)
  static RESET_TOKEN = conNex(PATH.AUTH, PATH.RESET_TOKEN)
}

export class FallbackPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance)
  }

  static NOT_AUTHORIZED = conNex(PATH.NOT_AUTHORIZED)
  static NOT_FOUND = conNex(PATH.NOT_FOUND)
  static INTERNAL_SERVER_ERROR = conNex(PATH.INTERNAL_SERVER_ERROR)
  static MAINTENNANCE = conNex(PATH.MAINTENNANCE)
}
