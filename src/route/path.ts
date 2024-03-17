import conNex from 'util/connex'
import { RESPONSE } from 'constant'
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

export class BootcampPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance)
  }

  static BOOTCAMP = PATH.BOOTCAMP
  static BOOTCAMP_ID = conNex(PATH.BOOTCAMP, PATH.ID)
}

export class FallbackPath {
  constructor() {
    throw new Error(RESPONSE.error.NotInstance)
  }

  static BAD_REQUEST = conNex(PATH.BAD_REQUEST)
  static NOT_AUTHORIZED = conNex(PATH.NOT_AUTHORIZED)
  static FORBIDDEN = conNex(PATH.FORBIDDEN)
  static NOT_FOUND = conNex(PATH.NOT_FOUND)
  static UNPROCESSABLE_ENTITY = conNex(PATH.UNPROCESSABLE_ENTITY)
  static SERVER_ERROR = conNex(PATH.SERVER_ERROR)
  static MAINTENNANCE = conNex(PATH.MAINTENNANCE)
}
